import React, { useState } from "react"; //importamos el hook useState para guardar estados
import AlertMessage from "./AlertMessage"; //importamos el componente que nos ayuda a mostrar los mensajes de success o danger
const Formulario = () => {  //de aca comienza el formulario para ingresar datos en la pagina de registro
  const [data, setData] = useState({ //constantes que nos envuelven todos los objetos que guardan estados
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [passwordSame, setPasswordSame] = useState(true); // estado para controlar que las contraseñas sean iguales
  const [error, setError] = useState(false); //estado que nos muestra si estan todos los campos completados o no
  const [registroExitoso, setRegistroExitoso] = useState(false); //estado que nos dice si registra los datos o faltan

  const cambios = (e) => {  // funcion para manejar los estados de los datos a cambiar
    const { name, value } = e.target; //extraer el dato correspodiente de acuerdo a lo que se ingresa
    setData({ ...data, [name]: value }); //modificar el estado dinamicamente
  };

  const validarInfo = (e) => { //funcion que para validar datos antes de enviar
    e.preventDefault(); //evitar el enviar el formulario antes de ingresar todos los datos
    if ( //verifica que los campos tengan datos o esten vacios
      data.nombre === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmarPassword === ""
    ) {
      setError(true);  //si falta algun campo nos cambia el estado a verdadero para mostrar el mensaje de que faltan datos
      setRegistroExitoso(false); 
      return;
    }
    setError(false); //si no hay datos vacios se vuelve al estado inicial

    if (data.password !== data.confirmarPassword) { //verifacion de contraseñas iguales
      setPasswordSame(false); //si las contraseñas no son iguales vuelve al estado inicial y nos muestra mensaje de campo incompleto
      setRegistroExitoso(false);
      return;
    }
    setPasswordSame(true); //si las contraseñas son iguales muestra mensaje de datos registrados
    setRegistroExitoso(true);
  };

  return ( //formulario de registro, datos nombre, email, contrasena y confirmacion de contraseña
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

          <div id="emailHelp" className="form-text"> {/*texto informativo*/}
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
          {!passwordSame && ( //mensaje para contraseña que no coinciden
            <div className="text-danger">Las contraseñas no coinciden</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100"> {/*boton de registro*/}
          Registrarse
        </button>
        {error && ( //mensaje para indicar que faltan datos
          <AlertMessage
            message="Todos los campos son obligatorios"
            success={false}
          />
        )}
        {registroExitoso && ( //mensaje para saber indicar datos registrados
          <AlertMessage
            message="Los datos han sido registrados"
            success={true}
          />
        )}
      </form>
    </div>
  );
};

export default Formulario;
