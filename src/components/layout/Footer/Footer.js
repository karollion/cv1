import styles from './Footer.module.scss';
//import Info from '../../features/Info/Info';
import Icon from '../../common/Icon/Icon';
//import { useSelector } from 'react-redux';
//import { getInterfaceElements } from '../../../redux/store';

const Footer = () => {
  //const interfElem = useSelector(getInterfaceElements);
  
  /* <Info title={interfElem[0].media} data={<Icon />}/>
        <Info title={interfElem[0].phone} data={'690-302-400'} />
        <Info title={interfElem[0].email} data={'karol.bernatowicz@gmail.com'} /> */

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