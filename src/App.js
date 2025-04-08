import React from 'react';
import './App.css';
import WhatsAppSender from './WhatsAppSender'; // Make sure this import matches your file path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My WhatsApp Sender App</h1>
      </header>
      <main>
        <WhatsAppSender />
      </main>
      <footer>
        <p>© 2025 WhatsApp Sender</p>
      </footer>
    </div>
  );
}

export default App;