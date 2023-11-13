import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAbout, getInterfaceElements } from '../../../redux/store';
import Icon from '../../common/Icon/Icon';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PageLabel from '../../common/PageLabel/PageLabel';
import FrameSect from '../../common/FrameSect/FrameSect'

const Home = () => {
  const interfElem = useSelector(getInterfaceElements);
  const about = useSelector(getAbout);
  AOS.init();

  return (
    <ContainerSection>
      <PageLabel>{interfElem[0].about}</PageLabel>
      <div className={styles.home}>
        <div 
          data-aos="fade-right" 
          data-aos-delay="500"
          data-aos-once="true"
          className={styles.imageContainer}>
            <FrameSect>
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
          </FrameSect>
        </div>
        <div 
          data-aos="fade-left" 
          data-aos-delay="500"
          data-aos-once="true"
          className={styles.info}
          >
          <p>{about}</p>
        </div>
      </div>
    </ContainerSection>
  );
};

export default Home;