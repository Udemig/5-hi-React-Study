import { useState } from 'react';
import Sayac from './components/ClassComp';

function App() {
  const [showSayac, setShowSayac] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowSayac(!showSayac)}>
        {showSayac ? 'Gizle' : 'Göster'}
      </button>

      {showSayac && <Sayac />}
    </div>
  );
}

export default App;
