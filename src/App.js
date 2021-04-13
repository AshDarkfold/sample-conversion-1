import './App.css';
import Content from './Views/Content';
import HeroBox from './Views/HeroBox';
import Nav from './Views/Nav';
import MidContent from './Views/MidContent'
import Reviews from './Views/Reviews';
import Latest from './Views/Latest';
import Footer from './Views/Footer';
function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <HeroBox/>
        <Content/>
        <MidContent/>
        <Reviews/>
        <Latest/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
