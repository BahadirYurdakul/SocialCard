import React from 'react';
import logo from './static/img/logo.svg';
import './app.scss';
import SocialCard from './components/socialCard/SocialCard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SocialCard />
    </div>
  );
}

export default App;
