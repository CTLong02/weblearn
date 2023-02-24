function Lesson({ title, task }) {
    return (
        <li className={`lesson-${task}`}>
            <a href={`/learning/${title}/${task}`}>{task}</a>
        </li>
    );
}

export default Lesson;
