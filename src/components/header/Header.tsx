import HeaderLogo from './Logo';
import styles from './Header.module.scss';

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.headerLogo}>
      <HeaderLogo />
      <h1 className={styles.headerTitle}>IREC Stockholm</h1>
    </div>
    <nav className={styles.nav}>
      <a href='/'>Home</a>
      <a href='/'>News &amp; Events</a>
      <a href='/'>Our Church</a>
    </nav>
  </header>;
}

export default Header;