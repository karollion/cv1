import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';
import { getInterfaceElements, getAllProjects } from '../../../redux/store';
import Project from '../../features/Project/Project';

const Projects = () => {
  const projects = useSelector(getAllProjects);
  const interfElem = useSelector(getInterfaceElements);

  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>{interfElem[0].websites}</h2>
      <section className={styles.section}>
        {projects.map(project => <Project key={project.id} {...project}  />)}
      </section>
    </div>
  );
};

export default Projects;