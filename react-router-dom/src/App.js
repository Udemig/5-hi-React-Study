import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import UndefinedPage from './pages/UndefinedPage';
// import verileriCek, {
//   günüHesapla,
//   tlHesapla,
// } from './index.js';

function App() {
  return (
    <BrowserRouter>
      {/* alttaki sayfa değişsede header kısmı sabit kalır */}
      <Header />
      <Routes>
        {/* projedeki her sayfa için bir route tanımlanır */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        {/* dinamik route tanımlama (parametreye sahip) */}
        <Route
          path="/ürün-detay/:productId"
          element={<ProductDetail />}
        />
        <Route
          path="/undefined/:errorCode"
          element={<UndefinedPage />}
        />
        {/* kullanıcı yukarı tanımlanmayan pathlerden birine giderse */}
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
      {/* sayfa değişsede buradki footer sabit kalıcak */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
