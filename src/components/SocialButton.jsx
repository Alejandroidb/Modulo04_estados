import { faFacebook, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import Icon from "./Icon"
const SocialButton = () => {
    return (
        <div className="social">
            <button className="border"><Icon icon={faFacebook} size="2x"/></button>
            <button className="border"><Icon icon={faGithub} size="2x"/></button>
            <button className="border"><Icon icon={faLinkedinIn} size="2x"/></button>
        </div>
    )
}
export default SocialButton