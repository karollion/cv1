import styles from './NavBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getInterfaceElements, changeLanguage, getLanguage } from '../../../redux/store';
import { NavLink } from 'react-router-dom';

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
      <input className ={styles.input} id="toggle" type="checkbox"/>
      <label className={styles.menuButton} htmlFor="toggle">
        <i className="fa fa-bars"></i>
      </label>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/'>{interfElem[0].about}</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/resume'>{interfElem[0].resume}</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/projects'>{interfElem[0].proj}</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/contact'>{interfElem[0].contact}</NavLink></li>
          <li onClick={languageClick} ><span>{language}</span></li>
          <li><label  htmlFor="toggle"><span>close</span></label></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;