import { MdArrowBackIos } from 'react-icons/md';
import styles from './lesson.module.scss';
function NavLesson({ lesson, list }) {
    const data = list.find((les) => les.slug === lesson.toString());
    // console.log(data);
    return (
        <header className={styles.headerLesson}>
            <a href="/learning">
                <MdArrowBackIos className={styles.btnBack} />
            </a>
            <h4 className={styles.title}>{data ? `${data.titlePart} : ${data.title}` : ''} </h4>
            <ul className={styles.navLesson}>
                {list.map((les, index) => {
                    return (
                        <a
                            key={index}
                            href={les.slug === lesson.toString() ? `#` : `/learning/${les.titlePart}/${les.slug}`}
                        >
                            <li key={index} className={les.slug === lesson.toString() ? styles.current : ''}>
                                {les.slug}
                            </li>
                        </a>
                    );
                })}
            </ul>
        </header>
    );
}

export default NavLesson;
