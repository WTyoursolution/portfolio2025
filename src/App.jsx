// App.jsx
import "./App.css";
import HeroImage from "./components/HeroImage";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroImage />
      {/* MAIN (Center website) */}
      <div className="main">
        <h2>PORTFOLIO</h2>
        <img src="/myLogo.png" alt="myLogo" />
        <hr />

        <AboutMe />

        <p>Resize the browser window to see the responsive effect.</p>

        {/* Portfolio Gallery Grid */}

        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>

          <div className="col-md-4">
            <Card />
          </div>

          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
