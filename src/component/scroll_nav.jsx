import axios from "axios";
import './style/scroll_nav.css';
import {Store} from '../dataStorage.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrellaBeach,
  faGem,
  faHome,
  faCity,
  faPaw,
  faHouseUser,
  faTree,
  faTractor,
  faBuilding,
  faSnowflake,
  faWater,
  faLeaf,
  faLandmark,
  faBriefcase,
  faHiking,
  faUsers,
  faHeart,
  faMountain,
  faCampground,
  faWallet
} from '@fortawesome/free-solid-svg-icons';
  const categoryLogos = [
    ["Beachfront", faUmbrellaBeach],
    ["Luxury Villas", faGem],
    ["Rustic Cabins", faHome],
    ["Urban Lofts", faCity],
    ["Pet-Friendly", faPaw],
    ["Tiny Homes", faHouseUser],
    ["Treehouses", faTree],
    ["Farm Stays", faTractor],
    ["City Apartments", faBuilding],
    ["Ski Chalets", faSnowflake],
    ["Lakefront", faWater],
    ["Eco-Friendly", faLeaf],
    ["Historic Homes", faLandmark],
    ["Business Stays", faBriefcase],
    ["Adventure Hubs", faHiking],
    ["Family-Friendly", faUsers],
    ["Romantic Getaways", faHeart],
    ["Mountain Retreats", faMountain],
    ["Glamping", faCampground],
    ["Budget Stays", faWallet]
  ];

  



function Scroll_NavBar() 
{

const {setlistings}=Store();

async function loadCategory(category){ 
  console.log(category);
  const response = await axios.get('http://localhost:3000/listing/category/' + category);
  if(response.status === 200){
  console.log(response.data);

  setlistings(response.data);
  }
}


return (
    
<div id="nav_scroll_container">
  {categoryLogos.map((icon, index) => (
               
               <FontAwesomeIcon onClick={()=>loadCategory(icon[0])} key={index} icon={icon[1]} style={{ color: '#fc6c74' }} size="3x" />
              ))}            </div>);


}




export default Scroll_NavBar;