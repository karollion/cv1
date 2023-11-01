import styles from './Lists.module.scss';
import ListElement from '../../common/ListElement/ListElement';
import { useSelector } from 'react-redux';
import { getTechnologies, getSkills} from '../../../redux/store';

const Lists = props => {
  const skills = useSelector(getSkills);
  const technologies = useSelector(getTechnologies);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ul>
          {skills.map(skill => <ListElement key={skill.id} {...skill} />)}
        </ul>
      </div>
      <div className={styles.right}>
        <ul>
        {technologies.map(tech => <ListElement key={tech.id} {...tech} />)}
        </ul>
      </div>
    </div>
  );
};

export default Lists;
