import './App.css';
import Header from './components/Header'
import CurrentForecast from './components/CurrentForecast'
import Footer from './components/Footer'

require('dotenv').config()
const axios = require('axios')

function App() {
  return (
    <div className="App">
      <Header/>
      <CurrentForecast/>
      <Footer/>
    </div>
  );
}

export default App;
