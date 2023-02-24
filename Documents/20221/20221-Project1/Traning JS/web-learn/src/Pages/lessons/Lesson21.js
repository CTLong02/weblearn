import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson21/img1.png';
import img2 from '~/image/lesson21/img2.png';
import img3 from '~/image/lesson21/img3.png';

function Lesson21() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={21} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy viết chương trình hiển thị ra màn hình thông tin sau:</p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra các <span className={styles.highlight}>setter</span> và{' '}
                            <span className={styles.highlight}>getter</span> cho lớp{' '}
                            <span className={styles.highlight}>Person</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Ngoài việc sử dụng các <span className={styles.highlight}>setter</span> để gán giá trị cho
                            các biến <span className={styles.highlight}>private</span> thì bạn cũng có thể sử dụng
                            phương thức khởi tạo có tham số mà vẫn đảm bảo được tính đóng gói. Code mẫu sử dụng phương
                            thức khởi tạo có tham số thay cho các setter:
                        </p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson21;
