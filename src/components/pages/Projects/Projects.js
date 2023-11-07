import styles from './Projects.module.scss';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../../redux/store';
import Project from '../../features/Project/Project';
import ContainerSection from '../../common/ContainerSection/ContainerSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  const projects = useSelector(getAllProjects);
  AOS.init();

  return (
    <ContainerSection>
        <div 
          data-aos="fade-right" 
          data-aos-delay="500"
          data-aos-once="true"
          className={styles.projects}>
          {projects.map(project => <Project key={project.id} {...project}  />)}
      </div>
    </ContainerSection>
  );
};

export default Projects;