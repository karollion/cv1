import styles from './Project.module.scss';
import Button from '../../common/Button/Button';
import Label from '../../common/Label/Label';

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
        <div className={styles.lebels}>
          {props.tech.map(tech => <Label key={tech.id} {...tech} />)}
        </div>
        <p>{props.about}</p>
        <a href={props.link}>
        <Button><i className="fa fa-share"> Go to project</i></Button>
        </a>
      </div>
    </div>
  );
};

export default Project;

