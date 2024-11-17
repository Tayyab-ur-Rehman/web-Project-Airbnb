import Home from './home.jsx';
import SignInSignUp from './component/signInUp.jsx';
import DetailPage from './DetailPage.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App()
{

return(
<>
<Router>
<div>
    <Routes>
    <Route exact path="/" element ={<Home/>}></Route>
    <Route exact path="/Home" element ={<Home/>}></Route>
    <Route exact path="/Detail/:id" element={<DetailPage />} />

    </Routes>
</div>
</Router>

</>
);
}


export default App;