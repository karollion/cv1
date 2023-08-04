import styles from './Resume.module.scss';
import clsx from 'clsx';
import Element from '../Element/Element';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import { getAllExperience } from '../../redux/store';
import { getAllEducation } from '../../redux/store';

const Resume = () => {
  const page = useSelector(getPageNumber);
  const experience = useSelector(getAllExperience);
  const education = useSelector(getAllEducation);

  return (
    <div className={clsx(styles.resume, page === 1 && styles.active)}>
      <h2 className={styles.title}>Experience</h2>
      <section className={styles.section}>
        {experience.map(experience => <Element key={experience.id} {...experience}  />)}
      </section>
      <h2 className={styles.title}>Education</h2>
      <section className={styles.section}>
        {education.map(education => <Element key={education.id} {...education}  />)}
      </section>
      <h2 className={styles.title}>Skills and qualifications</h2>
    </div>
  );
};

export default Resume;