import PropTypes from 'prop-types';
import './style/card.css';

Card_temp.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


function Card_temp  ({text,img,title}) {

return (
    <div id = "box">
        <ul>
           <img src= {img} /> 
            <h4>{title}</h4>
            <p>{text}</p>
        </ul>
    </div>
);


}

export default Card_temp;