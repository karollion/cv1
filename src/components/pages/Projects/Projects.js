import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';
import { getAllProjects, getInterfaceElements } from '../../../redux/store';
import Project from '../../features/Project/Project';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import PageLabel from '../../common/PageLabel/PageLabel';

const Projects = () => {
  const interfElem = useSelector(getInterfaceElements);
  const projects = useSelector(getAllProjects);
  
  return (
    <ContainerSection>
      <PageLabel>{interfElem[0].proj}</PageLabel>
        <div 
          className={styles.projects}>
          {projects.map(project => <Project key={project.id} {...project}  />)}
      </div>
    </ContainerSection>
  );
};

export default Projects;