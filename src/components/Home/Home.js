import styles from './Home.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';
import { getAbout } from '../../redux/store';
import Icon from '../Icon/Icon';

const Home = () => {
  const page = useSelector(getPageNumber);
  const interfElem = useSelector(getInterfaceElements);
  const about = useSelector(getAbout);

  return (
    <div className={clsx(styles.home, page === 0 && styles.active)}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainerUp}>
            <img 
              className={styles.image}
              alt={'profile'}
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`} />
            <h2>Karol</h2>
            <h2 className={styles.line}>Bernatowicz</h2>
            <p>{interfElem[0].job}</p>
          </div>
          <div className={styles.imageContainerDown}>
            <Icon />
          </div>
        </div>
        <div className={styles.info}>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;