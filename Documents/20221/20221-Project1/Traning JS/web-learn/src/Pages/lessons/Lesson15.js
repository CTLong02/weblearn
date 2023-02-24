import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson15/img1.png';
import img2 from '~/image/lesson15/img2.png';
import img3 from '~/image/lesson15/img3.png';
import img4 from '~/image/lesson15/img4.png';
import MultipleCode from '~/components/multipleCode/MultipleCode';

function Lesson15() {
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
            <NavLesson lesson={15} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Math</span> với thông tin giống như
                            sau:
                        </p>
                        <img className={styles.image2} src={img1}></img>
                        <p>
                            Trong sơ đồ lớp thì các phương thức và thuộc tính được gạch dưới chính là các phương thức
                            <span className={styles.highlight}>static</span> và thuộc tính{' '}
                            <span className={styles.highlight}>static</span>.
                        </p>
                        <p>
                            Giải thích lớp <span className={styles.highlight}>Math</span>:
                        </p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>PI</span> là biến{' '}
                                <span className={styles.highlight}>static</span> có giá trị mặc định là{' '}
                                <span className={styles.highlight}>3.14</span>
                            </li>
                            <li>
                                <span className={styles.highlight}>abs(x: int)</span> là hàm trả về giá trị tuyệt đối
                                của số <span className={styles.highlight}>x</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>add(x: int, y: int)</span> là hàm trả về tổng 2 số{' '}
                                <span className={styles.highlight}>x</span> và{' '}
                                <span className={styles.highlight}>y</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>subtract(x: int, y: int)</span> là hàm trả về hiệu 2
                                số <span className={styles.highlight}>x</span> và{' '}
                                <span className={styles.highlight}>y</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>min(x: int, y: int)</span> là hàm trả về số nhỏ nhất
                                trong 2 số.
                            </li>
                            <li>
                                <span className={styles.highlight}>max(x: int, y: int)</span> là hàm trả về số lớn nhất
                                trong 2 số.
                            </li>
                            <li>
                                <span className={styles.highlight}>pow(x: int, y: int)</span> là hàm trả về x^y.
                            </li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>Math</span>:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Có thể thấy yêu cầu của bài này là tạo ra một lớp giống như lớp{' '}
                            <span className={styles.highlight}>Math</span> có sẵn trong Java. Code mẫu:
                        </p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <MultipleCode
                        height={height}
                        testcases={[
                            'Lớp Math có biến static PI với phạm vi truy cập public',
                            'Lớp Math có phương thức static abs với phạm vi truy cập public',
                            'Lớp Math có phương thức static add với phạm vi truy cập public',
                            'Lớp Math có phương thức static subtract với phạm vi truy cập public',
                            'Lớp Math có phương thức static min với phạm vi truy cập public',
                            'Lớp Math có phương thức static max với phạm vi truy cập public',
                            'Lớp Math có phương thức static pow với phạm vi truy cập public',
                            'Phương thức abs trả về đúng kết quả theo yêu cầu đề bài',
                            'Phương thức add trả về đúng kết quả theo yêu cầu đề bài',
                            'Phương thức subtract trả về đúng kết quả theo yêu cầu đề bài',
                            'Phương thức min trả về đúng kết quả theo yêu cầu đề bài',
                            'Phương thức max trả về đúng kết quả theo yêu cầu đề bài',
                            'Phương thức pow trả về đúng kết quả theo yêu cầu đề bài',
                        ]}
                    ></MultipleCode>
                </div>
            </div>
        </>
    );
}
export default Lesson15;
