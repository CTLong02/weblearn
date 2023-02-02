import { useState } from 'react';
import styles from './Nav.module.scss';
import { SignIn } from '~/Pages/login';
import { actions, useStore } from '~/store';

function Nav({ active }) {
    const [state, dispatch] = useStore();
    const [isSignIn, setIsSignIn] = useState(false);
    const [isOption, setIsOption] = useState(false);
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
                {!state.account ? (
                    <ul className={styles.login}>
                        <li className={styles.signIn} onClick={() => setIsSignIn(!isSignIn)}>
                            SignIn
                        </li>
                        <li className={styles.register}>
                            <a href="/register">Register</a>
                        </li>
                    </ul>
                ) : (
                    <div className={styles.information}>
                        <div className={styles.fullname}>{state.account.fullname}</div>
                        {state.account.img ? (
                            <img
                                src={require(`../../image/user/${state.account.img}`)}
                                className={styles.imgInfo}
                                onClick={() => setIsOption(!isOption)}
                            ></img>
                        ) : (
                            <img
                                src={require(`../../image/user/default.png`)}
                                className={styles.imgInfo}
                                onClick={() => setIsOption(!isOption)}
                            ></img>
                        )}
                        {isOption ? (
                            <ul className={styles.options}>
                                <li className={styles.triangle}>
                                    <div></div>
                                </li>
                                <li>Set avatar</li>
                                <li
                                    onClick={() => {
                                        dispatch(actions.logout());
                                        setIsOption(false);
                                    }}
                                >
                                    Log out
                                </li>
                            </ul>
                        ) : (
                            <> </>
                        )}
                    </div>
                )}
            </nav>
            {isSignIn ? <SignIn setIsSignIn={setIsSignIn} /> : <></>}
        </>
    );
}

export default Nav;
