import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson35/img1.png';
import img2 from '~/image/lesson35/img2.png';
import img3 from '~/image/lesson35/img3.png';
import img4 from '~/image/lesson35/img4.png';
import img5 from '~/image/lesson35/img5.png';
import img6 from '~/image/lesson35/img6.png';

function Lesson35() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={35} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Employee</span> và{' '}
                            <span className={styles.highlight}>Manager</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <p>Giải thích:</p>
                        <strong>Lớp Employee</strong>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>name</span> và{' '}
                                <span className={styles.highlight}>salary</span> là 2 thuộc tính chỉ tên và tiền lương
                                của nhân viên.
                            </li>
                            <li>
                                <span className={styles.highlight}>Employee(name: String, salary: int)</span> là phương
                                thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức hiển thị ra màn hình
                                thông tin của đối tượng. Ví dụ nếu{' '}
                                <span className={styles.highlight}>name = "Khanh", salary = 1500</span> thì khi gọi
                                phương thức <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:
                                <img className={styles.image} src={img2}></img>
                            </li>
                            <li>Các phương thức khác là các setter và getter mà bạn đã được học.</li>
                        </ul>
                        <strong>Lớp Manager</strong>
                        <ul className={styles.ulLesson}>
                            <li>
                                Là lớp kế thừa lớp <span className={styles.highlight}>Employee</span>
                            </li>
                            <li>
                                <span className={styles.highlight}>bonus</span> là thuộc tính chỉ tiền lương cộng thêm.
                            </li>
                            <li>
                                <span className={styles.highlight}>Manager(name: String, salary: int, bonus: int)</span>{' '}
                                là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>setBonus()</span> và{' '}
                                <span className={styles.highlight}>getBouns()</span> là các setter và getter mà bạn đã
                                biết.
                            </li>
                            <li>
                                <span className={styles.highlight}>getSalary()</span> là phương thức ghi đè từ lớp{' '}
                                <span className={styles.highlight}>Person</span>, phương thức này trả về
                                <span className={styles.highlight}>salary + bonus</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức ghi đè từ lớp
                                Employee. Ví dụ nếu{' '}
                                <span className={styles.highlight}>name = "Binh", salary = 2500, bonus = 1600</span> thì
                                khi gọi phương thức
                                <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:
                                <img className={styles.image} src={img3}></img>
                                Giải thích: màn hình hiển thị "Salary = 4100" do salary + bonus = 4100 (lương của
                                manager có thêm khoản bonus)
                            </li>
                        </ul>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn</h3>
                        <p>Code mẫu:</p>
                        <strong>File Employee.java</strong>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img4}></img>
                            <img className={styles.image} src={img5}></img>
                        </div>
                        <strong>File Manager.java</strong>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img6}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson35;
