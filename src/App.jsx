import Home from './home.jsx';
import SignInSignUp from './component/signInUp.jsx';
import DetailPage from './DetailPage.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingPage from './BookingPage.jsx';
import {Store} from './dataStorage.js';
import {Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Profile from './profile.jsx';
import HostHome from './hostHome.jsx';
import HostList from './HostList.jsx';
import HostSignInSignUp from './hostSigninup.jsx';
import HostBooking from './HostBooking.jsx';  


function App()
{
    const {current,setCurrent , role, setRoleUser} = Store();
    useEffect(() => {
        handleLoginBack();
      }, []);
      
      const handleLoginBack = async () => {
        try {
            console.log("handleLoginBack");
          const token = localStorage.getItem("token");
          if (!token) return;
          const res = await axios.get("http://localhost:3000/auth/token", {
            headers: {
              Authorization: `Bearer ${token}`,
            },

          });
          if(res.status===200)
          {
        

            setCurrent(res.data.user);
            setRoleUser();
          }
        } catch (error) {
          console.error(error);
        }
        console.log(current);
console.log(role);
      };
      
return(
<>

<Router>
<div>
    <Routes>
    <Route exact path="/" element ={(!current || role!="user")?<SignInSignUp/>:<Navigate to ="Home"/>}></Route>
    <Route exact path="/Home" element ={(current && role=="user")?<Home/>:<Navigate to ="/"/>}></Route>
    <Route exact path="/Detail/:id" element={<DetailPage />} />
    <Route exact path="/Booking/:id" element={<BookingPage />} />
    <Route exact path="/profile" element={<Profile />} />
    <Route exact path="/hostHome" element={<HostHome />} />
    <Route exact path="/hostList" element={<HostList />} />
    <Route exact path="/host/login" element={<HostSignInSignUp />} />
    <Route exact path="/host/booking" element={<HostBooking />} />


    </Routes>
</div>
</Router>

</>
);
}


export default App;