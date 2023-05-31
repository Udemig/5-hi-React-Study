import { useEffect, useState } from 'react';

const Paper = () => {
  const [todo, setTodo] = useState({});
  const [page, setPage] = useState(1);

  // bileşenin ekrana gelme anını izler
  //   useEffect(() => {
  //     console.log('DİD MOUNT ÇALIŞTI');
  //   }, []);

  // bileşen her render olduğunda çalışır
  //   useEffect(() => {
  //     console.log('Bileşen Güncellendi');
  //   });

  //   belirli bir state değiştiğinde çalışır
  //   useEffect(() => {
  //     // api isteği atma
  //     fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
  //       // eğer istek başarılı olursa gelen cevabı işle
  //       .then((res) => res.json())
  //       // işlenmiş cevabı al ve state aktar
  //       .then((data) => setTodo(data));
  //   }, [page]);

  //   bileşenin ekrandan gitme olayı
  useEffect(() => {
    console.log('Ekrana Geldi');
    // returndan sonra tanımlanan fonksiyon
    // ekrandan gittiği anda çalışır
    return () => {
      console.log('Ekrandan Gitti');
    };
  }, []);

  return (
    <div>
      <h1>Fonkisyonel Bilşen </h1>
      <h1>{todo.title}</h1>
      <p>Id Değeri: {todo.id}</p>
      <p>Sayfa: {page}</p>
      <button onClick={() => setPage(page + 1)}>Sayfa Değiş</button>
    </div>
  );
};

export default Paper;

/*
useEffect:
Amacı: componentDidMount | componentDidUpdate | componentWillUnmount methodları yerine kullanılır
Yazım Şekli:
1- useEffect(()=>{},[])
2- useEffect(()=>{})
3- useEffect(()=>{},[page])
4- useEffect(()=>{ return () => {}  },[])

Kullanımlar:
!1-  bilşen  ilk ekrana geldiğinde çalışır
  a- bileşen ekrana geldiği anda çalışacak FONKSİYON
  b- boş bağımlılık Dizisi
? useEffect(()=>{},[])

!2- bileşen her güncellendiğinde (state veya prop değişimi)
  a- Fonksiyon
? useEffect(()=>{})

!3- bileşenin içerisindeki belirli bir state değiştiğinde çalışır
  a- fonksiyon
  b- bağımlılık dizisine en az bir tane state
? useEffect(()=>{},[page])

!4- bileşen ekrandan gittiğinde çalışır
  a- fonksiyon
  b- boş veya dolu bağımlılık dizisi
  c- fonksiyonun içerisinde bir return satırı ve yeni fonksiyon

 useEffect(()=>{ 
    console.log("Bişen Geldi")
    return () => {
        console.log("Bileşen Gitti")
    }  
},[])


*/

/*
  useEffect(() => {
    async function fetcData() {
      const reponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${page}`);
      const data = await reponse.json();
      setTodo(data);
    }
  }, [page]);
*/
