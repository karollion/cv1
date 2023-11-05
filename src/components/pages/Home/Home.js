import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAbout, getInterfaceElements } from '../../../redux/store';
import Icon from '../../common/Icon/Icon';
import ContainerSection from '../../common/ContainerSection/ContainerSection';

const Home = () => {
  const interfElem = useSelector(getInterfaceElements);
  const about = useSelector(getAbout);

  return (
    <ContainerSection>
      <div className={styles.home}>
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
    </ContainerSection>
  );
};

export default Home;