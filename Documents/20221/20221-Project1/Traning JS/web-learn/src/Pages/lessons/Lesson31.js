import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson31/img1.png';
import img2 from '~/image/lesson31/img2.png';
import img3 from '~/image/lesson31/img3.png';
import img4 from '~/image/lesson31/img4.png';
import img5 from '~/image/lesson31/img5.png';
import img6 from '~/image/lesson31/img6.png';
import img7 from '~/image/lesson31/img7.png';
import img8 from '~/image/lesson31/img8.png';
import img9 from '~/image/lesson31/img9.png';
import img10 from '~/image/lesson31/img10.png';
import img11 from '~/image/lesson31/img11.png';

function Lesson31() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={31} list={list} />
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
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>Để làm được bài này bạn cần biết được 2 đặc điểm của tính kế thừa.</p>
                        <strong>Lớp con không được thừa hưởng các thuộc tính và phương thức private từ lớp cha.</strong>
                        <p>
                            Trong kế thừa, các lớp con chỉ có thể thừa hưởng được các thuộc tính và phương thức có phạm
                            vi truy cập <span className={styles.highlight}>public, protected</span> và{' '}
                            <span className={styles.highlight}>default</span> (trong trường hợp lớp con và lớp cha cùng
                            package). Nếu bạn truy xuất tới thuộc tính <span className={styles.highlight}>private</span>{' '}
                            của lớp cha từ lớp con thì chương trình sẽ báo lỗi giống như sau:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Muốn truy xuất được tới các thuộc tính <span className={styles.highlight}>private</span> của
                            lớp cha thì bạn phải thông qua các setter và getter của lớp cha:
                        </p>
                        <img className={styles.image} src={img3}></img>
                        <p>
                            Do đó trong bài này bạn không thể truy xuất trực tiếp tới thuộc tính{' '}
                            <span className={styles.highlight}>name</span> và{' '}
                            <span className={styles.highlight}>dob</span> của lớp{' '}
                            <span className={styles.highlight}>Person</span> từ lớp{' '}
                            <span className={styles.highlight}>Student</span>, thay vào đó bạn phải sử dụng các setter
                            và getter.
                        </p>
                        <strong>Constructor của lớp con luôn gọi tới constructor của lớp cha</strong>
                        <img className={styles.image} src={img4}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img5}></img>
                        <p>
                            Có thể thấy constructor mặc định (constructor không tham số) của lớp cha đã được gọi cùng
                            với constructor của lớp con. Do đó, khi lớp cha không có constructor mặc định mà lớp con
                            không chỉ rõ cần gọi tới constructor nào của lớp cha thì chương trình sẽ báo lỗi giống như
                            sau:
                        </p>
                        <img className={styles.image} src={img6}></img>
                        <p>
                            Lúc này bạn phải dùng từ khóa <span className={styles.highlight}>super</span> để chỉ cho lớp
                            con biết cần phải gọi tới constructor nào của lớp cha giống chương trình sau:
                        </p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img7}></img>
                            <img className={styles.image} src={img8}></img>
                        </div>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img9}></img>
                        <p>
                            Trong ví dụ trên <span className={styles.highlight}>super(name)</span> chính là gọi tới
                            constructor một tham số của lớp cha.
                        </p>
                        <p>
                            Từ khóa <span className={styles.highlight}>super</span> khác từ khóa{' '}
                            <span className={styles.highlight}>this</span> ở chỗ từ khóa{' '}
                            <span className={styles.highlight}>super</span> sẽ tham chiếu tới lớp cha còn từ khóa{' '}
                            <span className={styles.highlight}>this</span> sẽ tham chiếu tới lớp hiện tại. Do đó bạn
                            cũng có thể truy xuất tới các thuộc tính và phương thức của lớp cha bằng từ khóa{' '}
                            <span className={styles.highlight}>super</span>.
                        </p>
                        <p>Đọc tới đây bạn đã hiểu được thêm về tính kế thừa, hãy quay lại phần bài tập và làm thử.</p>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn</h3>
                        <p>Code mẫu:</p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img10}></img>
                            <img className={styles.image} src={img11}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson31;
