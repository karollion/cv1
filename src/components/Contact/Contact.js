import styles from './Contact.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';

const Contact = () => {
  const page = useSelector(getPageNumber);

  return (
    <div className={clsx(styles.contact, page === 3 && styles.active)}>
      <h2>formularz kontaktowy</h2>
    </div>
  );
};

export default Contact;