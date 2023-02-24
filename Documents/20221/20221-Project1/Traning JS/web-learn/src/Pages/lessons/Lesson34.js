import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson34/img1.png';
import img2 from '~/image/lesson34/img2.png';
import img3 from '~/image/lesson34/img3.png';
import img4 from '~/image/lesson34/img4.png';
import img5 from '~/image/lesson34/img5.png';
import img6 from '~/image/lesson34/img6.png';
import img7 from '~/image/lesson34/img7.png';
import img8 from '~/image/lesson34/img8.png';
import img9 from '~/image/lesson34/img9.png';
import img10 from '~/image/lesson34/img10.png';
function Lesson34() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={34} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra 3 lớp <span className={styles.highlight}>Person, Student, Teacher</span> với
                            thông tin giống như sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <p>Giải thích:</p>
                        <strong>Lớp Person</strong>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>name, age, address</span> là các thuộc tính chỉ tên,
                                tuổi và địa chỉ của đối tượng.
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    Person(name: String, age: int, address: String)
                                </span>{' '}
                                là constructor có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức dùng để hiển thị
                                thông tin của đối tượng ra màn hình. Ví dụ nếu{' '}
                                <span className={styles.highlight}>name = "Khanh", age = 23, address = "Ha Noi"</span>{' '}
                                thì khi gọi phương thức này màn hình sẽ hiển thị ra:
                                <img className={styles.image} src={img2}></img>
                            </li>
                            <li>Các phương thức còn lại là các setter và getter.</li>
                        </ul>
                        <strong>Lớp Student</strong>
                        <ul className={styles.ulLesson}>
                            <li>
                                Lớp <span className={styles.highlight}>Student</span> là lớp được kế thừa từ lớp
                                Person..
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    Student(name: String, age: int, address: String, gpa: double)
                                </span>{' '}
                                là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                Phương thức <span className={styles.highlight}>setGpa()</span> và{' '}
                                <span className={styles.highlight}>getGpa()</span> là các setter và getter.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức được ghi đè từ lớp
                                Person, phương thức này dùng để hiển thị thông tin của đối tượng ra màn hình. Ví dụ, nếu
                                name = "Khanh",{' '}
                                <span className={styles.highlight}>age = 23, address = "Ha Noi", gpa = 9.0</span> thì
                                khi gọi phương thức này màn hình sẽ hiển thị ra:
                                <img className={styles.image} src={img3}></img>
                            </li>
                        </ul>
                        <strong>Lớp Teacher</strong>
                        <ul className={styles.ulLesson}>
                            <li>
                                Lớp <span className={styles.highlight}>Teacher</span> là lớp được kế thừa từ lớp Person.
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    Student(name: String, age: int, address: String, gpa: double)
                                </span>{' '}
                                là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính.
                            </li>
                            <li>
                                Phương thức <span className={styles.highlight}>setSalary()</span> và{' '}
                                <span className={styles.highlight}>getSalary()</span> các setter và getter.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức được ghi đè từ lớp{' '}
                                <span className={styles.highlight}>Person</span>, phương thức này dùng hiển thị thông
                                tin của đối tượng ra màn hình. Ví dụ, nếu{' '}
                                <span className={styles.highlight}>
                                    name = "Tung", age = 34, address = "Ha Noi", salary = 1700
                                </span>{' '}
                                thì khi gọi phương thức này màn hình sẽ hiển thị ra:
                                <img className={styles.image} src={img4}></img>
                            </li>
                        </ul>
                        <p>Chương trình dùng để test các lớp trên:</p>
                        <img className={styles.image} src={img5}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img6}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn</h3>
                        <p>Code mẫu:</p>
                        <strong>File Person.java:</strong>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img7}></img>
                            <img className={styles.image} src={img8}></img>
                        </div>
                        <strong>File Student.java:</strong>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img9}></img>
                            <img className={styles.image} src={img10}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson34;
