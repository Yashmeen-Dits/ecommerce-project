import {Routes,Route} from "react-router-dom";
import CartPage from"./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./styles/landing.css";
import DealsPage from "./pages/DealsPage";

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>}/>
       <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/deals" element={<DealsPage/>}/>
    </Routes>



  ) ;
}

export default App;