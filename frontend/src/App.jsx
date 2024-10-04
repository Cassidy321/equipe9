// App.jsx
import { useState } from 'react';
import TreeMap from './TreeMap.jsx';

function App() {
  return (
    <>
      <div className="App">
        <h1>Carte des Arbres à Paris</h1>
        <TreeMap />
      </div>
    </>
  );
}

export default App;