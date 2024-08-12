import './App.scss';
import Header from './components/Header/Header.jsx';
import MyForm from './components/MyForm/MyForm.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className='main'>
          <MyForm/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
