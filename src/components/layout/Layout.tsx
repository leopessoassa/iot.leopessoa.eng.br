import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Preloader from '../ui/Preloader/Preloader';
import ScrollToTop from '../ui/ScrollToTop/ScrollToTop';

export default function Layout() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
