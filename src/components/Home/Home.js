import styles from './Home.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../../redux/store';
import Icon from '../Icon/Icon';

const Home = () => {
  const page = useSelector(getPageNumber);

  return (
    <div className={clsx(styles.home, page === 0 && styles.active)}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainerUp}>
            <img 
              className={styles.image}
              alt={'profile'}
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`} />
            <h2>Karol</h2>
            <h2 className={styles.line}>Bernatowicz</h2>
            <p>Upholsterer</p>
          </div>
          <div className={styles.imageContainerDown}>
            <Icon />
          </div>
        </div>
        <div className={styles.info}>
          <p>Zapytasz mnie jak to jest być niewolnikiem.

Moim zdaniem to nie ma tak, że dobrze, albo że niedobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam, i co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem, i dziękuję życiu! Dziękuję mu; życie to śpiew, życie to taniec, życie to miłość! Wielu ludzi pyta mnie o to samo: ale jak ty to robisz, skąd czerpiesz tę radość? A ja odpowiadam, że to proste! To umiłowanie życia. To właśnie ono sprawia, że dzisiaj na przykład buduję maszyny, a jutro – kto wie? Dlaczego by nie – oddam się pracy społecznej i będę, ot, choćby, sadzić... m-marchew.e</p>
        </div>
      </div>
    </div>
  );
};

export default Home;