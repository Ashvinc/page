import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState("");
  const callAPI = async () => {
    fetch("http://localhost:9000/testAPI").then(res => res.text()).then((text) => {setResponse(text)})
  }

  return (
    <div>
    <button onClick={callAPI}>Click Me!</button>
    <h1>{response}</h1>
    </div>
  );
}

export default App;
