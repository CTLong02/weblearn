import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';
function Lesson68() {
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
            <NavLesson lesson={68} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <h3>Bài Tập</h3>
                    <p>Bạn hãy chọn đáp án đúng nhất trong các đáp án còn lại sau đây.</p>
                    <p>Phạm vi truy cập của một đối tượng khi khai báo private là gì?</p>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={[
                            'Có thể được truy cập bất kỳ vị trí nào trong chương trình.',
                            'Có thể được truy cập từ các lớp trong cùng package.',
                            'Có thể được truy cập từ các lớp trong cùng package và lớp con nằm trong package khác.',
                            'Chỉ có thể truy cập từ các phương thức khác trong cùng class đó.',
                        ]}
                        ans={4}
                        link="http://localhost:3005/learning/Quiz/69"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}

export default Lesson68;
