import styles from './NavLink.module.scss';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/store';

const NavLink = props => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(changePage(props.id));
  }
  return (
      <li className={styles.link} onClick={handleClick} >{props.children}</li>
  );
};

export default NavLink;