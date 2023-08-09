import styles from './Hero.module.scss';
import NavLink from '../NavLink/NavLink';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/store';
import { changeLanguage } from '../../redux/store';
import { getInterfaceElements } from '../../redux/store';

const Hero = () => {
  const language = useSelector(getLanguage);
  const interfElem = useSelector(getInterfaceElements);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(changePage(0));
  }

  const languageClick = e => {
    e.preventDefault();
    dispatch(changeLanguage(language));
  }

  return (
    <div className={styles.hero}>
      <h2 className={styles.name} onClick={handleClick} >Karol Bernatowicz / <span>{interfElem[0].job}</span></h2>
      <input className ={styles.input} id="toggle" type="checkbox"/>
      <label className={styles.menuButton} htmlFor="toggle">
        <i className="fa fa-bars"></i>
      </label>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <NavLink id={0} >{interfElem[0].about}</NavLink>
          <NavLink id={1} >{interfElem[0].resume}</NavLink>
          <NavLink id={2} >{interfElem[0].proj}</NavLink>
          <NavLink id={3} >{interfElem[0].contact}</NavLink>
          <li onClick={languageClick} >{language}</li>
        </ul>
      </div>
    </div>
  );
};

  export default Hero;