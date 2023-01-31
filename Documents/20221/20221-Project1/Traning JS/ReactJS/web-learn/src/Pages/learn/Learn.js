import styles from './Learn.module.scss';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Nav } from '~/components/nav';

function Learn() {
    return (
        <>
            <Nav active="learn" />
            <div className={styles.learning}>
                <Header />
                <Content />
            </div>

            <Footer></Footer>
        </>
    );
}

export default Learn;
