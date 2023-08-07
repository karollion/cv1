import styles from './Contact.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';
import Icon from '../Icon/Icon';

const Contact = () => {
  const page = useSelector(getPageNumber);
  const interfElem = useSelector(getInterfaceElements);

  return (
    <div className={clsx(styles.contact, page === 3 && styles.active)}>
      <h2 className={styles.title}>{interfElem[0].contact}</h2>
      <div className={styles.container}>
        <h2>{interfElem[0].phone}: 690-302-400</h2>
        <h2>{interfElem[0].email}: <a href = "mailto: karol.bernatowicz@gmail.com">karol.bernatowicz@gmail.com</a></h2>
        <Icon />
      </div>
    </div>
  );
};

export default Contact;