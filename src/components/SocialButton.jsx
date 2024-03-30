import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons" //importamos los iconos especificos a usar
import Icon from "./Icon" //importamos el componente que nos dejara agregar los iconos importados
const SocialButton = () => { //funcion que nos muestra los iconos dentro del componente Registro
    return (
        <div className="social">
            <button className="border"><Icon icon={faFacebook} size="2x"/></button> 
            <button className="border"><Icon icon={faGithub} size="2x"/></button>
            <button className="border"><Icon icon={faLinkedinIn} size="2x"/></button>
        </div>
    )
}
export default SocialButton //exportamos