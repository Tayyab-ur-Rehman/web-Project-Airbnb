import PropTypes from 'prop-types';
import { useState } from 'react';
import './navbar.css';

NavBar.propTypes = {
    logo: PropTypes.string.isRequired,
    page1: PropTypes.string.isRequired,
    page2: PropTypes.string.isRequired,
    page3: PropTypes.string.isRequired,
};


function NavBar(props) {

const [inputValue, setInputValue] = useState('');
const handleChange = (event) => {
    setInputValue(event.target.value); // Update state
};


return (
<nav>
    <ul>
         <img src= {props.logo} /> 
         <input id="input"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type here..."
                />
        <li id="navbar_component"><a href="#about">{props.page1}</a></li>
        <li id="navbar_component"><a href="#services">{props.page2}</a></li>
        <li id="navbar_component"><a href="#contact">{props.page3}</a></li>
    </ul>
</nav>



);


}


export default NavBar;