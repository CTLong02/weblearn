import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson24/img1.png';
import img2 from '~/image/lesson24/img2.png';
import img3 from '~/image/lesson24/img3.png';
import img4 from '~/image/lesson24/img4.png';

function Lesson24() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={24} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Employee</span> trong file{' '}
                            <span className={styles.highlight}>Employee.java</span> với các thông tin giống như sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>id, firstName, lastName, salary</span> là các thuộc
                                tính chỉ mã, tên, họ, tiền lương của đối tượng nhân viên.
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    Employee(id: int, firstName: String, lastName: String, salary: int)
                                </span>{' '}
                                là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>getFullName()</span> là phương thức trả về{' '}
                                <span className={styles.highlight}>firstName</span> +{' '}
                                <span className={styles.highlight}>lastName</span>.
                            </li>
                            <li>Các phương thức còn lại là các setter và getter.</li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>Employee</span> trên:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Employee</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson24;
