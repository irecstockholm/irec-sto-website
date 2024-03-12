import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
  return <div className={styles.App}>
  <Header />
  <main className={styles.main}>
    <Outlet />
  </main>
  <Footer />
</div>;
}

export default Layout;