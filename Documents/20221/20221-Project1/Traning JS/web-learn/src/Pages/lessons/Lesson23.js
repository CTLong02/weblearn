import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson23/img1.png';
import img2 from '~/image/lesson23/img2.png';
import img3 from '~/image/lesson23/img3.png';
import img4 from '~/image/lesson23/img4.png';

function Lesson22() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={23} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Student</span> với thông tin giống như
                            sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                id, name, age, address, score lần lượt là các thuộc tính chỉ mã, tên, tuổi, địa chỉ và
                                điểm của đối tượng học sinh. Trong đó, thuộc tính score luôn phải được đảm bảo là không
                                âm và nhỏ hơn hoặc bằng 10 (nếu <spanspan>{'score < 0'}</spanspan> thì gán{' '}
                                <span className={styles.highlight}>score = 0</span>, nếu{' '}
                                <span className={styles.highlight}>{'score > 10'}</span> thì gán{' '}
                                <span className={styles.highlight}>score = 10</span>
                                ).
                            </li>
                            <li>
                                <span className={styles.highlight}>Student()</span> là phương thức khởi tạo không tham
                                số.
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    Student(id: int, name: String, age: int, adderss: String, score: int)
                                </span>{' '}
                                là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính{' '}
                                <span className={styles.highlight}>id, name, age, address, score</span>
                            </li>
                            <li>Các phương thức còn lại là các setter và getter mà bạn đã được học.</li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>Student</span> trên:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Student</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson22;
