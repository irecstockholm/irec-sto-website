import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
import LogoIREC from '../../icons/Logo';
import styles from './Header.module.scss';

const Header = () => {

  const [isNavShown, setIsNavShown] = useState(false);

  return <header className={styles.header}>
    <div className={styles.headerLogo}>
      <Link to='/' className={styles.headerLink}>
        <LogoIREC />
        <h1 className={styles.headerTitle}>IREC Stockholm</h1>
      </Link>
    </div>
    <div className={styles.menuButtonWrapper} onClick={() => setIsNavShown(true)}>
      <button className={styles.menuButton}></button>
    </div>
    <nav className={cn(styles.nav, isNavShown ? styles.isShown : '')}>
      <div className={styles.closeNav} onClick={() => setIsNavShown(false)}>Close</div>
      <NavLink to='/' className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
      <NavLink to='/events' className={({isActive}) => isActive ? styles.active : ''}>News &amp; Events</NavLink>
      <NavLink to='/our-church' className={({isActive}) => isActive ? styles.active : ''}>Our Church</NavLink>
      <NavLink to='/movement' className={({isActive}) => isActive ? styles.active : ''}>The Movement</NavLink>
    </nav>
  </header>;
}

export default Header;