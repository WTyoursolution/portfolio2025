// App.jsx
import "./App.css";
import HeroImage from "./components/HeroImage";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <>
      <HeroImage />
      {/* MAIN (Center website) */}
      <div className="main">
        <h2>PORTFOLIO</h2>
        <hr />

        <AboutMe />

        {/* Portfolio Gallery Grid */}

        <div className="row">
          <div className="col-md-4">
            <Card />
          </div>

          <div className="col-md-4">
            <Card2 />
          </div>

          <div className="col-md-4">
            <Card3 
            title="Bulletin Board | Tailwind & React Website"
            description="A Capstone 2025 project showcasing a React and Tailwind website. Feel free to explore the design, features, and add a comment!"
            imageUrl="/bulletinBoard.png"
            />
          </div>
        </div>
      </div>

<ThankYou
Goodbye="I appreciate you visiting my page. I hope you found what you were looking for.
"
/>

      <Footer />
    </>
  );
}

export default App;
