import { Link, useNavigate } from 'react-router-dom';
// context yapılarına abone olmamızı sağlayan method
import { useContext } from 'react';
// abone olmak istediğimiz context dosyası
import { SepetContext } from '../context/SepetContext';

const Header = () => {
  const navigate = useNavigate();
  // sepetContext'ine abone olma
  const { items } = useContext(SepetContext);

  // dizideki miktar değerlerini toplama
  const total = items.reduce(
    (total, i) => total + i.amount,
    0
  );

  return (
    <header className="navbar bg-dark text-light p-3">
      <Link to={'/'}>
        <h2 className="text-light">Context</h2>
      </Link>
      <div
        onClick={() => navigate('/sepet')}
        className="fs-3 d-flex gap-3 align-items-center"
      >
        <i class="bi bi-cart fs-1"></i>
        <span className="badge bg-danger">{total}</span>
      </div>
    </header>
  );
};

export default Header;
