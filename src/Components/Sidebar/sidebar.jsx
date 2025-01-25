import styles from './sidebar.module.css';
import reactLogo from '../assets/logo.svg';

const Sidebar = () => {
    return(
        <>
        <div className={styles.sidebar}>

            <div className={styles.logoSection}>
                <div>
                   <img src={reactLogo} alt="Logo" className={styles.manLogo}/>
                
                    <p className={styles.menu}>Your Restaurant Menu</p>
                    <p className={styles.slogan}>Your Slogan</p>                    
                </div>

            </div>

            <div className={styles.links}>
                <h5 >Quick links</h5>
                <ol >
                    <li>Home</li>
                    <li>Your Orders</li>
                    <li>Wallet</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ol>
            </div>

            <div className={styles.aboutUs}>
                    <h5 >More about us</h5>
                    <ol >
                        <li>Our blog</li>
                        <li>Upcoming Dishes</li>
                        <li>Our Story</li>
                        <li>Social Media Links</li>
                    </ol>
            </div>
        </div>
            
        </>
    );
}

export default Sidebar;

// className={styles.} 
