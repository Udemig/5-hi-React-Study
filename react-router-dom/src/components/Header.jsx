import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex bg-dark text-light justify-content-between align-items-center p-3">
      <h1>Amazon</h1>
      <div className="d-flex gap-4">
        {/* a etiketleri yerine Link  */}
        {/* href yerine to kullanılır */}
        <NavLink
          // routerdom sayfaya geçiş yapılıyor mu ve kullanıcı şuan sayfada mı bilgelrini veren iki değeri aldı
          className={({ isActive, isPending }) =>
            isPending ? 'geçiş' : isActive && 'aktif'
          }
          to={'/'}
        >
          Anasayfa
        </NavLink>

        <NavLink className="text-light" to={'/ürünler'}>
          Ürünler
        </NavLink>

        <NavLink className="text-light" to={'/hakkımızda'}>
          Hakkımızda
        </NavLink>

        <NavLink
          className="text-light"
          to={'/arabalar/içten-yanma'}
        >
          İçten yanma
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
