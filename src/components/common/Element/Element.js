import styles from './Element.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Element = props => {
  AOS.init();

  return (
    <div className={styles.container}>
      <div 
        data-aos="fade-right" 
        data-aos-delay="500"
        data-aos-once="true"
        className={styles.left}
        >
      <h2>{props.years}</h2>
      <p>{props.institution}</p>
      <p>{props.city}</p>
      <p>{props.position}</p>
      </div>
      <div 
        data-aos="fade-left" 
        data-aos-delay="500"
        data-aos-once="true"
        className={styles.right}
        >
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default Element;
