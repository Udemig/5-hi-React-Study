import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{ height: '86vh' }}
      className="d-flex justify-content-around align-items-center"
    >
      <aside className="bg-dark rounded p-4">
        <Link
          className="btn btn-danger"
          to={'/arabalar/elektrik'}
        >
          Elektrik
        </Link>
        <br />
        <br />
        <br />
        <br />
        <Link
          className="btn btn-primary"
          to={'/arabalar/içten-yanma'}
        >
          İçten Yanma
        </Link>
      </aside>
      <div>
        {/*
        > bir routeın içerindeki diğer  route elemanlarının 
        > sayfada nereye yeleşeceğini belirler 
        */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
