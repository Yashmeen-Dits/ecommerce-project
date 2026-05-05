import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Categories from "../components/Categories";


function LandingPage() 
{
  return (
    <div className="home-page">
      <Navbar />
      <Home />
      <Categories />
      <Footer />
    </div>
  );
}

export default LandingPage;