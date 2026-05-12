import { BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import CartPage from "../pages/CartPage";
import DealsPage from "../pages/DealsPage";
import ProductPage from "../pages/ProductPage";
import Register from "../pages/Register";
import "../styles/landing.css";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";


const AppRoutes=()=>
{

  return(
    <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={
          <ProtectedRoute> 
            <HomePage/>
          </ProtectedRoute>
          }/>
          <Route path="/profile" element={<ProtectedRoute>
            <ProfilePage/>
          </ProtectedRoute>}>
          </Route>

    </Routes>
  );
  
};


export default AppRoutes;


