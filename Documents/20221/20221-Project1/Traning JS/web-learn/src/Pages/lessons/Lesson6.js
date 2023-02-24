import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson6/img1.png';
import img2 from '~/image/lesson6/img2.png';
import img3 from '~/image/lesson6/img3.png';
import img4 from '~/image/lesson6/img4.png';
import img5 from '~/image/lesson6/img5.png';
import img6 from '~/image/lesson6/img6.png';
import img7 from '~/image/lesson6/img7.png';
import img8 from '~/image/lesson6/img8.png';
import Code from '~/components/code/Code';

function Lesson6() {
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
            <NavLesson lesson={6} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy điền code vào dấu <span className={styles.highlight}>...</span> để chương trình hiển
                            thị ra màn hình thông tin sau::
                        </p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>
                            Constructor (phương thức khởi tạo) trong Java được chia làm 2 loại là constructor không tham
                            số (như bài trước bạn đã học) và constructor có tham số.
                        </p>
                        <p>
                            Một constructor mà có tham số truyền vào được gọi là constructor có tham số, xem ví dụ sau
                            để hiểu rõ hơn:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                        <p>
                            Có thể thấy xâu <span className={styles.highlight}>"Viet"</span> đã được truyền vào
                            constructor của lớp Student.
                        </p>
                        <p>
                            Bạn cũng có thể gán giá trị cho các thuộc tính trong phương thức khởi tạo giống như chương
                            trình sau:
                        </p>
                        <img className={styles.image} src={img4}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img5}></img>
                        <p>
                            Lưu ý: nếu tên tham số đầu vào trùng với tên thuộc tính của lớp thì bạn có thể truy xuất tới
                            thuộc tính của lớp bằng từ khóa this và toán tử . giống như ví dụ sau:
                        </p>
                        <img className={styles.image} src={img6}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img7}></img>
                        <p>
                            Đọc tới đây bạn đã biết cách sử dụng consturctor có tham số, hãy quay lại phần bài tập và
                            làm thử.
                        </p>
                        <p>
                            Nếu bạn vẫn chưa quen cách sử dụng constructor có tham số thì có thể xem hướng dẫn ở bên
                            dưới.
                        </p>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn:</h3>
                        <p>Code mẫu :</p>
                        <img className={styles.image} src={img8}></img>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <Code
                        height={height}
                        text={`class Student {
    ...
}

public class Entry {
    public static void main(String[] args) {
        Student s1 = new Student("Long", 24);
        Student s2 = new Student("Kien", 29);
        s1.display();
        s2.display();
    }
}`}
                        inputText={``}
                        outExpected={`"Name: Long\r\nAge: 24\r\nName: Kien\r\nAge: 29\r\n"`}
                        link={'http://localhost:3005/learning/Classes%20and%20Objects/7'}
                    ></Code>
                </div>
            </div>
        </>
    );
}
export default Lesson6;
