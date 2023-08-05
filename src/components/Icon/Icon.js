import styles from './Icon.module.scss';

const Icon = () => {
  return (
    <div className={styles.icons}>
      <ul>
        <li>
          <a href='https://www.facebook.com/karol.bernatowicz'   target="_blank" rel='noreferrer' title="facebook">
            <i className="fa fa-facebook"></i><span>facebook</span></a>
        </li>
        <li>
          <a href='https://www.instagram.com/karol1411/'  target="_blank" rel='noreferrer' title="instagram">
            <i className="fa fa-instagram"></i><span>instagram</span></a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/karol-bernatowicz-01143a145/'  target="_blank" rel='noreferrer' title="linkedin">
            <i className="fa fa-linkedin"></i><span>linkedln</span></a>
        </li>
      </ul>
    </div>
  );
};

export default Icon;