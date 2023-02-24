import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson10/img1.png';
import img2 from '~/image/lesson10/img2.png';
import img3 from '~/image/lesson10/img3.png';
import img4 from '~/image/lesson10/img4.png';
import MultipleCode from '~/components/multipleCode/MultipleCode';

function Lesson10() {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(window.innerHeight - 48);
    const handleResize = () => {
        setHeight(window.innerHeight - 48);
    };
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        fetch('/api/Classes and Objects')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={10} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy khai báo lớp <span className={styles.highlight}>Circle</span> với thông tin giống
                            như sau:
                        </p>
                        <img className={styles.image2} src={img1}></img>
                        <p> Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>radius</span> là thuộc tính chỉ bán kính của đường
                                tròn
                            </li>
                            <li>
                                <span className={styles.highlight}>Circle(radius: double)</span> là phương thức khởi tạo
                                có tham số dùng để gán giá trị cho thuộc tính radius
                            </li>
                            <li>
                                <span className={styles.highlight}>getArea()</span> và{' '}
                                <span className={styles.highlight}>getCircumference()</span> là hai phương thức trả về
                                diện tích và chu vi của hình tròn với{' '}
                                <span className={styles.highlight}>pi (π) = 3.14</span>.
                            </li>
                        </ul>
                        <p>Chương trình dùng để test lớp Circle:</p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn:</h3>
                        <p>Bạn cần tạo ra lớp Circle giống như sau:</p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <MultipleCode
                        height={height}
                        testcases={[
                            'Lớp Circle có thuộc tính radius với phạm vi truy cập private',
                            'Lớp Circle có phương thức getArea với phạm vi truy cập public',
                            'Lớp Circle có phương thức getCircumference với phạm vi truy cập public',
                            'Lớp Circle có phương thức khởi tạo public với 1 tham số',
                            'Phương thức getArea trả về kết quả giống như yêu cầu đề bài',
                            'Phương thức getCircumference trả về kết quả giống như yêu cầu đề bài',
                        ]}
                    ></MultipleCode>
                </div>
            </div>
        </>
    );
}
export default Lesson10;
