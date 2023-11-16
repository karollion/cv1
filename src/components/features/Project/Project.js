import styles from './Project.module.scss';
import Button from '../../common/Button/Button';
import Label from '../../common/Label/Label';
import AOS from 'aos';
import { useSelector } from 'react-redux';
import 'aos/dist/aos.css';
import FrameSectLeft from '../../common/FrameSectLeft/FrameSectLeft';
import { getInterfaceElements } from '../../../redux/store';

const Project = props => {
  AOS.init();
  const interfElem = useSelector(getInterfaceElements);


  return (
    <div 
      data-aos="fade-right" 
      data-aos-delay="500"
      data-aos-once="true"
      className={styles.container}>
      <FrameSectLeft>
        <div className={styles.insidecontainer}>
          <div className={styles.toImage}>
            <img 
              className={styles.image}
              alt={props.title}
              href={props.link}
              src={`${process.env.PUBLIC_URL}/images/projects/${props.img}.png`} />
          </div>
          <div className={styles.toDescription}>
            <h2>{props.title}</h2>
            <div className={styles.lebels}>
              {props.tech.map(tech => <Label key={tech.id} {...tech} />)}
            </div>
            <p>{props.about}</p>
            <a href={props.link}>
            <Button>{interfElem[0].button}</Button>
            </a>
          </div>
        </div>
      </FrameSectLeft>
    </div>
  );
};

export default Project;

