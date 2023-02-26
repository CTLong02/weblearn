import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson3/img1.png';
import img2 from '~/image/lesson3/img2.png';
import img3 from '~/image/lesson3/img3.png';
import img4 from '~/image/lesson3/img4.png';
import img5 from '~/image/lesson3/img5.png';
import Code from '~/components/code/Code';

function Lesson3() {
    const [height, setHeight] = useState(window.innerHeight - 48);
    const [list, setList] = useState([]);
    const handleResize = () => {
        setHeight(window.innerHeight - 48);
    };
    useEffect(() => {
        fetch('/api/Classes and Objects')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    window.addEventListener('resize', handleResize);
    return (
        <>
            <NavLesson lesson={3} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Sử dụng phương pháp lập trình hướng đối tượng để giải quyết bài tập sau:</p>
                        <p>
                            Bạn hãy viết chương trình nhập từ bàn phím chiều dài và chiều rộng của một hình chữ nhật và
                            hiển thị ra màn hình:
                        </p>
                        <>
                            <img className={styles.image} src={img1}></img>
                        </>
                        <p>
                            Với <span className={styles.highlight}> {'{ P1 }'}</span> và
                            <span className={styles.highlight}> {'{ P2 }'}</span> lần lượt là diện tích và chu vi của
                            hình chữ nhật đó. Ví dụ nếu bạn nhập:
                        </p>
                        <>
                            <img className={styles.image} src={img2}></img>
                        </>
                        <p>Thì màn hình sẽ hiển thị ra:</p>
                        <>
                            <img className={styles.image} src={img3}></img>
                        </>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn:</h3>
                        <p>
                            Như bài trước bạn đã biết, phương pháp lập trình hướng đối tượng là phương pháp giải quyết
                            các bài toán lập trình thông qua các đối tượng, do đó bài này bạn cần tạo ra một đối tượng
                            thuộc lớp <span className={styles.highlight}> Rectangle</span> (hình chữ nhật) giống như
                            sau:
                        </p>
                        <>
                            <img className={styles.image} src={img4}></img>
                        </>
                        <ul className={styles.ulLesson}>
                            Trong đó:
                            <li>
                                <span className={styles.highlight}> length</span> và{' '}
                                <span className={styles.highlight}> width</span> là hai thuộc tính chỉ chiều dài và
                                chiều rộng của hình chữ nhật.
                            </li>
                            <li>
                                <span className={styles.highlight}> getInfomation()</span> là phương thức nhập dữ liệu
                                cho thuộc tính <span className={styles.highlight}> length</span> và{' '}
                                <span className={styles.highlight}> width</span> từ bàn phím.
                            </li>
                            <li>
                                <span className={styles.highlight}> display()</span> là phương thức dùng để hiển thị
                                thông tin về chu vi và diện tích của hình chữ nhật ra màn hình.
                            </li>
                            <li>
                                <span className={styles.highlight}> getArea()</span> và{' '}
                                <span className={styles.highlight}> getPerimeter()</span> là hai phương thức trả về diện
                                tích và chu vi của hình chữ nhật, hai phương thức này được dùng trong phương thức{' '}
                                <span className={styles.highlight}> display()</span>.
                            </li>
                        </ul>
                        <p>Code mẫu:</p>
                        <>
                            <img className={styles.image} src={img5}></img>
                        </>
                        <p>
                            Có thể nhận thấy trong phương thức <span className={styles.highlight}> display()</span> bạn
                            có thể không sử dụng phương thức <span className={styles.highlight}> getArea()</span>
                            và <span className={styles.highlight}> getPerimeter()</span> và thay vào đó là gọi thẳng tới
                            công thức tính diện tích và chu vi. Nhưng đây là cách làm không tốt, bạn vẫn nên tạo và sử
                            dụng 2 phương thức này để sau này có thể tái sử dụng lại code.
                        </p>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <Code
                        height={height}
                        text={`import java.util.Scanner;

class Rectangle{
    ...
}

public class Entry {
    public static void main(String[]args) {
        Rectangle r = new Rectangle();
        r.getInformation();
        r.display();
    }
}`}
                        inputText={`5.5,4.5`}
                        outExpected={`Area: 24.75\r\nPerimeter: 20.0\r\n`}
                        link={'http://localhost:3005/learning/Classes%20and%20Objects/4'}
                    ></Code>
                </div>
            </div>
        </>
    );
}
export default Lesson3;
