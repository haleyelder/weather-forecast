import './App.css';
import Header from './components/Header'
import Forecast from './components/Forecast'
import Footer from './components/Footer'

require('dotenv').config()

function App() {
  return (
    <div>
      <Header/>
      <Forecast/>
      <Footer/>
    </div>
  );
}

export default App;
