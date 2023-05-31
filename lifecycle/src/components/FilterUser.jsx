import { useEffect, useState, useRef } from 'react';
import ListElement from './ListElement';

const FilterUser = () => {
  // asla değiştidmediğimiz ve filtreleme işlemlerinde baz aldığımız
  const [cloneUsers, setCloneUsers] = useState(null);
  // ekrana basılan ve filtrenmiş versiyonu aktardığımız
  const [users, setUsers] = useState(null);

  // inputun refarnsını alma
  const inputRef = useRef();

  //   fonksiyon bileşen ekrana geldiği anda çalışır
  useEffect(() => {
    // api'ye istek atma
    fetch('https://jsonplaceholder.typicode.com/users')
      // eğer cevap olumluysa gelen cevabı işle
      .then((res) => res.json())
      // işlenmiş veriyi state'e aktar
      .then((data) => {
        setUsers(data);
        setCloneUsers(data);
      })
      // eğer cevap olumsuzsa kullanıcıya bildir
      .catch((err) => alert('Daha sonra tekrar deneyin'));
  }, []);

  // ara butonuna tıklandığı an çalışır
  const handleSearch = () => {
    // inputun değerini alma
    const query = inputRef.current.value.toLowerCase();

    // aratılan terime sahip olan kullanıcları yeni bir diziye filtrele
    const filtredUser = cloneUsers.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    //ekrana basılan diziyi günceller
    setUsers(filtredUser);
  };

  return (
    <div>
      <h1>Kullanıcılar</h1>
      <input type="text" ref={inputRef} onChange={handleSearch} />
      <button onClick={handleSearch}>Ara</button>
      <ul>
        {/* eğer kullanıcılar boşsa > loading yaz */}
        {users === null && <p>Loading...</p>}

        {/* eğer kullanıcılar varsa > listele */}
        {users && users.map((user) => <ListElement user={user} />)}
      </ul>
    </div>
  );
};

export default FilterUser;
