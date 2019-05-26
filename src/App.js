import React from 'react';

import './assets/css/tailwind.css'
import './App.scss';

import Button from './components/atoms/Button/Button'

function App() {
  return (
    <div className="App">
      <Button isSecondary />
    </div>
  );
}

export default App;
