import styles from './FrameSect.module.scss';

const FrameSect = props => {
    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <div className={styles.corner45deg}></div>
                <div className={styles.frameTop}></div>
            </div>
            <div className={styles.body}>
                {props.children}
            </div>
            <div className={styles.bottom}>
                <div className={styles.frameBottom}></div>
                <div className={styles.corner45deg}></div>
            </div>
        </div>
    );
};

export default FrameSect;