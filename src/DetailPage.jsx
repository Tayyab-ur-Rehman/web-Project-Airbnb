import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './component/footer.jsx';
import Detail_temp from './component/DetailComponent.jsx';
import axios from 'axios';

function DetailPage() {
    const [item, setItem] = useState({}); 
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/data/${id}`);
                setItem(response.data); // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); // Dependency array may includes `id` to re-fetch if it changes

    return (
        <>
            <Detail_temp
                text={item.text}
                img={item.image}
                title={item.location}
            />
            <Footer/>
        </>
    );
}

export default DetailPage;
