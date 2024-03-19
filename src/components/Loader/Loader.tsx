import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinnerWrapper}><div className={styles.loader}></div></div>
      <p>Loading content...</p>
    </div>
  )
}

export default Loader;