import styles from './Contact.module.scss';
import { useSelector } from 'react-redux';
import { getInterfaceElements } from '../../../redux/store';
import Icon from '../../common/Icon/Icon';

const Contact = () => {
  const interfElem = useSelector(getInterfaceElements);

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>{interfElem[0].contact}</h2>
        <h2>{interfElem[0].phone}: 690-302-400</h2>
        <h2>{interfElem[0].email}: <a href = "mailto: karol.bernatowicz@gmail.com">karol.bernatowicz@gmail.com</a></h2>
        <Icon />
      </div>
    </div>
  );
};

export default Contact;