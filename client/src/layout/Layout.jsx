import React from 'react';
import style from './layout.module.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Header from './components/header/Header';
import RealAdminNav from './RealAdminNav';

const Layout = props => {
  const { children } = props;

  return (
    <div className={style.layout}>
      <header className={style.header}><RealAdminNav /></header>
      <aside className={style.aside}>
        <Sidebar />
      </aside>
      <main className={style.main}>{children}</main>
      
    </div>
  );
};

export default Layout;
