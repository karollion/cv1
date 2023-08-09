import styles from './Info.module.scss';

const Info = props => {
    return (
      <div className={styles.info}>
        <h2>{props.title}</h2>
        <div className={styles.data}>{props.data}</div>
      </div>
    );
};

export default Info;