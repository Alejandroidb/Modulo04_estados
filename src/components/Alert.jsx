const alertMessage = ({ message }) => {
    return (
      <div className="alert alert-danger mt-2" role="alert">
        {message}
      </div>
    );
  };
  export default alertMessage