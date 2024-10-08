import { useState } from 'react';
import './style/scroll_nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faAnchor, faBicycle, faCar, faCat, faDog, faDragon, faFeather, faFish, faGlobe, faHeart, faHome, faIceCream, faKey, faLaptop, faLeaf, faLightbulb, faLock, faMoon, faPaperPlane, faPencilAlt, faRocket, faShieldAlt, faSmile, faSnowflake, faStar, faSun, faThumbsUp, faTree, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';

const iconsArray = [
    faCoffee, faAppleAlt, faAnchor, faBicycle, faCar, faCat, faDog, faDragon, faFeather, faFish, faGlobe, 
    faHeart, faHome, faIceCream, faKey, faLaptop, faLeaf, faLightbulb, faLock, faMoon, faPaperPlane, 
    faPencilAlt, faRocket, faShieldAlt, faSmile, faSnowflake, faStar, faSun, faThumbsUp, faTree, faUser, 
    faWrench
    // Add more icons here if needed
  ];





function Scroll_NavBar() {

return (
    
<div id="nav_scroll_container">
  {iconsArray.map((icon, index) => (
               <FontAwesomeIcon key={index} icon={icon} style={{ color: '#fc6c74' }} size="2x" />

              ))}
</div>




);


}


export default Scroll_NavBar;