import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson2/img1.png';
import img2 from '~/image/lesson2/img2.png';
import img3 from '~/image/lesson2/img3.png';
import img4 from '~/image/lesson2/img4.png';
import img5 from '~/image/lesson2/img5.png';
import img6 from '~/image/lesson2/img6.png';
import img7 from '~/image/lesson2/img7.png';
import img8 from '~/image/lesson2/img8.png';
import img9 from '~/image/lesson2/img9.png';
import img10 from '~/image/lesson2/img10.png';
import Code from '~/components/code/Code';

function Lesson2() {
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
            <NavLesson lesson={2} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy viết chương trình khai báo lớp <span className={styles.highlight}> Student</span>{' '}
                            với thông tin giống như sau
                        </p>
                        <>
                            <img className={styles.image} src={img1}></img>
                        </>
                        <p>
                            Giải thích: hình trên là mô tả của lớp Student với các thuộc tính và phương thức giống như
                            sau:
                        </p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}> name</span> và{' '}
                                <span className={styles.highlight}> age</span> là hai thuộc tính dùng để lưu trữ tên và
                                tuổi của đối tượng học sinh.
                            </li>
                            <li>
                                <span className={styles.highlight}> display()</span> là phương thức dùng để hiển thị
                                thông tin của đối tượng ra màn hình. Ví dụ, nếu đối tượng có thuộc tính{' '}
                                <span className={styles.highlight}> name = "An", age = 24</span> thì khi gọi phương thức{' '}
                                <span className={styles.highlight}> display()</span> thì màn hình sẽ hiển thị ra:
                            </li>
                            <>
                                <img className={styles.image} src={img2}></img>
                            </>
                            <li>
                                <span className={styles.highlight}>getInformation()</span> là phương thức dùng để nhập
                                dữ liệu cho thuộc tính <span className={styles.highlight}> name</span> và{' '}
                                <span className={styles.highlight}> age</span> từ bàn phím. Ví dụ nếu bạn dùng phương
                                thức này để nhập thông tin cho một đối tượng học sinh với{' '}
                                <span className={styles.highlight}> name = "Kien", age = 28</span> như bên dưới:
                                <img className={styles.image} src={img3}></img>
                                thì khi gọi phương thức <span className={styles.highlight}> display()</span> màn hình sẽ
                                hiển thị ra:
                                <img className={styles.image} src={img10}></img>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thyết</h3>
                        <p>
                            Bài trước bạn đã hiểu sơ qua về lập trình hướng đối tượng và đã biết một số khái niệm như
                            lớp, đối tượng, thuộc tính và phương thức. Ở bài này bạn sẽ biết cách định nghĩa ra một lớp
                            và sử dụng các đối tượng thuộc lớp này. Về bản chất, lớp (class) là một kiểu dữ liệu do bạn
                            tự định nghĩa và đối tượng chính là biến của kiểu dữ liệu này. Cú pháp để khai báo một lớp
                            như sau:
                        </p>
                        <p>
                            Về bản chất, lớp (class) là một kiểu dữ liệu do bạn tự định nghĩa và đối tượng chính là biến
                            của kiểu dữ liệu này. Cú pháp để khai báo một lớp như sau:
                        </p>
                        <p>Để có cái nhìn trực quan về lập trình hướng đối tượng .Bạn hãy xem chương trình sau:</p>
                        <>
                            <img className={styles.image} src={img4}></img>
                        </>
                        <p>
                            Ví dụ bạn có thể tạo ra lớp <span className={styles.highlight}> Student</span> với 2 thuộc
                            tính là <span className={styles.highlight}> name và age</span> và 2 phương thức là
                            <span className={styles.highlight}> getInformation()</span> và{' '}
                            <span className={styles.highlight}> display()</span> giống như sau:
                        </p>
                        <>
                            <img className={styles.image} src={img5}></img>
                        </>
                        <p>
                            Để khai báo đối tượng của một lớp bạn dùng từ khóa{' '}
                            <span className={styles.highlight}> new</span>. Ví dụ để khai báo một đối tượng thuộc lớp{' '}
                            <span className={styles.highlight}> Student</span> bạn làm như sau:
                        </p>
                        <>
                            <img className={styles.image} src={img6}></img>
                        </>
                        <p>
                            Để truy xuất tới các thuộc tính và phương thức của một đối tượng bạn dùng toán tử{' '}
                            <span className={styles.highlight}> "."</span>:
                        </p>
                        <>
                            <img className={styles.image} src={img7}></img>
                        </>
                        <p>Kết quả khi chạy chương trình:</p>
                        <>
                            <img className={styles.image} src={img8}></img>
                        </>
                        <p>
                            Có thể thấy lớp và đối tượng chỉ đơn giản là kiểu dữ liệu và biến. Kiểu dữ liệu này khác các
                            kiểu dữ liệu thông thường như int, string, double, ... ở chỗ nó có thể chứa được các phương
                            thức và kiểu dữ liệu khác.
                        </p>
                        <p>
                            Đọc tới đây bạn đã biết cách định nghĩa một lớp và sử dụng đối tượng của lớp này, hãy quay
                            lại phần bài tập và làm thử.
                        </p>
                    </div>
                    <div className={styles.instruction}>
                        <p>Code mẫu :</p>
                        <>
                            <img className={styles.image} src={img9}></img>
                        </>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <Code
                        height={height}
                        text={`import java.util.Scanner;

class Student{
	...
}


public class Entry {
	public static void main(String[]args) {
		Student s1 = new Student();
		s1.getInformation();
		s1.display();
	}
}`}
                        inputText={`"Khanh",23`}
                        outExpected={`Name: Khanh\r\nAge: 23\r\n`}
                        link={'http://localhost:3005/learning/Classes%20and%20Objects/3'}
                    ></Code>
                </div>
            </div>
        </>
    );
}

export default Lesson2;
