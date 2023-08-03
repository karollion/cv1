import styles from './Info.module.scss';

const Info = props => {
    return (
      <div className={styles.info}>
        <h2>{props.title}</h2>
        <span><a href={props.href}>{props.data}</a>{props.data2}</span>
      </div>
    );
};

export default Info;