import styles from './navbar.module.css';
import reactLogo from '../assets/logo.svg';

const Navbar = () => {
    return(
        <div className={styles.navbar} >
            <input type="text" className={styles.navInput} placeholder='Search Food Item' />
            <button className={styles.navButton} >Signup</button>
            <button className={styles.navButton} >Login</button>
            <img src={reactLogo} className={styles.navLogo} alt="" srcset="" />
        </div>

        
    )
}

export default Navbar;

// className={styles.} 


