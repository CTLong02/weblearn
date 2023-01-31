import styles from './Learn.module.scss';
import PartLesson from './PartLesson';

const tasks = [];
for (var i = 1; i <= 100; ++i) {
    tasks.push(i);
}

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <PartLesson title="Classes and Objects" tasks={tasks.slice(0, 11)} />
                <PartLesson title="Static variables and methods" tasks={tasks.slice(11, 19)} />
                <PartLesson title="Encapsulation" tasks={tasks.slice(19, 28)} />
                <PartLesson title="Inheritance" tasks={tasks.slice(28, 39)} />
                <PartLesson title="Polymorphism and abstraction" tasks={tasks.slice(39, 46)} />
                <PartLesson title="Relationships" tasks={tasks.slice(46, 51)} />
                <PartLesson title="Quiz" tasks={tasks.slice(51, 81)} />
            </div>
        </div>
    );
}

export default Content;
