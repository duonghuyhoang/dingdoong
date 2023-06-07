import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MeetOurClients from "./components/Meet-our-clients";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className='content-wrapper  '>
      <Header />
      <Main />
      <MeetOurClients />
      <Slider />
      <Countdown />
      <Footer />
    </div>
  );
}

export default App;
