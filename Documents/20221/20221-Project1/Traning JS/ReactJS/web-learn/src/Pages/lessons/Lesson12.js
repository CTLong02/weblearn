import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson12/img1.png';
import img2 from '~/image/lesson12/img2.png';
import img3 from '~/image/lesson12/img3.png';
import img4 from '~/image/lesson12/img4.png';
import img5 from '~/image/lesson12/img5.png';
import img6 from '~/image/lesson12/img6.png';
import img7 from '~/image/lesson12/img7.png';
import img8 from '~/image/lesson12/img8.png';
import img9 from '~/image/lesson12/img9.png';
import img10 from '~/image/lesson12/img10.png';
import img11 from '~/image/lesson12/img11.png';

function Lesson12() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={12} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết kết quả của chương trình sau:</p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết :</h3>
                        <p>
                            Chắc các bạn cũng đã ít nhiều sử dụng lớp <span className={styles.highlight}>Math</span> để
                            thực hiện việc tính toán. Bạn có bao giờ thắc mắc tại sao lại sử dụng được các phương thức
                            và các biến của lớp <span className={styles.highlight}>Math</span> mà không cần khởi tạo đối
                            tượng. Ví dụ:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>Kết quả khi chạy chương trình</p>
                        <img className={styles.image} src={img3}></img>
                        <p>Qua bài này bạn sẽ hiểu được biến static và phương thức static</p>
                        <h4>Biến static</h4>
                        <p>
                            Biến static là biến mà bạn có thể sử dụng mà không cần khởi tạo đối tượng. Cú pháp để khai
                            báo và sử dụng biến static rất đơn giản bạn có thể xem ví dụ sau:
                        </p>
                        <img className={styles.image} src={img4}></img>
                        <p>Kết quả khi chạy chương trình</p>
                        <img className={styles.image} src={img5}></img>
                        <p>
                            Ngoài việc sử dụng mà không cần khởi tạo thì biến{' '}
                            <span className={styles.highlight}>static</span> còn có đặc điểm nữa là biến{' '}
                            <span className={styles.highlight}>static</span> được chia sẻ bởi tất cả các đối tượng trong
                            chương trình (giá trị của biến <span className={styles.highlight}>static</span> là giống
                            nhau với các đối tượng). Bạn hãy xem ví dụ về biến thông thường và biến static để hiểu rõ
                            tính chất này:
                        </p>
                        <img className={styles.image} src={img6}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img7}></img>
                        <p>
                            kết quả này chắc bạn cũng đoán được (do <span className={styles.highlight}>count</span> là
                            thuộc tính riêng của mỗi đối tượng nên có kết quả là 3 và 1). Nhưng biến{' '}
                            <span className={styles.highlight}>count</span> là biến static thì tất cả các đối tượng này
                            đều dùng chung 1 biến là <span className={styles.highlight}>count</span>:
                        </p>
                        <img className={styles.image} src={img8}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img9}></img>
                        <p>
                            Chính vì hai tính chất này nên biến <span className={styles.highlight}>static</span> sẽ dùng
                            được để lưu thông tin chung có tất cả các đối tượng và lưu các hằng số (giống như biến{' '}
                            <span className={styles.highlight}>PI</span> trong lớp{' '}
                            <span className={styles.highlight}>Math</span>).
                        </p>
                        <p>
                            Lưu ý : biến được khai báo với từ khóa <span className={styles.highlight}>static</span>{' '}
                            không được coi nó là thuộc tính do nó không thuộc đối tượng nào.
                        </p>
                        <h4>Phương thức static</h4>
                        <p>
                            Tương tự với biến <span className={styles.highlight}>static</span> , phương thức{' '}
                            <span className={styles.highlight}>static</span> cũng được khai báo với từ khóa{' '}
                            <span className={styles.highlight}>static</span> và được sử dụng không cần khởi tạo ra đối
                            tượng. Ví dụ hàm <span className={styles.highlight}>max()</span> của lớp{' '}
                            <span className={styles.highlight}>Math</span> là một phương thức{' '}
                            <span className={styles.highlight}>static</span> và trông giống như nhau:
                        </p>
                        <img className={styles.image} src={img10}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img11}></img>
                        <p>
                            Tới đây chắc các bạn cũng đã hiểu được lớp <span className={styles.highlight}>Math</span> là
                            lớp chứa biến và phương thức <span className={styles.highlight}>static</span>.
                        </p>
                        <p>
                            Một số tính chất của phương thức <span className={styles.highlight}>static</span>:
                        </p>
                        <ul className={styles.ulLesson}>
                            <li>
                                Phương thức <span className={styles.highlight}>static</span> có thể được gọi là không
                                cần khởi tạo đối tượng.
                            </li>
                            <li>
                                Trong cùng một lớp phương thức <span className={styles.highlight}>static</span> chỉ có
                                thể gọi đến phương thức <span className={styles.highlight}>static</span> khác , không
                                thể gọi tới phương thức không phải là <span className={styles.highlight}>static</span>.
                            </li>
                            <li>
                                TRong cùng một lớp , phương thức <span className={styles.highlight}>static</span> không
                                thể gọi tới các thuộc tính không phải là static
                            </li>
                        </ul>
                        <p>Đọc tới đây chắc bạn đã hiểu về biến static và phương thức static.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson12;
