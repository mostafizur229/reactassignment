import React, { useState } from 'react';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(document.getElementById('textarea').value);
  };

  return (
    <div>
      <textarea id="textarea" rows="4" cols="50" />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
}

function Footer() {
  return <p>Created by Your Name</p>;
}

function App() {
  return (
    <div>
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
