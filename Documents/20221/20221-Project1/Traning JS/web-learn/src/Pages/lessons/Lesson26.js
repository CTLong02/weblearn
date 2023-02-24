import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson26/img1.png';
import img2 from '~/image/lesson26/img2.png';
import img3 from '~/image/lesson26/img3.png';
import img4 from '~/image/lesson26/img4.png';
import img5 from '~/image/lesson26/img5.png';
import img6 from '~/image/lesson26/img6.png';
import img7 from '~/image/lesson26/img7.png';

function Lesson26() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={26} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Time</span> trong file{' '}
                            <span className={styles.highlight}>Time.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image3} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>Time</span> là lớp được dùng để lưu thông tin về giờ,
                                phút, giây.
                            </li>
                            <li>
                                <span className={styles.highlight}>hour, minute, second</span> lần lượt là các thuộc
                                tính chỉ giờ, phút, giây của lớp
                                <span className={styles.highlight}>Time</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>Time(hour: int, minute: int, second: int)</span> là
                                phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>setTime(hour: int, minute: int, second: int)</span>{' '}
                                là phương thức dùng để thay đổi giá trị của các thuộc tính{' '}
                                <span className={styles.highlight}>hour, minute, second</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>nextSecond()</span> là phương thức tăng thời gian của
                                đối tượng lên 1 giây. Ví dụ:
                                <ul>
                                    <li>
                                        Giá trị của các thuộc tính trước và sau khi gọi phương thức{' '}
                                        <span className={styles.highlight}>nextSecond()</span> là{' '}
                                        <span className={styles.highlight}>hour = 7, minute = 7, second = 40</span> và{' '}
                                        <span className={styles.highlight}>hour = 7, minute = 7, second = 41</span>.
                                    </li>
                                    <li>
                                        Giá trị của các thuộc tính trước và sau khi gọi phương thức{' '}
                                        <span className={styles.highlight}>nextSecond()</span> là{' '}
                                        <span className={styles.highlight}>hour = 23, minute = 59, second = 59</span> và
                                        <span className={styles.highlight}>hour = 0, minute = 0, second = 0</span>.
                                    </li>
                                    <li>
                                        Giá trị của các thuộc tính trước và sau khi gọi phương thức{' '}
                                        <span className={styles.highlight}>nextSecond()</span> là{' '}
                                        <span className={styles.highlight}>hour = 7, minute = 59, second = 59</span> và
                                        <span className={styles.highlight}>hour = 8, minute = 0, second = 0</span>.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức dùng để hiển thị ra
                                màn hình thông tin về thời gian của đối tượng dưới định dạng{' '}
                                <span className={styles.highlight}>"HH:mm:ss"</span>. Ví dụ:
                                <ul>
                                    <li>
                                        Giá trị của các thuộc tính trước và sau khi gọi phương thức{' '}
                                        <span className={styles.highlight}>previousSecond()</span> là{' '}
                                        <span className={styles.highlight}>hour = 7, minute = 7, second = 7</span> và{' '}
                                        <span className={styles.highlight}>hour = 7, minute = 7, second = 6</span>.
                                    </li>
                                    <li>
                                        Giá trị của các thuộc tính trước và sau khi gọi phương thức{' '}
                                        <span className={styles.highlight}>previousSecond()</span> là{' '}
                                        <span className={styles.highlight}>hour = 0, minute = 0, second = 0</span> và{' '}
                                        <span className={styles.highlight}>hour = 23, minute = 59, second = 59</span>.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức dùng để hiển thị ra
                                màn hình thông tin về thời gian của đối tượng dưới định dạng{' '}
                                <span className={styles.highlight}>"HH:mm:ss"</span>. Ví dụ:
                                <ul>
                                    <li>
                                        Nếu <span className={styles.highlight}>hour = 1, minute = 8, second = 45</span>{' '}
                                        thì sau khi gọi phương thức
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:{' '}
                                        <span className={styles.highlight}>"01:08:45"</span>
                                    </li>
                                    <li>
                                        Nếu <span className={styles.highlight}>hour = 23, minute = 5, second = 7</span>{' '}
                                        thì sau khi gọi phương thức
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:{' '}
                                        <span className={styles.highlight}>"23:05:07"</span>
                                    </li>
                                </ul>
                            </li>
                            <li>Các phương thức còn lại là các setter và getter mà bạn đã biết.</li>
                        </ul>
                        <p>Chương trình để test lớp Time:</p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Time</span> giống như sau:
                        </p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img4}></img>
                            <img className={styles.image} src={img5}></img>
                            <img className={styles.image} src={img6}></img>
                            <img className={styles.image} src={img7}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson26;
