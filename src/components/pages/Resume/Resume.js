import styles from './Resume.module.scss';
import Element from '../../common/Element/Element';
import { useSelector } from 'react-redux';
import { getInterfaceElements, getAllEducation, getAllExperience } from '../../../redux/store';
import Lists from '../../features/Lists/Lists';
import ContainerSection from '../../common/ContainerSection/ContainerSection';

const Resume = () => {
  const experience = useSelector(getAllExperience);
  const education = useSelector(getAllEducation);
  const interfElem = useSelector(getInterfaceElements);

  return (
    <ContainerSection>
      <div className={styles.resume}>
        <section className={styles.section}>
        <h2 className={styles.title}>{interfElem[0].education}</h2>
          {education.map(education => <Element key={education.id} {...education}  />)}
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>{interfElem[0].experience}</h2>
          {experience.map(experience => <Element key={experience.id} {...experience}  />)}
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>{interfElem[0].skills}</h2>
          <Lists />
        </section>
      </div>
    </ContainerSection>
  );
};

export default Resume;