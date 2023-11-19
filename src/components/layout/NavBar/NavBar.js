import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.navbar}>
      <input className ={styles.input} id="toggle" type="checkbox"/>
      <label className={styles.menuButton} htmlFor="toggle">
        <i className="fa fa-bars"></i>
      </label>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/'><li>{t('navBar.about')}</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/resume'><li>{t('navBar.resume')}</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/projects'><li>{t('navBar.proj')}</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/contact'><li>{t('navBar.contact')}</li></NavLink>
          <li onClick={() => {
                  handleChangeLanguage('en');
                }} >
            <span>{t('navBar.language.english')}</span></li>
          <li onClick={() => {
                  handleChangeLanguage('pl');
                }} >
            <span>{t('navBar.language.polish')}</span></li>
          <li><label  htmlFor="toggle"><span>{t('navBar.close')}</span></label></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;