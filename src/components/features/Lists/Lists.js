import styles from './Lists.module.scss';
import ListElement from '../../common/ListElement/ListElement';
import { useSelector } from 'react-redux';
import { getTechnologies, getSkills} from '../../../redux/store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Lists = props => {
  const skills = useSelector(getSkills);
  const technologies = useSelector(getTechnologies);
  AOS.init();

  return (
    <div className={styles.container}>
      <div 
        data-aos="fade-right" 
        data-aos-delay="500"
        data-aos-once="true"
        className={styles.left}>
        <ul>
          {skills.map(skill => <ListElement key={skill.id} {...skill} />)}
        </ul>
      </div>
      <div 
        data-aos="fade-left" 
        data-aos-delay="500"
        data-aos-once="true"
        className={styles.right}>
        <ul>
        {technologies.map(tech => <ListElement key={tech.id} {...tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default Lists;
