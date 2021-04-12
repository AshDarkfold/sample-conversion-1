import './App.css';
import Content from './Views/Content';
import HeroBox from './Views/HeroBox';
import Nav from './Views/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBox />
      <Content />
    </div>
  );
}

export default App;
