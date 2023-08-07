import styles from './Projects.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import { getAllProjects } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';
import Project from '../Project/Project';

const Projects = () => {
  const page = useSelector(getPageNumber);
  const projects = useSelector(getAllProjects);
  const interfElem = useSelector(getInterfaceElements);

  return (
    <div className={clsx(styles.projects, page === 2 && styles.active)}>
      <h2 className={styles.title}>{interfElem[0].websites}</h2>
      <section className={styles.section}>
        {projects.map(project => <Project key={project.id} {...project}  />)}
      </section>
    </div>
  );
};

export default Projects;