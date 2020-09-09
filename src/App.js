import React from 'react';
import SimpleForm from './components/chat/chat';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
        <Navbar />
      <SimpleForm />
    </div>
  );
}

export default App;
