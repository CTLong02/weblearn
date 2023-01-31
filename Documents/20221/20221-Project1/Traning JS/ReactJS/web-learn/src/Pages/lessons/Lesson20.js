import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson20/img1.png';
import img2 from '~/image/lesson20/img2.png';
import img3 from '~/image/lesson20/img3.png';
import img4 from '~/image/lesson20/img4.png';
import img5 from '~/image/lesson20/img5.png';

function Lesson20() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Encapsulation')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={20} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết những lợi ích của tính đóng gói trong lập trình hướng đối tượng.</p>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết :</h3>
                        <p>
                            Trong lập trình hướng đối tượng có 4 tính chất là tính đóng gói (<em>Encapsulation</em>),
                            tính kế thừa (<em>Inheritance</em>), tính đa hình (<em>Polymorphism</em>) và tính trừu tượng
                            (<em>Abstraction</em>). Trong chương này bạn sẽ học và hiểu được tính chất đầu tiên trong 4
                            tính chất trên, đó là tính đóng gói.
                        </p>
                        <h4>Tính đóng gói</h4>
                        <p>
                            Tính đóng là kỹ thuật giúp bạn che giấu được những thông tin bên trong đối tượng. Mục đích
                            chính của tính đóng gói là giúp hạn chế các lỗi khi phát triển chương trình.
                        </p>
                        <p>Để có cái nhìn trực quan về tính đóng gói, bạn hãy xem ví dụ sau:</p>
                        <img className={styles.image} src={img1}></img>
                        <p>
                            Trong ví dụ trên các thuộc tính của lớp <span className={styles.highlight}>Student</span>{' '}
                            đều là <span className={styles.highlight}>public</span> dẫn tới các thuộc tính của lớp này
                            có thể được truy xuất trực tiếp từ nơi khác. Trên thực tế bạn nên hạn chế tối đa các biến có
                            phạm vi truy cập <span className={styles.highlight}>public</span> vì nó vi phạm tính đóng
                            gói trong lập trình hướng đối tượng. Để đảm bảo tính đóng gói cho lớp{' '}
                            <span className={styles.highlight}>Student</span> bạn nên để phạm vi truy cập của các thuộc
                            tính là <span className={styles.highlight}>private</span> và truy xuất tới các thuộc tính
                            này thông qua các phương thức <span className={styles.highlight}>public</span> (gọi là các{' '}
                            <span className={styles.highlight}>setter</span> ,
                            <span className={styles.highlight}>getter</span>) giống như sau:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Với cách làm này thông tin của đối tượng đã được ẩn đi, bạn chỉ có thể giao tiếp với đối
                            tượng thông qua các phương thức. Điều này cũng giống với thực tế. Ví dụ khi bạn gặp một
                            người lạ thì bạn không thể biết được các thuộc tính của người này (số điện thoại, sở thích,
                            ...), kể cả khi bạn hỏi thì người này cũng chưa chắc đã trả lời cho bạn đúng sự thật (giống
                            như phương thức không trả về giá trị thực thuộc tính mà trả về một giá trị khác).
                        </p>
                        <p>Các lợi ích chính mà tính đóng gói đem lại:</p>
                        <ul className={styles.ulLesson}>
                            <li>Hạn chế được các truy xuất không hợp lệ tới các thuộc tính của đối tượng.</li>
                            <li>
                                Giúp cho trạng thái của các đối tượng luôn đúng. Ví dụ nếu thuộc tính{' '}
                                <span className={styles.highlight}>gpa</span> của lớp{' '}
                                <span className={styles.highlight}>Student</span> là{' '}
                                <span className={styles.highlight}>public</span> thì sẽ rất khó kiểm soát được giá trị,
                                bạn có thể thay đổi <span className={styles.highlight}>gpa</span> thành bất kỳ giá trị
                                nào. Ngược lại, nếu bạn để thuộc tính <span className={styles.highlight}>gpa</span> là{' '}
                                <span className={styles.highlight}>private</span> và cung cấp hàm{' '}
                                <span className={styles.highlight}>setGpa()</span> giống như sau:
                                <img className={styles.image} src={img3}></img>
                                <p>
                                    thì lúc này giá trị của thuộc tính <span className={styles.highlight}>gpa</span> sẽ
                                    luôn được đảm bảo là không âm và nhỏ hơn hoặc bằng{' '}
                                    <span className={styles.highlight}>4</span> (do muốn thay đổi{' '}
                                    <span className={styles.highlight}>gpa</span> thì phải thông qua hàm{' '}
                                    <span className={styles.highlight}>setGpa()</span>).
                                </p>
                            </li>
                            <li>Giúp ẩn đi những thông tin không cần thiết về đối tượng.</li>
                            <li>
                                Cho phép bạn thay đổi cấu trúc bên trong lớp mà không ảnh hưởng tới lớp khác. Ví dụ ban
                                đầu bạn thiết kế lớp <span className={styles.highlight}>Student</span> giống như sau:
                                <img className={styles.image} src={img4}></img>
                                <p>
                                    Sau này nếu bạn muốn gộp 2 thuộc tính{' '}
                                    <span className={styles.highlight}>firstName</span> và{' '}
                                    <span className={styles.highlight}>lastName</span> thành{' '}
                                    <span className={styles.highlight}>fullName</span> thì lớp{' '}
                                    <span className={styles.highlight}>Student</span> sẽ giống như sau:
                                </p>
                                <img className={styles.image} src={img5}></img>
                                <p>
                                    Lúc này cấu trúc lớp <span className={styles.highlight}>Student</span> đã bị thay
                                    đổi nhưng các đối tượng sử dụng lớp này vẫn không cần phải thay đổi do các đối tượng
                                    này chỉ quan tâm tới phương thức{' '}
                                    <span className={styles.highlight}>getFullName()</span>. Nếu không có phương thức
                                    này thì bạn phải sửa tất cả những chỗ sử dụng thuộc tính{' '}
                                    <span className={styles.highlight}>firstName</span> và{' '}
                                    <span className={styles.highlight}>lastName</span> của lớp{' '}
                                    <span className={styles.highlight}>Student</span>.
                                </p>
                            </li>
                        </ul>
                        <p>
                            Đọc tới đây bạn đã hiểu về tính đóng gói, hãy quay lại phần bài tập và tích vào những đáp án
                            đúng.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson20;
