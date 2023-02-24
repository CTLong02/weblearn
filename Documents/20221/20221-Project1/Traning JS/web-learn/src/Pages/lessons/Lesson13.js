import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson13/img1.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';

function Lesson13() {
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
            <NavLesson lesson={13} list={list} />
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
                            Như bài trước đã được học , phươn thức <span className={styles.highlight}>static</span> sẽ
                            chỉ để truy xuất được tới biến <span className={styles.highlight}>static</span> , do đó kết
                            quả sẽ là <span className={styles.highlight}>Compile Error(Lỗi biên dịch)</span> (do phương
                            thức <span className={styles.highlight}>main()</span> là phương thức static mà biến{' '}
                            <span className={styles.highlight}>x</span> không phải là biến static nên không thể gọi tới
                            biến <span className={styles.highlight}>x</span> từ phương thức{' '}
                            <span className={styles.highlight}>main</span>).
                        </p>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={['Lỗi biên dịch', '10']}
                        ans={1}
                        link="http://localhost:3005/learning/Static%20variables%20and%20methods/14"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}
export default Lesson13;
