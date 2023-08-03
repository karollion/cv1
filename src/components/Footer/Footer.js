import styles from './Footer.module.scss';
import Info from '../Info/Info';
import Icon from '../Icon/Icon';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <Info title={'Phone'} data={'690-302-400'} />
      <Info title={'E-mail'} data={'karol.bernatowicz@gmail.com'} />
      <Info title={'Socialmedia'} data2={<Icon />}/>
    </div>
  );
};

  export default Footer;