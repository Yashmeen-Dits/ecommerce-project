import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import SaleBanner from "../assets/sale-banner.png";
import Categories from "../components/Categories";




function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <Home />

      <Categories/>
      <Footer />
    </div>
  );
}

export default HomePage;