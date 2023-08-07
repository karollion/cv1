import styles from './Resume.module.scss';
import clsx from 'clsx';
import Element from '../Element/Element';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import { getAllExperience } from '../../redux/store';
import { getAllEducation } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';
import Lists from '../Lists/Lists';

const Resume = () => {
  const page = useSelector(getPageNumber);
  const experience = useSelector(getAllExperience);
  const education = useSelector(getAllEducation);
  const interfElem = useSelector(getInterfaceElements);

  return (
    <div className={clsx(styles.resume, page === 1 && styles.active)}>
      <h2 className={styles.title}>{interfElem[0].experience}</h2>
      <section className={styles.section}>
        {experience.map(experience => <Element key={experience.id} {...experience}  />)}
      </section>
      <h2 className={styles.title}>{interfElem[0].education}</h2>
      <section className={styles.section}>
        {education.map(education => <Element key={education.id} {...education}  />)}
      </section>
      <h2 className={styles.title}>{interfElem[0].skills}</h2>
      <Lists />
    </div>
  );
};

export default Resume;