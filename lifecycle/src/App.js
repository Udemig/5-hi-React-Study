import { useState } from 'react';
import Sayac from './components/ClassComp';
import Paper from './components/FunctionComponent';
import Search from './components/refTest';
import FilterUser from './components/FilterUser';

function App() {
  const [showSayac, setShowSayac] = useState(true);

  return (
    <div className="App">
      {/* <button onClick={() => setShowSayac(!showSayac)}>
        {showSayac ? 'Gizle' : 'Göster'}
      </button>

      {showSayac && <Paper />} 
      
      <Search />
      */}

      <FilterUser />
    </div>
  );
}

export default App;
