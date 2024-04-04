import React from 'react';
import Logo from './assets/splaga.png';
import './App.css';
import NavTabs from './components/navagationbar';

function App() {
  return (
    <div className="Nav-Bar">
        <div className="App-logo">
          <img src={Logo}/>
        </div>
        <div className='Tabs'>
          <NavTabs/>
        </div>
    </div>
  );
}

export default App;
