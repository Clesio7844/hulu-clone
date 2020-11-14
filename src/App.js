import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Result from './Result';
import requests from './requests';

import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className='app'>
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
