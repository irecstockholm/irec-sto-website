import HeaderLogo from './Logo';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.headerLogo}>
      <Link to='/' className={styles.headerLink}>
        <HeaderLogo />
        <h1 className={styles.headerTitle}>IREC Stockholm</h1>
      </Link>
    </div>
    <nav className={styles.nav}>
      <Link to='/'>Home</Link>
      <Link to='/events'>News &amp; Events</Link>
      <Link to='/'>Our Church</Link>
    </nav>
  </header>;
}

export default Header;