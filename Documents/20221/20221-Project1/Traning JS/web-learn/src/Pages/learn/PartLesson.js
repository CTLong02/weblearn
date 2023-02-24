import styles from './Learn.module.scss';
import Lesson from './Lesson';

function PartLesson({ title, tasks }) {
    return (
        <section className={styles.partLesson}>
            <header className={styles.headerPart}>
                <h2 className={styles.headingPart}>{title}</h2>
            </header>
            <div className={styles.tasks}>
                <ul>
                    {tasks.map((task) => {
                        return <Lesson key={task} task={task} title={title} />;
                    })}
                </ul>
            </div>
        </section>
    );
}

export default PartLesson;
