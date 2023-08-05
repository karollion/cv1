import styles from './Hero.module.scss';
import NavLink from '../NavLink/NavLink';
import { useDispatch } from 'react-redux';
import { changePage } from '../../redux/store';

const Hero = () => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(changePage(0));
  }
  return (
    <div className={styles.hero}>
      <h2 className={styles.name} onClick={handleClick} >Karol Bernatowicz / <span>Junior Front-end Developer</span></h2>
      <ul className={styles.nav}>
        <NavLink id={0} >About</NavLink>
        <NavLink id={1} >Resume</NavLink>
        <NavLink id={2} >Projects</NavLink>
        <NavLink id={3} >Contact</NavLink>
      </ul>
    </div>
  );
};

  export default Hero;