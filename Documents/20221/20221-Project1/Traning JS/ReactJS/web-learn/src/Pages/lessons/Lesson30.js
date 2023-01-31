import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson30/img1.png';

function Lesson30() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={30} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy cho biết Java có hỗ trợ đa kế thừa không (đa kế thừa là một lớp được kế thừa trực
                            tiếp từ nhiều lớp)?
                        </p>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>Trước hết bạn hãy xem vấn đề với đa kế thừa:</p>
                        <p>Trước tiên bạn hãy xem một ví dụ để thấy được sự cần thiết của tính kế thừa:</p>
                        <p>
                            Giả sử bạn có 3 lớp là <span className={styles.highlight}>A, B</span> và{' '}
                            <span className={styles.highlight}>C</span>. Trong đó lớp{' '}
                            <span className={styles.highlight}>A</span> và <span className={styles.highlight}>B</span>{' '}
                            có cùng 1 phương thức tên là <span className={styles.highlight}>show()</span>, lớp{' '}
                            <span className={styles.highlight}>C</span> là lớp kế thừa từ hai lớp này. Vậy phương thức{' '}
                            <span className={styles.highlight}>show()</span> trong lớp{' '}
                            <span className={styles.highlight}>C</span> sẽ được thừa hưởng từ lớp nào?
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <p>
                            Bạn có thể thấy từ <em>simple</em> được đặt ngay ở đầu. Do đó, Java được thiết kế với mục
                            đích đơn giản nên không hỗ trợ đa kế thừa, hơn nữa trong thực tế bạn sẽ rất hiếm khi gặp
                            trường hợp một lớp phải kế thừa trực tiếp từ hai lớp trở lên.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson30;
