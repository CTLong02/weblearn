import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson25/img1.png';
import img2 from '~/image/lesson25/img2.png';
import img3 from '~/image/lesson25/img3.png';
import img4 from '~/image/lesson25/img4.png';
import img5 from '~/image/lesson25/img5.png';

function Lesson25() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={25} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Date</span> trong file{' '}
                            <span className={styles.highlight}>Date.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image3} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>day, month, year</span> là các thuộc tính chỉ ngày,
                                tháng, năm của đối tượng <span className={styles.highlight}>Date</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>Date(day: int, month: int, year: int)</span> là
                                phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>setDate(day: int, month: int, year: int)</span> là
                                phương thức dùng để thay đổi giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức dùng để hiển thị
                                thông tin về ngày của đối tượng theo định dạng
                                <span className={styles.highlight}>"dd/MM/yyyy"</span>. Ví dụ:
                                <ul>
                                    <li>
                                        Nếu <span className={styles.highlight}>day = 1, month = 7, year = 1997</span>{' '}
                                        thì khi gọi phương thức
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra{' '}
                                        <span className={styles.highlight}>"01/07/1997"</span>
                                    </li>
                                    <li>
                                        Nếu <span className={styles.highlight}>day = 8, month = 12, year = 2003</span>{' '}
                                        thì khi gọi phương thức
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra{' '}
                                        <span className={styles.highlight}>"08/12/1997"</span>
                                    </li>
                                </ul>
                            </li>
                            <li>Các phương thức khác là các setter và getter bạn đã biết.</li>
                            <li>
                                Để đơn giản, bạn không cần quan tâm tới ngày, tháng, năm của lớp{' '}
                                <span className={styles.highlight}>Date</span> có hợp lệ hay không.
                            </li>
                        </ul>
                        <p>
                            Chương trình test lớp <span className={styles.highlight}>Date</span> trên:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Date</span> giống như sau:
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
export default Lesson25;
