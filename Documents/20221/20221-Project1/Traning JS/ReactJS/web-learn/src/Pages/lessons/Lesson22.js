import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson22/img1.png';
import img2 from '~/image/lesson22/img2.png';
import img3 from '~/image/lesson22/img3.png';
import img4 from '~/image/lesson22/img4.png';

function Lesson22() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={22} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Rectangle</span> với thông tin giống
                            như sau:
                        </p>
                        <img className={styles.image3} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>length</span> và{' '}
                                <span className={styles.highlight}>width</span> là hai thuộc tính chỉ chiều dài và chiều
                                rộng của hình chữ nhật.
                            </li>
                            <li>
                                <span className={styles.highlight}>Rectangle()</span> là phương thức khởi tạo không tham
                                số.
                            </li>
                            <li>
                                <span className={styles.highlight}>Rectangle(length: double, width: double)</span> là
                                phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho thuộc tính{' '}
                                <span className={styles.highlight}>length</span> và{' '}
                                <span className={styles.highlight}>width</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    setLength(length: double), getLength(), setWidth(width: double), getWidth()
                                </span>{' '}
                                là các setter và getter bạn đã học ở các bài trước.
                            </li>
                            <li>
                                <span className={styles.highlight}>getArea()</span> là phương thức trả về diện tích hình
                                chữ nhật.
                            </li>
                            <li>
                                <span className={styles.highlight}>getPerimeter()</span> là phương thức trả về chu vi
                                hình chữ nhật.
                            </li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>Rectangle</span> trên:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Rectangle</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson22;
