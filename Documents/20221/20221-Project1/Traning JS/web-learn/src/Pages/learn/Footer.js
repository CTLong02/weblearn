import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { SiMicrosoftoutlook } from 'react-icons/si';
import styles from './Learn.module.scss';
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li className={styles.iconFb}>
                    <a target="_blank" href="https://www.facebook.com/long02122002">
                        <BsFacebook />
                    </a>
                </li>
                <li className={styles.iconInsta}>
                    <a target="_blank" href="#">
                        <BsInstagram />
                    </a>
                </li>
                <li className={styles.iconYou}>
                    <a target="_blank" href="#">
                        <BsYoutube />
                    </a>
                </li>
                <li className={styles.iconOut}>
                    <a target="_blank" href="#">
                        <SiMicrosoftoutlook />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
