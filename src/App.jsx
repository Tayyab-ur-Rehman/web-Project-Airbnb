import Home from './home.jsx';
import SignInSignUp from './component/signInUp.jsx';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App()
{

return(
<>
<Router>
<div>
    <Routes>
    <Route exact path="/" element ={<SignInSignUp/>}></Route>
        <Route exact path="/Home" element ={<Home/>}></Route>
    </Routes>
</div>
</Router>

</>
);
}


export default App;