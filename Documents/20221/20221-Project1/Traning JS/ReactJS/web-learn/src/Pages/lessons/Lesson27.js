import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson27/img1.png';
import img2 from '~/image/lesson27/img2.png';
import img3 from '~/image/lesson27/img3.png';
import img4 from '~/image/lesson27/img4.png';
import img5 from '~/image/lesson27/img5.png';

function Lesson27() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={27} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Point</span> trong file{' '}
                            <span className={styles.highlight}>Point.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image3} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>Point</span> là lớp lưu thông tin về tọa độ một điểm
                                trong hệ tọa độ 2 chiều.
                            </li>
                            <li>
                                <span className={styles.highlight}>x, y</span> là các thuộc tính chỉ hoành độ, tung độ
                                của đối tượng lớp Point.
                            </li>
                            <li>
                                <span className={styles.highlight}>Point()</span> là phương thức khởi tạo không tham số
                            </li>
                            <li>
                                <span className={styles.highlight}> Point(x: double, y: double)</span> là phương thức
                                khởi tạo có tham số dùng để khởi tạo giá trị cho thuộc tính{' '}
                                <span className={styles.highlight}>x</span> (hoành độ) và{' '}
                                <span className={styles.highlight}>y</span> (tung độ).
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    setX(x: double), getX(), setY(y: double), getY()
                                </span>{' '}
                                là các setter và getter mà bạn đã biết.
                            </li>
                            <li>
                                <span className={styles.highlight}>setXY(x: double, y:double)</span> là phương thức dùng
                                để thay đổi giá trị cho thuộc tính <span className={styles.highlight}>x</span> và{' '}
                                <span className={styles.highlight}>y</span>.
                            </li>
                            <li>
                                distance(x: double, y:double) là phương thức trả về khoảng cách giữa đối tượng hiện tại
                                và điểm có hoành độ x, tung độ y.
                            </li>
                            <li>
                                <span className={styles.highlight}>distance(another: Point)</span> là phương thức trả về
                                khoảng cách giữa đối tượng hiện tại và đối tượng{' '}
                                <span className={styles.highlight}>another</span> (
                                <span className={styles.highlight}>another</span> cũng là một đối tượng thuộc lớp{' '}
                                <span className={styles.highlight}>Point</span>).
                            </li>
                        </ul>
                        <p>
                            Chương trình dùng để test lớp <span className={styles.highlight}>Point</span>:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Point</span> giống như sau:
                        </p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img4}></img>
                            <img className={styles.image} src={img5}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson27;
