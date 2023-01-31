import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson28/img1.png';
import img2 from '~/image/lesson28/img2.png';
import img3 from '~/image/lesson28/img3.png';
import img4 from '~/image/lesson28/img4.png';
import img5 from '~/image/lesson28/img5.png';
import img6 from '~/image/lesson28/img6.png';
import img7 from '~/image/lesson28/img7.png';

function Lesson28() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={28} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Account</span> trong file{' '}
                            <span className={styles.highlight}>Account.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image3} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>Account</span> là lớp dùng để mô tả thông tin về các
                                tài khoản ngân hàng.
                            </li>
                            <li>
                                <span className={styles.highlight}>id, name</span> và{' '}
                                <span className={styles.highlight}>balance</span> lần lượt là các thuộc tính chỉ số tài
                                khoản, tên chủ tài khoản và số dư trong tài khoản.
                            </li>
                            <li>
                                <span className={styles.highlight}>Account(id: int, name: String)</span> và{' '}
                                <span className={styles.highlight}>Account(id: int, name: String, balance: int)</span>{' '}
                                là các phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính tương
                                ứng.
                            </li>
                            <li>
                                <span className={styles.highlight}>getId(), setName(), getName(), getBalance()</span> là
                                các setter, getter.
                            </li>
                            <li>
                                <span className={styles.highlight}>deposit(amount: int)</span> là phương thức dùng để
                                gửi tiền vào tài khoản 1 lượng có giá trị là{' '}
                                <span className={styles.highlight}>amount (balance += amount)</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>withdraw(amount: int)</span> là phương thức dùng để
                                rút tiền từ tài khoản 1 lượng có giá trị là{' '}
                                <span className={styles.highlight}>amount (balance -= amount)</span>. Nếu số dư trong
                                tài khoản không đủ (<span className={styles.highlight}>{'balance < amount'}</span>) thì
                                không thực hiện rút tiền và hiển thị ra màn hình:
                                <img className={styles.image} src={img2}></img>
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức dùng để hiển thị ra
                                màn hình thông tin tài khoản. Ví dụ nếu{' '}
                                <span className={styles.highlight}>id = 1000, name = "Tuan", balance = 2490</span> thì
                                khi gọi phương thức
                                <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:
                                <img className={styles.image} src={img3}></img>
                            </li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>Account</span>:
                        </p>
                        <img className={styles.image} src={img4}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img5}></img>
                    </div>
                    <div className={styles.instruciton}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Account</span> giống như sau:
                        </p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img6}></img>
                            <img className={styles.image} src={img7}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson28;
