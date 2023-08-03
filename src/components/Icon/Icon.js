import styles from './Icon.module.scss';

const Icon = () => {
  return (
    <div className={styles.icons}>
      <i className="fa fa-facebook"><a href='https://www.facebook.com'>facebook</a></i>
      <i className="fa fa-instagram"><a href='https://www.instagram.com'>instagram</a></i>
      <i className="fa fa-linkedin"><a href='https://www.linkedln.com'>linkedln</a></i>
    </div>
  );
};

export default Icon;