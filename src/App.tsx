import React from 'react';
import BeerList from './components/BeerList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Get All Beers</h1>
      <BeerList />
    </div>
  );
}

export default App;
