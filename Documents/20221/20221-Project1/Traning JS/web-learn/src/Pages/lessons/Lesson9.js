import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson9/img1.png';
import img2 from '~/image/lesson9/img2.png';
import img3 from '~/image/lesson9/img3.png';
import img4 from '~/image/lesson9/img4.png';
import img5 from '~/image/lesson9/img5.png';
import img6 from '~/image/lesson9/img6.png';
import img7 from '~/image/lesson9/img7.png';
import MultipleCode from '~/components/multipleCode/MultipleCode';

function Lesson9() {
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
            <NavLesson lesson={9} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Student</span> trong file{' '}
                            <span className={styles.highlight}>Student.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <ul className={styles.ulLesson}>
                            Giải thích:
                            <li>
                                <span className={styles.highlight}>name, age, gender, gpa</span> lần lượt là các thuộc
                                tính <span className={styles.highlight}>private</span> chỉ tên, tuổi, giới tính và điểm
                                GPA của đối tượng học sinh.
                            </li>
                            <li>
                                <span className={styles.highlight}>
                                    Student(name: String, age: int, gender: String, gpa: double)
                                </span>{' '}
                                là phương thức khởi tạo có tham số dùng để khởi tạo giá trị cho các thuộc tính (gán
                                thuộc tính <span className={styles.highlight}>name</span> cho tham số{' '}
                                <span className={styles.highlight}>name</span>, gán thuộc tính{' '}
                                <span className={styles.highlight}>age</span> cho tham số{' '}
                                <span className={styles.highlight}>age</span>, ...).
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức hiển thị ra màn hình
                                thông tin của học sinh. Ví dụ nếu các thuộc tính của một học sinh có giá trị như sau:{' '}
                                <span className={styles.highlight}>
                                    name = "Quang", age = 24, gender = "Male", gpa = 7.7
                                </span>{' '}
                                thì khi gọi phương thức <span className={styles.highlight}>display()</span> màn hình sẽ
                                hiển thị ra:
                            </li>
                            <img className={styles.image} src={img2}></img>
                        </ul>
                        <p>Chương trình dùng để test lớp Student:</p>
                        <img className={styles.image} src={img3}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết :</h3>
                        <p>
                            Như ở bài trước bạn đã học, nếu tên tham số đầu vào trùng với tên thuộc tính của lớp thì bạn
                            có thể truy xuất tới thuộc tính của lớp bằng từ khóa{' '}
                            <span className={styles.highlight}>this</span> và toán tử{' '}
                            <span className={styles.highlight}>.</span> giống như ví dụ sau:
                        </p>
                        <img className={styles.image} src={img5}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img6}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn:</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Student</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img7}></img>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <MultipleCode
                        height={height}
                        testcases={[
                            'Lớp Student có thuộc tính name với phạm vi truy cập private',
                            'Lớp Student có thuộc tính age với phạm vi truy cập private',
                            'Lớp Student có thuộc tính gpa với phạm vi truy cập private',
                            'Lớp Student có thuộc tính gender với phạm vi truy cập private',
                            'Lớp Student có phương thức khởi tạo 4 tham số với phạm vi truy cập public',
                            'Lớp Student có phương thức display với phạm vi truy cập public',
                            'Phương thức display hiển thị đúng kết quả.',
                        ]}
                    ></MultipleCode>
                </div>
            </div>
        </>
    );
}
export default Lesson9;
