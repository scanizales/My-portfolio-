import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../basics/Footer';
import ButtonMode from '../basics/ButtonMode';

import '../../css/layout.css';

const Layout = () => {
  return (
    <>
      <ButtonMode></ButtonMode>
      <div id='layout' className="px-[1rem] py-[2rem] min-w-0 items-start">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
