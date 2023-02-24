import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson61/img1.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';
function Lesson61() {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(window.innerHeight - 48);
    const handleResize = () => {
        setHeight(window.innerHeight - 48);
    };
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        fetch('/api/Quiz')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={61} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <h3>Bài Tập</h3>
                    <p>
                        Cho một abstract class Person có method getAge() và bỏ qua kết các cú pháp khai báo khác, bạn
                        hãy cho biết kết quả sau khi thực thi đoạn chương trình sau:
                    </p>
                    <img className={styles.image} src={img1} />
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={[
                            'Chương trình sắp xếp ArrayList<Person> theo thứ tự tăng dần của getAge().',
                            'Chương trình sắp xếp ArrayList<Person> theo thứ tự giảm dần của getAge().',
                            'Lỗi biên dịch',
                            'Lỗi thực thi',
                        ]}
                        ans={3}
                        link="http://localhost:3005/learning/Quiz/62"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}

export default Lesson61;
