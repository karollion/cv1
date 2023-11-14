import styles from './Element.module.scss';

const Element = props => {

  return (
    <div className={styles.container}>
      <h2>{props.years}</h2>
      <p>{props.institution}</p>
      <p>{props.city}</p>
      <p>{props.position}</p>
      <p>{props.details}</p>
    </div>
  );
};

export default Element;
