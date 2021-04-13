import './App.css';
import Content from './Views/Content';
import HeroBox from './Views/HeroBox';
import Nav from './Views/Nav';
import MidContent from './Views/MidContent'
function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroBox/>
      <Content/>
      <MidContent/>
    </div>
  );
}

export default App;
