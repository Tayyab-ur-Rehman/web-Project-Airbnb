import PropTypes from 'prop-types';
import './style/card.css';
import { useNavigate } from 'react-router-dom';


Card_temp.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number,
};


function Card_temp  ({id,text,img,title}) {
   const navigate =useNavigate()
return (
    <div id = "box" onClick={()=>navigate(`/Detail/${id}`)}  >
        <ul>
           <img src= {img} /> 
            <h4>{title}</h4>
            <p>{text}</p>
        </ul>
    </div>
);


}

export default Card_temp;