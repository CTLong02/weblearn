import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson14/img1.png';
import img2 from '~/image/lesson14/img2.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';

function Lesson14() {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(window.innerHeight - 48);
    const handleResize = () => {
        setHeight(window.innerHeight - 48);
    };
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={14} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết kết quả của chương trình sau:</p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Biến <span className={styles.highlight}>static</span> là biến mà được dùng chung cho tất cả
                            các đối tượng nên kết quả của chương trình sẽ là:
                        </p>
                        <img className={styles.image} src={img2}></img>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={['10 10', '10 20', '20 10', '20 20']}
                        ans={4}
                        link="http://localhost:3005/learning/Static%20variables%20and%20methods/15"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}
export default Lesson14;
