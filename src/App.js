
import './App.css';
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Skill from './Components/Skills/Skill';
import Works from './Components/Works/Works';
import Footer from './Footer/Footer';

function App() {
  return (
   <div className='app'>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
   </div>
  );
}

export default App;
