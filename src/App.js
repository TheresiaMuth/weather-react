import Header from "./components/header/Header.js";
import WeatherToday from "./components/weatherToday/WeatherToday";
import Footer from "./components/footer/Footer";
import Forecast from "./components/forecast/Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Header />
          <WeatherToday />
          <hr />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
