import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './component/footer.jsx';
import Navbar from './component/navbar.jsx';
import BookingForm from './component/BookingForm.jsx';
import axios from 'axios';
import {Store} from './dataStorage.js';

const BookingPage=() =>{
    const { id } = useParams();
    const [item, setItem] = useState({});
    const  {listings,current} = Store();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/listing/${id}`);    
                setItem(response.data); // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []); 
    console.log(item);
    return (
        <>
         <Navbar logo= '/airbnb.svg'  page1="Topic"  page2="Learning"  page3="News" />
         <BookingForm
         text={item.about}
         img={item.image}
         location={item.location}   //img, location, text, guests, bedrooms, bathrooms, costPerNight 
         guests={ item.guests}
         bedrooms={item.bedrooms}
         bathrooms={item.bathrooms}
         costPerNight={item.price}
         email={current.email}  
         id={id}
         userid={current._id}
         />
        <Footer/>
        </>
    );
}
export default BookingPage;