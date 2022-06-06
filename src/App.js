import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Tabbar from './components/Tabbar';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Tabbar />
      <Calculator />
    </div>
  );
}

export default App;
