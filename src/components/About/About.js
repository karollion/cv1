import styles from './About.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';

const About = () => {
  const page = useSelector(getPageNumber);

  return (
    <div className={clsx(styles.about, page === 1 && styles.active)}>
      <h2>doswiadczenie i wykształcenie moze umiejetnosci i hobby</h2>
    </div>
  );
};

export default About;