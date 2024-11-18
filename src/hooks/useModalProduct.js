import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "./useForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ProductosContext } from "../context/ProductsContext";
import { useState } from "react";
import { useRef } from "react";

export const useModalProduct = ({
  handleOpenModalProduct,
  fundacionSeleccionada,
  tipoDeProducto,
  mensajeGuardado,
}) => {
  const { setProductos, setProductosPersona } = useContext(ProductosContext);
  const { usuarioEnLinea } = useContext(UserContext);
  const [cargandoGuardado, setCargandoGuardado] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const inputFileRef = useRef(null);

  const { formState, onInputChange } = useForm({
    nombreProducto: "",
    categoria: "",
    estado: "",
    direccion: "",
    cantidad: "",
    precio: "",
    descripcion: "",
    tipoProducto: "",
  });

  const validateForm = (formState) => {
    const errors = {};

    if (!formState.nombreProducto || formState.nombreProducto.length < 3) {
      errors.nombreProducto =
        "El nombre del producto es obligatorio y debe tener al menos 3 caracteres.";
      return errors;
    }

    if (!formState.categoria) {
      errors.categoria = "La categoría es obligatoria.";
      return errors;
    }

    if (!formState.estado) {
      errors.estado = "El estado es obligatorio.";
      return errors;
    }

    if (!formState.direccion || formState.direccion.length < 5) {
      errors.direccion =
        "La dirección es obligatoria y debe tener al menos 5 caracteres.";
      return errors;
    }

    if (
      !formState.cantidad ||
      isNaN(formState.cantidad) ||
      formState.cantidad <= 0
    ) {
      errors.cantidad =
        "La cantidad es obligatoria y debe ser un número positivo.";
      return errors;
    }

    if (usuarioEnLinea.tipoEntidad !== "Empresa") {
      if (
        !formState.precio ||
        isNaN(formState.precio) ||
        formState.precio <= 0
      ) {
        errors.precio =
          "El precio es obligatorio y debe ser un número positivo.";
        return errors;
      }
    }

    if (usuarioEnLinea.tipoEntidad !== "Empresa") {
      if (!formState.tipoProducto) {
        errors.tipoProducto = "El tipo de producto es obligatorio.";
        return errors;
      }
    }

    if (formState.descripcion && formState.descripcion.length > 250) {
      errors.descripcion =
        "La descripción no puede exceder los 250 caracteres.";
      return errors;
    }

    return errors;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImagenSeleccionada(file);
    } else {
      alert("Por favor selecciona un archivo de imagen válido.");
    }
  };

  const onGuardarProducto = async (e) => {
    e.preventDefault();

    const errors = validateForm(formState);

    if (Object.keys(errors).length > 0) {
      return Object.values(errors).map((error) => toast.error(error));
    }

    if (!imagenSeleccionada) {
      return toast.error("Por favor selecciona una imagen para el producto.");
    }

    setCargandoGuardado(true);

    const loadingToast = toast.loading("Guardando producto...", {
      duration: 6000,
      style: {
        border: "1px solid #0a74da",
        padding: "16px",
        color: "#0a74da",
      },
      iconTheme: {
        primary: "#0a74da",
        secondary: "#fff",
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 6000));

    try {
      // Crear objeto FormData
      const formData = new FormData();

      // Agregar datos del producto
      formData.append(
        "producto",
        new Blob(
          [
            JSON.stringify({
              nombreProducto: formState.nombreProducto,
              categoria: formState.categoria,
              estado: formState.estado,
              direccionRecogida: formState.direccion,
              cantidad: formState.cantidad,
              precio: formState.precio,
              descripcion: formState.descripcion,
              fecha: new Date(),
              tipoProducto: formState.tipoProducto,
              ...(tipoDeProducto === "Donación"
                ? {
                    empresaDono: { idUsuario: usuarioEnLinea.idUsuario },
                    usuario: { idUsuario: fundacionSeleccionada.idUsuario },
                    tipoProducto: "Donación",
                  }
                : {
                    usuario: { idUsuario: usuarioEnLinea.idUsuario },
                  }),
            }),
          ],
          { type: "application/json" }
        )
      );

      // Agregar archivo de imagen
      formData.append("file", imagenSeleccionada);

      // Realizar solicitud POST con FormData
      const response = await axios.post(
        "http://localhost:9999/api/producto",
        formData
      );

      if (response.data.esValido) {
        toast.success(response.data.mensaje);
        toast.success(mensajeGuardado);

        if (tipoDeProducto === "Donación") {
          setProductos((productos) => [
            ...productos,
            response.data.productoDTO,
          ]);
        } else {
          setProductosPersona((productosPersona) => [
            ...productosPersona,
            response.data.productoDTO,
          ]);
        }

        handleOpenModalProduct();
      } else {
        toast.error(response.data.mensaje);
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al guardar el producto. " + error.message);
    } finally {
      toast.dismiss(loadingToast);
      setCargandoGuardado(false);
    }
  };

  return {
    formState,
    onInputChange,
    onGuardarProducto,
    cargandoGuardado,
    usuarioEnLinea,
    handleFileChange,
    inputFileRef,
    imagenSeleccionada,
  };
};
