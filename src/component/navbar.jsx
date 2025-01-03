import PropTypes from 'prop-types';
import { useState } from 'react';
import './style/navbar.css';
import { useNavigate } from 'react-router-dom';
NavBar.propTypes = {
    logo: PropTypes.string.isRequired,
    page1: PropTypes.string.isRequired,
    page2: PropTypes.string.isRequired,
    page3: PropTypes.string.isRequired,
};


function NavBar(props) {
    const navigate =useNavigate();

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value); // Update state
};




return (
<nav>
   
         <img src= {props.logo} /> 

         <div className="search-container">
         <input id="input"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type here..."
                />
         <button id="search-btn">Search</button>
         </div>
       
        <div id="right_nav_comp">
            <div className="link_comp">{props.page1}</div>
            <div className="link_comp">{props.page2}</div>
            <buttom onClick={()=>{navigate('/profile')}}className="link_comp">{"profile"} </buttom>
        </div>
</nav>



);


}


export default NavBar;