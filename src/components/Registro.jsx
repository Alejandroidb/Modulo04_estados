import SocialButton from "./SocialButton" //importamos componente
import Formulario from "./Formulario" //importamos componente
const Registro = () => { //funcion que nos renderizara los componentes en un solo componente
    return ( //la funcions nos devuelve los componentes mas datos agregados 
        <div className="registro pt-2 pb-2 mt-2 "> 
            <h1>Crea tu cuenta</h1>
            <SocialButton />
            <Formulario />
        </div>
    )
}
export default Registro //exportamos para usarlo en App.jsx