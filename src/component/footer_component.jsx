import PropTypes from 'prop-types';
import './style/footer_component.css'

Footer_component.propTypes = {
    data: PropTypes.array.isRequired,
    links: PropTypes.array,
    title: PropTypes.string.isRequired,
   
};


function Footer_component  ({title , data,links}) {

return (
    <div id='fot_com_inner' >
        <h3>{title}</h3>
        <ul>
          {data.map((item ,index )=>{
            return <li>{item}</li>

          })}
        </ul>
    </div>
);


}

export default Footer_component;