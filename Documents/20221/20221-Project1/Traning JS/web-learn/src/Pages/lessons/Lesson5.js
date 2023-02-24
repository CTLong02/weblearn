import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson5/img1.png';
import img2 from '~/image/lesson5/img2.png';
import img3 from '~/image/lesson5/img3.png';
import img4 from '~/image/lesson5/img4.png';
import img5 from '~/image/lesson5/img5.png';
import img6 from '~/image/lesson5/img6.png';
import img7 from '~/image/lesson5/img7.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';

function Lesson5() {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(window.innerHeight - 48);
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
            <NavLesson lesson={5} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết kết quả khi chạy chương trình sau</p>
                        <img src={img1} className={styles.image}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thyết</h3>
                        <p>
                            Bạn có thể quan sát thấy trong chương tình trên có đoạn code "lạ" mà ở các bài khác bạn chưa
                            được học:
                        </p>
                        <img src={img2} className={styles.image}></img>
                        <p>
                            Nếu bạn chưa biết đoạn code này thì đây chính là đoạn code của constructor (phương thức khởi
                            tạo)
                        </p>
                        <h4>Constructor(phương thức khởi tạo)</h4>
                        <p>
                            Trong java , constructor là phương thức đặc biệt , phương thức này sẽ tự được gọi khi bạn
                            khởi tạo một đối tượng (với các phương thức thông thường thì cần toán tử{' '}
                            <span className={styles.highlight}> "." </span>
                            để gọi tới). Constructor có điểm đặc biệt là không định nghĩa phương thức trả về và có tên
                            trùng với tên của lớp. Xem ví dụ để hiểu rõ hơn:
                        </p>
                        <img src={img3} className={styles.image}></img>
                        <p>Kết quả chạy chương trình :</p>
                        <img src={img4} className={styles.image}></img>
                        <p>
                            Có thể thấy constructor đã tự động được gọi khi khởi tạo một đối tượng lớp{' '}
                            <span className={styles.highlight}> Student </span>.
                        </p>
                        <p>
                            Nếu một lớp không được khai báo constructor thì chương trình sẽ tự tạo ra một constructor
                            mặc định. Ví dụ nếu bạn khai báo lớp <span className={styles.highlight}> Student </span>
                            giống như sau:
                        </p>
                        <img src={img5} className={styles.image}></img>
                        <p>
                            Thì chương trình trên tự động thêm vào một constructor mặc định (constructor rỗng) bên trong
                            lớp <span className={styles.highlight}> Student </span>:
                        </p>
                        <img src={img6} className={styles.image}></img>
                        <p>
                            Lưu ý : Nếu bạn dùng từ khóa <span className={styles.highlight}> private </span>để khai báo
                            constructor thì bạn sẽ không thể khởi tạo đối tượng của lớp này. Ví dụ chương trình sau khi
                            khai báo lỗi do lớp Student có constructor là{' '}
                            <span className={styles.highlight}> private </span>:
                        </p>
                        <img src={img7} className={styles.image}></img>
                        <p>Đọc tới đây bạn đã hiểu được phương thức khởi tạo và có thê làm được bài này</p>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={['Error compiling program.', `Name: Tuan \n Age: 24`, 'None']}
                        ans={2}
                        link="/learning/Classes%20and%20Objects/6"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}

export default Lesson5;
