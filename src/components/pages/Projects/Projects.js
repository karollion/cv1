import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../../redux/store';
import Project from '../../features/Project/Project';
import ContainerSection from '../../common/ContainerSection/ContainerSection';

const Projects = () => {
  const projects = useSelector(getAllProjects);

  return (
    <ContainerSection>
      <div className={styles.projects}>
        <section className={styles.section}>
          {projects.map(project => <Project key={project.id} {...project}  />)}
        </section>
      </div>
    </ContainerSection>
  );
};

export default Projects;