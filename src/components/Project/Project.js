import styles from './Project.module.scss';
import Button from '../Button/Button';

const Project = props => {
  return (
    <div className={styles.container}>
      <div className={styles.toImage}>
        <img 
          className={styles.image}
          alt={props.title}
          href={props.link}
          src={`${process.env.PUBLIC_URL}/images/projects/${props.img}.png`} />
      </div>
      <div className={styles.toDescription}>
        <h2>{props.title}</h2>
        <p>{props.tech}</p>
        <p>{props.about}</p>
        <Button href={props.link}><i className="fa fa-share"> Go to project</i></Button>
        
      </div>
    </div>
  );
};

export default Project;

