import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson60/img1.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';
function Lesson60() {
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
            <NavLesson lesson={60} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <h3>Bài Tập</h3>
                    <p>Bạn hãy cho biết kết quả chạy chương trình sau:</p>
                    <img className={styles.image} src={img1} />
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={[
                            'Thực thể p có giá trị x = 0, y = 0 \nThực  thể p1 có giá trị x = 1, y =2',
                            'Thực thể p không được gán giá trị x, y \nThực thể p1 có giá trị x = 1, y = 2',
                            'Lỗi biên dịch',
                            'Lỗi thực thi',
                        ]}
                        ans={3}
                        link="http://localhost:3005/learning/Quiz/61"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}

export default Lesson60;
