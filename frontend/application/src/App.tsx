import React from 'react';
import logo from './logo.svg';
import './App.css';
import GiftClient from './ApiClients/GiftClient';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
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
        <button onClick={async () => { const giftClient = new GiftClient(); await giftClient.getGiftsByUser('1')}}>Test</button>
      </div>
    </div>
  );
}

export default App;
