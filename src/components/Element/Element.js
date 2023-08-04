import styles from './Element.module.scss';

const Element = props => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <h2>{props.years}</h2>
      <p>{props.institution}</p>
      <p>{props.position}</p>
      </div>
      <div className={styles.right}>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default Element;
