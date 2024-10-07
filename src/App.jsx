//import { useState } from 'react'
import NavBar from './component/navbar.jsx'
import Card_temp from './component/card.jsx'
import './App.css'


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
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    location: "Marrakech, Morocco",
    text: "A traditional riad in the desert, featuring stunning Moroccan architecture and lush gardens, perfect for a relaxing retreat."
  },
  {
    image: "https://images.unsplash.com/photo-1517856699405-1211412c27a7",
    location: "Bali, Indonesia",
    text: "A tropical escape in a cozy beachfront bungalow, offering direct access to crystal-clear waters and white sandy beaches."
  },
  {
    image: "https://images.unsplash.com/photo-1562904400-93f84bbaf7e0",
    location: "Tokyo, Japan",
    text: "A sleek and compact studio apartment with cutting-edge amenities, situated in the bustling heart of Tokyo."
  },
  {
    image: "https://images.unsplash.com/photo-1582719478170-73147ef0ce64",
    location: "Tuscany, Italy",
    text: "A restored barn in the rolling hills of Tuscany, surrounded by vineyards and olive groves, offering a taste of rural Italian life."
  },
  {
    image: "https://images.unsplash.com/photo-1522098543979-ffc7f79e624d",
    location: "Paris, France",
    text: "An elegant mansion with period furnishings, located just minutes away from the iconic Eiffel Tower and other landmarks."
  },
  {
    image: "https://images.unsplash.com/photo-1504812441810-8f03f1379fa5",
    location: "Zermatt, Switzerland",
    text: "A stunning chalet at the foot of the Swiss Alps, offering panoramic views and quick access to world-class ski slopes."
  },
  {
    image: "https://images.unsplash.com/photo-1535556116002-6281ff570a48",
    location: "Provence, France",
    text: "A peaceful villa surrounded by lavender fields, perfect for enjoying the slow pace of life in the French countryside."
  },
  {
    image: "https://images.unsplash.com/photo-1519567241046-7a3b73e93fd8",
    location: "Costa Rica",
    text: "A secluded treetop cabin nestled in the rainforest, offering incredible views and close proximity to wildlife and waterfalls."
  },
  {
    image: "https://images.unsplash.com/photo-1578926283812-13c7cbf98a7b",
    location: "Sydney, Australia",
    text: "A modern penthouse with floor-to-ceiling windows overlooking Sydney Harbour and the iconic Opera House."
  },
  {
    image: "https://images.unsplash.com/photo-1556898578-330a7d9da3d7",
    location: "Edinburgh, Scotland",
    text: "A centuries-old castle offering a glimpse into Scottish history, set against the backdrop of beautiful countryside."
  },
  {
    image: "https://images.unsplash.com/photo-1506152983158-bf6b225c8c11",
    location: "Barcelona, Spain",
    text: "A modern villa with a private garden and pool, located in the vibrant city of Barcelona, blending city life with tranquility."
  }
];


function App() {

  return (
    <>
      <div>
       <NavBar logo= '/vite.svg'  page1="Topic"  page2="Learning"  page3="News" />

      </div>
       {properties.map((item, index)=>{   
            return <Card_temp  key={index} text= {item.text} img={item.image} title={item.location} />
       }) }
      
    
    </>

  )
}

export default App;
