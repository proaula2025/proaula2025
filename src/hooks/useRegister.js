import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "./useForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const { setEstaEnLinea } = useContext(UserContext);
  const navigate = useNavigate();

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
    const errores = {};

    // Validar que no estén vacíos
    if (!tipoUsuario || tipoUsuario.trim() === "") {
      errores.tipoUsuario = "El tipo de usuario es obligatorio.";
    }

    if (!nombre || nombre.trim() === "") {
      errores.nombre = "El nombre es obligatorio.";
    }

    if (!tipoDocumento || tipoDocumento.trim() === "") {
      errores.tipoDocumento = "El tipo de documento es obligatorio.";
    }

    if (!numeroDocumento || numeroDocumento.trim() === "") {
      errores.numeroDocumento = "El número de documento es obligatorio.";
    } else if (!/^\d+$/.test(numeroDocumento)) {
      errores.numeroDocumento =
        "El número de documento debe contener solo números.";
    }

    if (!telefono || telefono.trim() === "") {
      errores.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d+$/.test(telefono)) {
      errores.telefono = "El teléfono debe contener solo números.";
    }

    if (!correo || correo.trim() === "") {
      errores.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      errores.correo = "El formato del correo es incorrecto.";
    }

    if (!contrasena || contrasena.trim() === "") {
      errores.contrasena = "La contraseña es obligatoria.";
    } else if (contrasena.length < 8) {
      errores.contrasena = "La contraseña debe tener al menos 8 caracteres.";
    }

    // Retornar los errores (si hay)
    return errores;
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

    if (Object.keys(errores).length > 0)
      return Object.values(errores).map((error) => toast.error(error));

    try {
      const url = "http://localhost:9999/api/registrar";

      const response = await axios.post(url, {
        nombreCompleto: nombre,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        telefono: telefono,
        email: correo,
        password: contrasena,
        tipoEntidad: tipoUsuario,
      });

      if (response.data.esValido) {
        toast.success("Usuario registrado correctamente en la base de datos");

        localStorage.setItem(
          "usuarioActivo",
          JSON.stringify(response.data.usuario)
        );

        setEstaEnLinea(true);

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

      toast.error("Error al registrar el usuario" + error);
    }
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
  };
};
