import { useRef } from 'react';

const Search = () => {
  const inputRef = useRef();
  const input2Ref = useRef();

  // butona tıklandığında çalışır
  const handleClick = () => {
    // inputa odaklanır
    inputRef.current.focus();
    // 2.inputun rengini değiştirme
    input2Ref.current.style.background = 'red';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" ref={input2Ref} />
      <button onClick={handleClick}>Odaklan</button>
    </div>
  );
};

export default Search;

// useRef()  JSX Elemanlarını refarns alır
// js de olan querySelector ve getElementById ile benzer görev yapar
/*
? Kullanımı:
    1- import useRef
    2- referansını almak istediğimiz elmana  ref özelliği tanımlamak
    3- ref={} içerisine bir değer tanımlama
    4- useRef methodunu çalıştır ve 3. adımda tanımladığın değeri gir
*/
