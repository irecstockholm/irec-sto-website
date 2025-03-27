import cn from 'classnames';
import LogoIREC from '../../icons/Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  return <div className={styles.footer}>
    <div className={cn(styles.footerCol, styles.footerLogo)}>
        <LogoIREC />
        <div className={styles.footerLogoText}>
          <h2>IREC Stockholm</h2>
          <h3>International Reformed <br/>Evangelical Church <br/>Organization number: 252005-0903</h3>
        </div>
    </div>

    <div className={styles.footerCol}>
      <h3>Contact</h3>
      <p>+46 73 675 11 07</p>
      <p>irec.stockholm@gmail.com</p>
    </div>

    <div className={styles.footerCol}>
      <h3>Address</h3>
      <p>IREC Stockholm</p>
      <p><a href='https://maps.app.goo.gl/92L6XevnhJQAqp7YA' rel='noreferrer' target='_blank'>Kristet Center, Hagalundsgatan 9</a></p>
      <p>Solna, Stockholm</p>
    </div>

    <div className={styles.footerCol}>
      <ul>
        <li><a href='https://www.instagram.com/irec.europe/' target='_blank' rel='noreferrer'>Instagram</a></li>
        <li><a href='https://www.facebook.com/people/PRII-Stockholm-IREC-Stockholm/100089208450489/?locale2=en' target='_blank' rel='noreferrer'>Facebook</a></li>
        <li><a href='https://www.youtube.com/channel/UCJGpw2y2fAQ97CMXRpdPGMw' target='_blank' rel='noreferrer'>Youtube</a></li>
      </ul>
    </div>

    <div className={styles.footerCol}>
      <ul>
        <li><a href='https://irec-berlin.org/' target='_blank' rel='noreferrer'>IREC Berlin</a></li>
        <li><a href='http://www.grii-bern.org/en/' target='_blank' rel='noreferrer'>IREC Bern</a></li>
        <li><a href='https://www.grii-hamburg.org/en-gb' target='_blank' rel='noreferrer'>IREC Hamburg</a></li>
        <li><a href='http://translate.google.com/translate?js=n&sl=id&tl=en&u=http://grii-munich.org' target='_blank' rel='noreferrer'>IREC Munich</a></li>
      </ul>
    </div>

    <div className={styles.footerCol}>
      <ul>
        <li><a href='https://stemi.org/' target='_blank' rel='noreferrer'>Stephen Tong Evangelical Ministry International</a></li>
        <li><a href='https://www.recjakarta.com/' target='_blank' rel='noreferrer'>Reformed Evangelical Church Jakarta</a></li>
        <li><a href='https://www.reformed21.tv/' target='_blank' rel='noreferrer'>Reformed 21</a></li>
        <li><a href='https://plkmomentum.com/' target='_blank' rel='noreferrer'>Momentum Christian Literature</a></li>
        <li><a href='https://front.aulasimfoniajakarta.com/' target='_blank' rel='noreferrer'>Aula Simfonia Jakarta</a></li>
      </ul>
    </div>

  </div>;
}

export default Footer;