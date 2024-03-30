import React from "react"; //importar react 

const AlertMessage = ({ message, success }) => { //funcion para mostrar mensaje de alerta
  const alertClass = success ? "alert-success" : "alert-danger"; //condicion para mostrar mensaje de aceptar o alerta de campos vacions

  return ( //al ejecutar la funcion nos retornará un div con el mensaje correspondiente
    <div className={`alert ${alertClass} mt-2`} role="alert">
      {message}
    </div>
  );
};

export default AlertMessage; //exportamos para agregar en otros componentes