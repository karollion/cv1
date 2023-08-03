import styles from './Project.module.scss';

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
        <a href={props.link}>{props.link}</a>
      </div>
    </div>
  );
};

export default Project;

