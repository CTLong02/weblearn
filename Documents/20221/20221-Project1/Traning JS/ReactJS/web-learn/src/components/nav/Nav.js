import styles from './Nav.module.scss';
import { SignIn } from '~/Pages/login';
import { useState } from 'react';
function Nav({ active }) {
    const [isSignIn, setIsSignIn] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [account, setAccount] = useState({});
    console.log('isLogin', isLogin);
    return (
        <>
            <nav className={styles.navWeb}>
                <ul className={styles.nav}>
                    <li className={active === 'introduction' ? styles.active : ''}>
                        <a href={active !== 'introduction' ? '/' : '#'}>Introduction</a>
                    </li>
                    <li className={active === 'learn' ? styles.active : ''}>
                        <a href={active !== 'learn' ? '/learning' : '#'}>Learning</a>
                    </li>
                    <li className={active === 'help' ? styles.active : ''}>
                        <a href={active !== 'help' ? '/help' : '#'}>Help</a>
                    </li>
                    <li className={active === 'more' ? styles.active : ''}>
                        <a href={active !== 'more' ? '/more' : '#'}>More</a>
                    </li>
                </ul>
                {!isLogin ? (
                    <ul className={styles.login}>
                        <li className={styles.signIn} onClick={() => setIsSignIn(!isSignIn)}>
                            SignIn
                        </li>
                        <li className={styles.register}>
                            <a href="/register">Register</a>
                        </li>
                    </ul>
                ) : (
                    <div className={styles.account}>{account.fullname}</div>
                )}
            </nav>
            {isSignIn ? <SignIn setIsLogin={setIsLogin} setIsSignIn={setIsSignIn} setAccount={setAccount} /> : <></>}
        </>
    );
}

export default Nav;
