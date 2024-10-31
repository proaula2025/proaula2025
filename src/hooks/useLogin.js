import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "./useForm";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { setEstaEnLinea, setUsuarioEnLinea } = useContext(UserContext);
  const navigate = useNavigate();
  const { formState, onInputChange } = useForm({
    tipoUsuario: "Administrador",
    correo: "",
    contrasena: "",
  });

  const validarFormulario = ({ correo, contrasena }) => {
    const errores = {};

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

    return errores;
  };

  const onIniciarSesion = async (e) => {
    e.preventDefault();

    const errores = validarFormulario(formState);

    if (Object.keys(errores).length > 0)
      return Object.values(errores).map((error) => toast.error(error));

    try {
      const response = await axios.post("http://localhost:9999/api/iniciar", {
        email: formState.correo,
        password: formState.contrasena,
        tipoEntidad: formState.tipoUsuario,
      });

      if (response.data.esValido) {
        toast.success(response.data.mensaje);

        localStorage.setItem(
          "usuarioActivo",
          JSON.stringify(response.data.usuario)
        );

        setEstaEnLinea(true);
        setUsuarioEnLinea(response.data.usuario);

        if (formState.tipoUsuario === "Persona natural") {
          navigate("/personas");
        } else if (formState.tipoUsuario === "Fundacion") {
          navigate("/fundaciones");
        } else if (formState.tipoUsuario === "Empresa") {
          navigate("/empresas");
        } else {
          navigate("/admin");
        }
      } else {
        toast.error(response.data.mensaje);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        "Ocurrió un error al iniciar sesión: " + error.response.data.mensaje
      );
    }
  };

  return {
    formState,
    onInputChange,
    onIniciarSesion,
  };
};
