//import { useState } from 'react'
import NavBar from './component/navbar.jsx'
import Card_temp from './component/card.jsx'
import Scroll_NavBar from './component/scroll_nav.jsx'
import './App.css'
import Footer  from './component/footer.jsx';

const properties = [
  {
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    location: "Banff, Canada",
    text: "A cozy wooden cabin surrounded by majestic mountains, perfect for a peaceful getaway in nature."
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    location: "Santorini, Greece",
    text: "A luxurious whitewashed villa with breathtaking views of the Aegean Sea, offering a serene Mediterranean experience."
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    location: "New York City, USA",
    text: "A chic loft in the heart of Manhattan, with modern décor and easy access to popular tourist attractions."
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Lake District, UK",
    text: "A charming cottage right on the edge of a tranquil lake, ideal for outdoor activities like hiking and kayaking."
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/76f85a0c-b3e2-4f1d-9aa9-d7838f2393c6.jpeg?im_w=1440&im_q=highq",
    location: "Marrakech, Morocco",
    text: "A traditional riad in the desert, featuring stunning Moroccan architecture and lush gardens, perfect for a relaxing retreat."
  },
  {
    image: "https://media.istockphoto.com/id/1380534040/photo/beautiful-view-of-amalfi-on-the-mediterranean-coast-with-lemons-in-the-foreground-italy.jpg?s=612x612&w=0&k=20&c=4UQak9WJkyvN8aEgkLEwjnV5EW2RiGfC_GZNeQaVJeo=",
    location: "Tuscany, Italy",
    text: "A restored barn in the rolling hills of Tuscany, surrounded by vineyards and olive groves, offering a taste of rural Italian life."
  },
  {
    image: "https://media.istockphoto.com/id/1380534040/photo/beautiful-view-of-amalfi-on-the-mediterranean-coast-with-lemons-in-the-foreground-italy.jpg?s=612x612&w=0&k=20&c=4UQak9WJkyvN8aEgkLEwjnV5EW2RiGfC_GZNeQaVJeo=",
    location: "Costa Rica",
    text: "A secluded treetop cabin nestled in the rainforest, offering incredible views and close proximity to wildlife and waterfalls."
  },
  {
    image: "https://media.istockphoto.com/id/1380534040/photo/beautiful-view-of-amalfi-on-the-mediterranean-coast-with-lemons-in-the-foreground-italy.jpg?s=612x612&w=0&k=20&c=4UQak9WJkyvN8aEgkLEwjnV5EW2RiGfC_GZNeQaVJeo=",
    location: "Sydney, Australia",
    text: "A modern penthouse with floor-to-ceiling windows overlooking Sydney Harbour and the iconic Opera House."
  },
  {
    image: "https://thumbs.dreamstime.com/b/classic-edinburgh-view-aerial-over-historic-center-scotland-calton-hill-41689271.jpg",
    location: "Edinburgh, Scotland",
    text: "A centuries-old castle offering a glimpse into Scottish history, set against the backdrop of beautiful countryside."
  },
  {
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600",
    location: "Barcelona, Spain",
    text: "A modern villa with a private garden and pool, located in the vibrant city of Barcelona, blending city life with tranquility."
  },
  {
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    location: "Zermatt, Switzerland",
    text: "A stunning chalet at the foot of the Swiss Alps, offering panoramic views and quick access to world-class ski slopes."
  },
  {
    image: "https://rivierabarcrawltours.com/wp-content/uploads/2020/04/provence-pic.jpg",
    location: "Provence, France",
    text: "A peaceful villa surrounded by lavender fields, perfect for enjoying the slow pace of life in the French countryside."
  },
  {
    image: "https://cdn.pixabay.com/photo/2021/11/17/15/07/paris-6803796_640.jpg",
    location: "Paris, France",
    text: "An elegant mansion with period furnishings, located just minutes away from the iconic Eiffel Tower and other landmarks."
  },
  {
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/365299e3-f926-47ee-bcbf-606d6a0370b9.jpeg?im_w=1440&im_q=highq",
    location: "Tokyo, Japan",
    text: "A sleek and compact studio apartment with cutting-edge amenities, situated in the bustling heart of Tokyo."
  },
  {
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    location: "Bali, Indonesia",
    text: "A tropical escape in a cozy beachfront bungalow, offering direct access to crystal-clear waters and white sandy beaches."
  }
];

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

function App() {

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
            return <Card_temp  key={index} text= {item.text} img={item.image} title={item.location} />
       }) }
       </div>
      <div>
        <Footer></Footer>
      </div>
      
    
    </>

  )
}

export default App;
