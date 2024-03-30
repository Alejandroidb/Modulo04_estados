import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacion de iconos desde font-awesome

const Icon = ({ icon, ...props }) => { //funcion que nos permitira agregar iconos a traves de props
  return <FontAwesomeIcon icon={icon} {...props} />;
};

export default Icon; //exportamos 
 