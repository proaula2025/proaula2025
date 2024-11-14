import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "./useForm";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const { setEstaEnLinea, setUsuarioEnLinea } = useContext(UserContext);
  const navigate = useNavigate();
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const inputFileRef = useRef(null);

  const {
    tipoUsuario,
    nombre,
    tipoDocumento,
    numeroDocumento,
    telefono,
    correo,
    contrasena,
    onInputChange,
  } = useForm({
    tipoUsuario: "Persona natural",
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    telefono: "",
    correo: "",
    contrasena: "",
  });

  const validarFormulario = ({
    tipoUsuario,
    nombre,
    tipoDocumento,
    numeroDocumento,
    telefono,
    correo,
    contrasena,
  }) => {
    if (imagenSeleccionada === null) {
      toast.error("La imagen es obligatoria.");
      return false;
    }

    // Validar que no estén vacíos
    if (!tipoUsuario || tipoUsuario.trim() === "") {
      toast.error("El tipo de usuario es obligatorio.");
      return false;
    }

    if (!nombre || nombre.trim() === "") {
      toast.error("El nombre es obligatorio.");
      return false;
    }

    if (!tipoDocumento || tipoDocumento.trim() === "") {
      toast.error("El tipo de documento es obligatorio.");
      return false;
    } else if (tipoUsuario !== "Empresa" && tipoDocumento === "NIT") {
      toast.error(
        "El tipo de documento NIT no es válido para una persona natural o fundación."
      );
      return false;
    } else if (tipoUsuario === "Empresa" && tipoDocumento === "Cedula") {
      toast.error("El tipo de documento Cedula no es válido para una empresa.");
      return false;
    }

    if (
      !numeroDocumento ||
      Number(numeroDocumento) <= 0 ||
      numeroDocumento.trim() === ""
    ) {
      toast.error("El número de documento es obligatorio.");
      return false;
    } else if (!/^\d+$/.test(numeroDocumento)) {
      toast.error("El número de documento debe contener solo números.");
      return false;
    }

    if (!telefono || Number(telefono) <= 0 || telefono.trim() === "") {
      toast.error("El teléfono es obligatorio.");
      return false;
    } else if (!/^\d+$/.test(telefono)) {
      toast.error("El teléfono debe contener solo números.");
      return false;
    }

    if (!correo || correo.trim() === "") {
      toast.error("El correo es obligatorio.");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      toast.error("El correo no es válido.");
      return false;
    }

    if (!contrasena || contrasena.trim() === "") {
      toast.error("La contraseña es obligatoria.");
      return false;
    } else if (contrasena.length < 8) {
      toast.error("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }

    return true;
  };

  const onGuardarUsuario = async (e) => {
    e.preventDefault();

    const errores = validarFormulario({
      tipoUsuario,
      nombre,
      tipoDocumento,
      numeroDocumento,
      telefono,
      correo,
      contrasena,
    });

    if (!errores) return;

    try {
      const url = "http://localhost:9999/api/registrar";

      // Crear un objeto FormData
      const formData = new FormData();
      formData.append(
        "usuario",
        new Blob(
          [
            JSON.stringify({
              nombreCompleto: nombre,
              tipoDocumento: tipoDocumento,
              numeroDocumento: numeroDocumento,
              telefono: telefono,
              email: correo,
              password: contrasena,
              tipoEntidad: tipoUsuario,
            }),
          ],
          { type: "application/json" }
        )
      );

      formData.append("file", imagenSeleccionada);

      const response = await axios.post(url, formData);

      if (response.data.esValido) {
        toast.success("Usuario registrado correctamente en la base de datos");

        localStorage.setItem(
          "usuarioActivo",
          JSON.stringify(response.data.usuario)
        );

        setEstaEnLinea(true);
        setUsuarioEnLinea(response.data.usuario);

        if (tipoUsuario === "Persona natural") {
          navigate("/personas");
        } else if (tipoUsuario === "Fundacion") {
          navigate("/fundaciones");
        } else if (tipoUsuario === "Empresa") {
          navigate("/empresas");
        }
      } else {
        toast.error(response.data.mensaje);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Error al registrar el usuario: " + error.response.data.mensaje
      );
    }
  };

  const handleFileChange = () => {
    const file = inputFileRef.current.files[0];
    setImagenSeleccionada(file);
  };

  return {
    tipoUsuario,
    nombre,
    tipoDocumento,
    numeroDocumento,
    telefono,
    correo,
    contrasena,
    onInputChange,
    onGuardarUsuario,
    handleFileChange,
    imagenSeleccionada,
    inputFileRef,
  };
};
