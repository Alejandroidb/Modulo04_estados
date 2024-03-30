import React from "react";

const AlertMessage = ({ message, success }) => {
  const alertClass = success ? "alert-success" : "alert-danger";

  return (
    <div className={`alert ${alertClass} mt-2`} role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;