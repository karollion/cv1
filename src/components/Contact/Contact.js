import styles from './Contact.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import Icon from '../Icon/Icon';

const Contact = () => {
  const page = useSelector(getPageNumber);

  return (
    <div className={clsx(styles.contact, page === 3 && styles.active)}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.container}>
        <h2>Phone: 690-302-400</h2>
        <h2>E-mail: <a href = "mailto: karol.bernatowicz@gmail.com">karol.bernatowicz@gmail.com</a></h2>
        <Icon />
      </div>
    </div>
  );
};

export default Contact;