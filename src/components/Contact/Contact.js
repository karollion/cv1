import styles from './Contact.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import Button from '../Button/Button';

const Contact = () => {
  const page = useSelector(getPageNumber);

  return (
    <div className={clsx(styles.contact, page === 3 && styles.active)}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.container}>
        <form>
          <Button>send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;