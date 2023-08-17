import styles from './NavBar.module.scss';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';

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
      <a href='/'className={styles.name}>Karol Bernatowicz</a>
      <input className ={styles.input} id="toggle" type="checkbox"/>
      <label className={styles.menuButton} htmlFor="toggle">
        <i className="fa fa-bars"></i>
      </label>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <li><a href='/'>{interfElem[0].about}</a></li>
          <li><a href='/resume'>{interfElem[0].resume}</a></li>
          <li><a href='/projects'>{interfElem[0].proj}</a></li>
          <li><a href='/contact'>{interfElem[0].contact}</a></li>
          <li onClick={languageClick} >{language}</li>
        </ul>
      </div>
    </div>
  );
};

  export default NavBar;