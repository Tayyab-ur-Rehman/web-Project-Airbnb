import PropTypes from 'prop-types';
import './style/detailComponent.css';


Detail_temp.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


function Detail_temp  ({text,img,location,guest,bedroom,bathroom,costPerNight}) {
return (
    <div id = "box"  >
        <ul>
           <img src= {img} /> 
            <h4>{location}</h4>
            <p>{text}</p>
        </ul>
    </div>
);


}

export default Detail_temp;