import {Routes,Route} from "react-router-dom";
import CartPage from"./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./styles/landing.css";
import DealsPage from "./pages/DealsPage";
import AppRoutes from "./routes/AppRoutes";

function App() 
{
  return <AppRoutes />;
}

export default App;

