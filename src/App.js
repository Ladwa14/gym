import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero';
import Program from './Components/Program';
import Reasons from './Components/Reasons';
import Plans from './Components/Plans';
import Testimonial from './Components/Testimonial';
import Join from './Components/Join';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Program></Program>
      <Reasons></Reasons>
      <Plans></Plans>
      <Testimonial></Testimonial>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
