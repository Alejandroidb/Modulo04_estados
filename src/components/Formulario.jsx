import React, { useState } from "react";
import Alert from "./Alert"
const Formulario = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [passwordSame, setPasswordSame] = useState(true);
  const [error, setError] = useState(false);

  const cambios = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validarInfo = (e) => {
    e.preventDefault();
    if (
      data.nombre === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmarPassword === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    if (data.password !== data.confirmarPassword) {
      setPasswordSame(false);
      return;
    }
    setPasswordSame(true);
    console.log(data);
  };

  return (
    <div className="container">
      <h4 className="m-2">O usa tu email para registrarte</h4>
      <form className="formulario" onSubmit={validarInfo}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Ingresa tu nombre"
            name="nombre"
            value={data.nombre}
            onChange={cambios}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="tucorreo@tucorreo.com"
            name="email"
            value={data.email}
            onChange={cambios}
          />

          <div id="emailHelp" className="form-text">
            Nunca compartiremos tus datos.
          </div>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={data.password}
            onChange={cambios}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword1"
            placeholder="Confirma tu contraseña"
            name="confirmarPassword"
            value={data.confirmarPassword}
            onChange={cambios}
          />
          {!passwordSame && (
            <div className="text-danger">Las contraseñas no coinciden</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
        {error && (
          <Alert message="Todos los campos son obligatorios"/>
        )}
      </form>
    </div>
  );
};

export default Formulario;
