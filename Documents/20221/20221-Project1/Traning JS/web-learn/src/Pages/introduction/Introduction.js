import { BsStopwatchFill, BsStack } from 'react-icons/bs';
import { GrCertificate } from 'react-icons/gr';
import { Nav } from '~/components/nav';
import styles from './Introduction.module.scss';

function Introduction() {
    return (
        <>
            <Nav active="introduction" />
            <div className={styles.introduction}>
                <h1 className={styles.heading}>Object Oriented-Programming in Java</h1>
                <div className={styles.container}>
                    <div className={styles.title}>
                        Object-Oriented-Programming (Object-Oriented-Programming) is an object-based programming method
                        to find out the nature of the problem. This course helps programmers learn programming
                        techniques that all logic and practical requirements are built around objects. Understanding how
                        OOP works in Java will simplify maintenance and scalability in software development.
                    </div>
                    <div className={styles.info}>
                        <li>
                            <BsStopwatchFill />
                            <span>40hours</span>
                        </li>
                        <li>
                            <BsStack />
                            <span>81</span>
                        </li>
                        <li>
                            <GrCertificate />
                            <span>Certificate</span>
                        </li>
                    </div>
                    <div className={styles.action}>Free</div>
                </div>
            </div>
        </>
    );
}

export default Introduction;
