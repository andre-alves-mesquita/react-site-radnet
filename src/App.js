import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Games from "./components/Games/Games";
import Series from "./components/Series/Series";
import Planos from "./components/Planos/Planos";
import Banner from "./components/Banner/Banner";
import background from "./components/img/fundo-cibernetico.png";
import background2 from "./components/img/5169176.jpg";
import background3 from "./components/img/sl_122019_26260_35.jpg";
import background4 from "./components/img/abstract-flowing-neon-wave-background.jpg";

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <div
        className=""
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Banner></Banner>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${background2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Planos></Planos>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${background3})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Series></Series>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${background4})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Games></Games>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
