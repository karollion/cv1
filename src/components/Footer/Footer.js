import styles from './Footer.module.scss';
import Info from '../Info/Info';
import Icon from '../Icon/Icon';
import { useSelector } from 'react-redux';
import { getInterfaceElements } from '../../redux/store';

const Footer = () => {
  const interfElem = useSelector(getInterfaceElements);

  return (
    <div className={styles.footer}>
      <Info title={interfElem[0].phone} data={'690-302-400'} />
      <Info title={interfElem[0].email} data={'karol.bernatowicz@gmail.com'} />
      <Info title={interfElem[0].media} data={<Icon />}/>
    </div>
  );
};

  export default Footer;