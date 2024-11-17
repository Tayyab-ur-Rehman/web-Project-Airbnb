import { useEffect, useState} from 'react'
import NavBar from './component/navbar.jsx'
import Card_temp from './component/card.jsx'
import Scroll_NavBar from './component/scroll_nav.jsx'
import './App.css'
import Footer  from './component/footer.jsx';
import axios from 'axios'; // Import Axios





const styles = `
/* Hide scrollbar in Chrome, Safari and Opera */
div::-webkit-scrollbar {
  display: none;
}
`;
// Inject the styles into the document
const StyleInjector = () => {
return <style>{styles}</style>;
};


function Home() {
  
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      var p = await axios.get('http://localhost:8080/api/data');
      setProperties(p.data);
      console.log(p.data);
    };
  
    fetchData();
  }, []);
  
  return (
    <>

      <div className="header">
       <NavBar logo= '/airbnb.svg'  page1="Topic"  page2="Learning"  page3="News" />
       <StyleInjector/>
       <div id ="Scroll_NavBar_container">
          <Scroll_NavBar>  </Scroll_NavBar>
        </div>

        
      </div>
      <div className="card_container">
        
       {properties.map((item, index)=>{   
            return <Card_temp  key={index} id={index} //may have properties own key 
            text= {item.text} img={item.image} title={item.location} />
       }) }
       </div>
      <div>
        <Footer></Footer>
      </div>
      
    
    </>

  )
}

export default Home;
