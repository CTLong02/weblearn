import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson14/img1.png';
import img2 from '~/image/lesson14/img2.png';

function Lesson14() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={14} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
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
            </div>
        </>
    );
}
export default Lesson14;
