import styles from './ContainerSection.module.scss';

const ContainerSection = props => {
    return (
        <div className={styles.containerSection}>
            <div className={styles.inside}>{props.children}</div>
            <div className={styles.topbar}></div>
            <div className={styles.bottombar}></div>
            <div className={styles.leftbar}></div>
            <div className={styles.rightbar}></div>
            <div className={styles.toprightcorner}></div>
            <div className={styles.bottomleftcorner}></div>
            <div className={styles.topleftcorner}></div>
            <div className={styles.bottomrightcorner}></div>
        </div>
    );
};

export default ContainerSection;