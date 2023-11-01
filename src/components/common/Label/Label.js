import styles from './Label.module.scss';

const Label = props => {
  return (
    <div className={styles.label} style={props.color}>
      {props.name}
    </div>
  );
};

export default Label;
