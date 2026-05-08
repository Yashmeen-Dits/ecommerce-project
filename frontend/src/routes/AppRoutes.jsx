import { BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";
import DealsPage from "../pages/DealsPage";
import ProductPage from "../pages/ProductPage";
import Register from "../pages/Register";
import "../styles/landing.css";
const AppRoutes=()=>
{

  return(
    <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
    </Routes>
  );

};
export default AppRoutes;
