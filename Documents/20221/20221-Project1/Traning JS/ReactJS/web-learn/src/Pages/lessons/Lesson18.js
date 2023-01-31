import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson18/img1.png';
import img2 from '~/image/lesson18/img2.png';
import img3 from '~/image/lesson18/img3.png';
import img4 from '~/image/lesson18/img4.png';

function Lesson18() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={18} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span>ArrayCalculator</span> trong file <span>ArrayCalculator.java</span>{' '}
                            với thông tin giống như sau:
                        </p>
                        <img className={styles.image2} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span>ArrayCalculator</span> là lớp không có thuộc tính.
                            </li>
                            <li>
                                <span>maxOfArray(arr: int[])</span> và <span>maxOfArray(arr: double[])</span> là hai
                                phương thức <span>static</span> được nạp chồng, hai phương thức này trả về giá trị lớn
                                nhất trong mảng <span>arr</span>.
                            </li>
                            <li>
                                <span>minOfArray(arr: int[])</span> và <span>minOfArray(arr: double[])</span> là hai
                                phương thức <span>static</span> được nạp chồng, hai phương thức này trả về giá trị nhỏ
                                nhất trong mảng <span>arr</span>.
                            </li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span>Array</span> <span>Calculator</span>:
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
export default Lesson18;
