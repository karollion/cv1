import styles from './Home.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';

const Home = () => {
  const page = useSelector(getPageNumber);

  return (
    <div className={clsx(styles.home, page === 0 && styles.active)}>
      <div className={styles.background}></div>
      <div className={styles.container}>
          <div className={styles.foto}><h2>moje łyse zdjecie</h2></div>
          <div className={styles.info}><p>cos tam głupiego o mnie</p></div>
      </div>
    </div>
  );
};

export default Home;