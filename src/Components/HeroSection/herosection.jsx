import styles from './hero.module.css';
import heroimage from'../assets/heroimage.svg';

const Herosection = () =>{
    return(
        <>
            <div className={styles.heroSection}>
                <img src={heroimage} className={styles.banner} alt="banner" />
            </div>
        </>
    )
}

export default Herosection;
