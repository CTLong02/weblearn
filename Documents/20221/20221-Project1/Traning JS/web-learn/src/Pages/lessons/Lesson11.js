import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson11/img1.png';
import img2 from '~/image/lesson11/img2.png';
import img3 from '~/image/lesson11/img3.png';
import img4 from '~/image/lesson11/img4.png';
import Code from '~/components/code/Code';

function Lesson11() {
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
            <NavLesson lesson={11} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy điền code vào dấu <span className={styles.highlight}>...</span> để màn hình hiển thị
                            ra thông tin sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn:</h3>
                        <p>
                            Bạn cần lưu ý rằng việc khai báo và sử dụng mảng các đối tượng không giống với khai báo và
                            sử dụng mảng các kiểu dữ liệu nguyên thủy như int, double, String, ...
                        </p>
                        <p>Để sử dụng được các phần tử trong mảng bạn cần phải khởi tạo cho từng phần tử. Ví dụ:</p>
                        <img className={styles.image} src={img2}></img>
                        <p>Code mẫu sử dụng phương thức khởi tạo có tham số:</p>
                        <img className={styles.image} src={img3}></img>
                        <p>Code mẫu sử dụng phương thức khởi tạo không tham số.</p>
                        <img className={styles.image} src={img4}></img>
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
        Student[] students = new Student[3];
        
        ...
        
        for (int i = 0; i < 3; i++) {
            students[i].display();
        }
    }
}`}
                        inputText={``}
                        outExpected={`"Name: Tuan\r\nAge: 24\r\nName: Cuong\r\nAge: 25\r\nName: Duc\r\nAge: 24\r\n"`}
                        link={'/learning/Static%20variables%20and%20methods/12'}
                    ></Code>
                </div>
            </div>
        </>
    );
}
export default Lesson11;
