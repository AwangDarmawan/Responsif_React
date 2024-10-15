import React, { useEffect, useState } from 'react';


function App() {
 
  const [pacarSaya, setPacarSaya] = useState(1);
  

  return (
    <>
      <h1>Saya memiliki: {pacarSaya} pacar</h1>
      <button onClick={() => setPacarSaya((prev) => prev + 1)}>
        Tambah pacar
      </button>
      <br />
      <button onClick={() => setPacarSaya((prev) => (prev > 1 ? prev - 1 : prev))}>
        Putuskan pacar
      </button>
    </>
  );
}

export default App;
