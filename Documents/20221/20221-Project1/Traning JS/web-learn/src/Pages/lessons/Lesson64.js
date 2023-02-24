import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson64/img1.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';
function Lesson64() {
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
            <NavLesson lesson={64} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <h3>Bài Tập</h3>
                    <p>Bạn hãy cho biết kết quả chạy chương trình sau:</p>
                    <img className={styles.image} src={img1} />
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={[
                            'Có lỗi biên dịch:name has private access in Man.',
                            'Không có lỗi biên dịch. ',
                            'Có lỗi biên dịch:for name access modifier in Man for name is weaker in Student.',
                            'Có lỗi biên dịch:name has public access in Student. ',
                        ]}
                        ans={2}
                        link="http://localhost:3005/learning/Quiz/65"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}

export default Lesson64;
