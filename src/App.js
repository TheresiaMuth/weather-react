import Header from "./components/header/Header.js";
import WeatherToday from "./components/weatherToday/WeatherToday";
import Footer from "./components/footer/Footer";
import Forecast from "./components/forecast/Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <WeatherToday />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
