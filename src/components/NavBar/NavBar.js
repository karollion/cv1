import styles from './NavBar.module.scss';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const language = useSelector(getLanguage);
  const interfElem = useSelector(getInterfaceElements);
  const dispatch = useDispatch();

  const languageClick = e => {
    e.preventDefault();
    dispatch(changeLanguage(language));
  }

  return (
    <div className={styles.navbar}>
      <Link to='/'className={styles.name}>Karol Bernatowicz</Link>
      <input className ={styles.input} id="toggle" type="checkbox"/>
      <label className={styles.menuButton} htmlFor="toggle">
        <i className="fa fa-bars"></i>
      </label>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/'>{interfElem[0].about}</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/resume'>{interfElem[0].resume}</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/projects'>{interfElem[0].proj}</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to='/contact'>{interfElem[0].contact}</NavLink></li>
          <li onClick={languageClick} >{language}</li>
        </ul>
      </div>
    </div>
  );
};

  export default NavBar;