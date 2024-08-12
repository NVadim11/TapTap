import React, { useEffect } from 'react'; // Импорт useEffect
import './App.scss';
import Header from './components/Header/Header.jsx';
import Cover from './components/Cover/Cover.jsx';
import Projects from './components/Projects/Projects.jsx';
import About from './components/About/About.jsx';
import Goals from './components/Goals/Goals.jsx'
import MyForm from './components/MyForm/MyForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div className="wrapper">
        <Header/>
        <div className='main'>
          <Cover/>
          <Projects/>
          <About/>
          <Goals/>
          <MyForm/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
