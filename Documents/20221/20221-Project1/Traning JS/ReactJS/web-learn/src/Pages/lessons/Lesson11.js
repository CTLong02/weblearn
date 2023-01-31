import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson11/img1.png';
import img2 from '~/image/lesson11/img2.png';
import img3 from '~/image/lesson11/img3.png';
import img4 from '~/image/lesson11/img4.png';

function Lesson11() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Classes and Objects')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={11} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
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
            </div>
        </>
    );
}
export default Lesson11;
