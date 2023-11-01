import styles from './Footer.module.scss';
import Icon from '../../common/Icon/Icon';

const Footer = () => {

  return (
    <div className={styles.root}>
      <img 
        className={styles.image}
        alt={'earth'}
        src={`${process.env.PUBLIC_URL}/images/earth.png`} />
      <div className={styles.footer}>
        <Icon />
        <p>690-302-400</p>
        <p>karol.bernatowicz@gmail.com</p>
      </div>
    </div>
  );
};
export default Footer;