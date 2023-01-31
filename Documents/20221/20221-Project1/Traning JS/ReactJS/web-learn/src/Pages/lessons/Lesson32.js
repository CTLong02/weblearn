import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson32/img1.png';
import img2 from '~/image/lesson32/img2.png';
import img3 from '~/image/lesson32/img3.png';
import img4 from '~/image/lesson32/img4.png';
import img5 from '~/image/lesson32/img5.png';
import img6 from '~/image/lesson32/img6.png';
import img7 from '~/image/lesson32/img7.png';
import img8 from '~/image/lesson32/img8.png';
import img9 from '~/image/lesson32/img9.png';

function Lesson32() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={32} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy điền code vào dấu <span>...</span> để chương trình hiển thị ra màn hình thông tin
                            sau:
                        </p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>Trong kế thừa, bạn hoàn toàn có thể ghi đè lại phương thức của lớp cha. Ví dụ:</p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img3}></img>
                        <p>
                            Có thể thấy phương thức <span>display()</span> của lớp <span>SuperClass</span> đã bị ghi đè
                            bởi phương thức <span>display()</span>
                            trong lớp <span>SubClass</span>. Trong ví dụ trên <span>@Override</span> là một annotation
                            để chú thích rằng <span>display()</span> là một phương thức ghi đè phương thức từ lớp cha.
                            Việc sử dụng <span>@Override</span>
                            annotation là không bắt buộc nhưng trong mọi trường hợp bạn nên dùng nó vì các lợi ích sau:
                        </p>
                        <ul className={styles.ulLesson}>
                            <li>
                                Nếu một phương thức được chú thích với annotation <span>@Override</span> thì chương
                                trình sẽ kiểm tra xem phương thức này có thực sự ghi đè phương thức của lớp cha không,
                                nếu không thì sẽ báo lỗi. Việc này sẽ giúp bạn ngăn được những lỗi đánh máy như gõ nhầm
                                tên phương thức hoặc nhầm tham số. Nếu không có <span>@Override</span> annotation thì
                                bạn sẽ không thể biết được bạn có thực sự đang ghi đè phương thức từ lớp cha hay không.
                            </li>
                            <li>
                                Giúp người khác khi nhìn vào code sẽ hiểu được đây là phương thức được ghi đè từ lớp
                                cha.
                            </li>
                        </ul>
                        <p>
                            Lưu ý: Trong trường hợp phương thức của lớp cha bị ghi đè thì bạn vẫn có thể gọi tới nó bằng
                            từ khóa <span>super</span>. Ví dụ:
                        </p>
                        <img className={styles.image} src={img4}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img5}></img>
                        <p>
                            Ngoài ra, phương thức <span>static</span> sẽ không thể bị ghi đè và đối với các phương thức{' '}
                            <span>non-static</span>
                            bạn có thể ngăn không cho lớp con ghi đè bằng cách thêm từ khóa <span>final</span> giống như
                            sau:
                        </p>
                        <img className={styles.image} src={img6}></img>
                        <p>
                            Lúc này bạn phải dùng từ khóa <span>super</span> để chỉ cho lớp con biết cần phải gọi tới
                            constructor nào của lớp cha giống chương trình sau:
                        </p>
                        <p>Đọc tới đây bạn đã hiểu về ghi đè trong kế thừa, hãy quay lại phần bài tập và làm thử.</p>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn</h3>
                        <p>Code mẫu:</p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img7}></img>
                            <img className={styles.image} src={img8}></img>
                            <img className={styles.image} src={img9}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson32;
