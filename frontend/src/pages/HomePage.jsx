import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default Home;