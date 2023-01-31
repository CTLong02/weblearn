import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson17/img1.png';
import img2 from '~/image/lesson17/img2.png';
import img3 from '~/image/lesson17/img3.png';
import img4 from '~/image/lesson17/img4.png';

function Lesson17() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={17} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>ArrayCalculator</span> trong file{' '}
                            <span className={styles.highlight}>ArrayCalculator.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image2} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>ArrayCalculator</span> là lớp không có thuộc tính
                                nào.
                            </li>
                            <li>
                                <span className={styles.highlight}>sumOfArray(arr: int[])</span> là phương thức{' '}
                                <span className={styles.highlight}>static</span> có đầu vào là mảng các số nguyên và trả
                                về tổng của mảng này.
                            </li>
                            <li>
                                <span className={styles.highlight}>sumOfArray(arr: double[])</span> là phương thức{' '}
                                <span className={styles.highlight}>static</span> có đầu vào là mảng các số thực và trả
                                về tổng của mảng này.
                            </li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>ArrayCalculator:</span>
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn :</h3>
                        <p>Code mẫu:</p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson17;
