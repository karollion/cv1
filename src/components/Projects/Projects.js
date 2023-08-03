import styles from './Projects.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import Project from '../Project/Project';
import { getAllProjects } from '../../redux/store';

const Projects = () => {
  const page = useSelector(getPageNumber);
  const projects = useSelector(getAllProjects);

  return (
    <div className={clsx(styles.projects, page === 2 && styles.active)}>
      <h2>moje projekty stronki</h2>
      <section>
        {projects.map(project => <Project key={project.id} {...project}  />)}
      </section>
    </div>
  );
};

export default Projects;