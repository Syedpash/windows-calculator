import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Tabbar from './components/Tabbar';
import Calculator from './components/Calculator';
import History from './components/History';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="App">
      <Topbar />
      <Tabbar  setToggle={setToggle} toggle={toggle} />
      {toggle ? <Calculator /> : <History />}
      
      {/* <Calculator /> */}
    </div>
  );
}

export default App;
