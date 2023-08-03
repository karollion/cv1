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
      <h2 className={styles.name} onClick={handleClick} >Karol Bernatowicz</h2>
      <ul className={styles.nav}>
        <NavLink id={1} >About</NavLink>
        <NavLink id={2} >Projects</NavLink>
        <NavLink id={3} >Contact</NavLink>
      </ul>
    </div>
  );
};

  export default Hero;