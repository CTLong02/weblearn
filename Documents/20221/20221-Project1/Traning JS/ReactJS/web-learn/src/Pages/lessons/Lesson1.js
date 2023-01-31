import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson1/img1.png';
import img2 from '~/image/lesson1/img2.png';

function Lesson1() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Classes and Objects')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={1} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <p>
                        Đây là bài đầu tiên trong series học lập trình hướng đối tượng java , trước khi tới với khóa học
                        này bạn cần có một số kiến thức cơ bản như biến , câu điều kiện , vòng lặp , phương thức.{' '}
                    </p>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Hãy cho biết lập trình hướng đối tượng là gì</p>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thyết</h3>
                        <p>
                            Chắc các bạn cũng ít nhiều nghe tới java nhưng quan một thời gian học các bạn vẫn chưa biết
                            lập trình hướng đối tượng là gì? Code như thế nào ? Khóa học này sẽ giúp bạn hiểu rõ
                        </p>
                        <p>
                            {' '}
                            Lập trình hướng đối tượng được hiểu đơn giản là một phương pháp để giải quyết bài toán lập
                            trình mà khi áp dụng code sẽ trở nên dễ phát triển và dễ bảo trì hơn. Đây là một phương pháp
                            tiên tiến, phù hợp để phát triển hầu hết các ứng dụng hiện nay. Phương pháp này sẽ giải
                            quyết bài toán bằng cách chia chương trình thành các đối tượng, với mỗi đối tượng sẽ có các
                            thuộc tính (dữ liệu) và hành vi (phương thúc)
                        </p>
                        <p>Để có cái nhìn trực quan về lập trình hướng đối tượng .Bạn hãy xem chương trình sau:</p>
                        <div className={styles.code}>
                            <img className={styles.image} src={img1} />
                        </div>
                        <p>Kết quả chạy chương trình :</p>
                        <div className={styles.code}>
                            <img className={styles.image} src={img2} />
                        </div>
                        <p>
                            Chương trình tạo ra một số đối tượng học sinh sau đó thực hiện gán tên và tuổi cho đối tượng
                            này và hiển thị thông tin của đối tượng ta màn hình
                        </p>
                        <p>
                            Ví dụ này chỉ để bạn có cái nhìn qua và cảm nhận được về phương pháp lập trình hướng đối
                            tượng nên đừng lo nếu bạn không hiểu được các đoạn code.Có thể thấy lập trình hướng đối
                            tượng là phương pháp mà giải quyết bài toán thông qua đối tượng . Trước khi đi xâu hơn , bạn
                            cần biết một số khái niệm cơ bản trong lập trình hướng đối tượng sau:
                        </p>
                        <ul className={styles.ulLesson}>
                            <li>
                                1.Lớp (class) là nơi định nghĩa thông tin về các đối tượng, bạn cũng có thể hiểu lớp và
                                kiểu dữ liệu mà được coi như đối tượng .Như trong ví dụ trên thì
                                <span className={styles.highlight}> Student</span> là lớp dùng để mô tả thông tin các
                                đối tượng học sinh
                                <p>Ví dụ về lớp : Học sinh , giáo viên , xe ô tô</p>
                            </li>
                            <li>
                                2.Đối tượng (object) là một thể hiện của lớp , bạn có thể hiểu đối tượng là một biến .
                                Như ví dụ trên <span className={styles.highlight}> student1</span> là một đối tượng đại
                                diện cho thông tin một học sinh
                            </li>
                            <li>
                                3.Thuộc tính (attribute) : là các đặc điểm của đối tượng , như trong ví dụ trên thì{' '}
                                <span className={styles.highlight}> name</span> và{' '}
                                <span className={styles.highlight}> age</span> là hai thuộc tính của hocj sinh
                            </li>
                            <li>
                                4.Phương thức (method) : là hành vi (hành động) của đối tượng , như ví dụ trên thì{' '}
                                <span className={styles.highlight}> display()</span> là phương thức dùng để giới thiệu
                                bản thân của học sinh
                            </li>
                            <p>
                                {' '}
                                Đọc tới đây chắc bạn hiểu được phần nào về lập trình hướng đối tượng , ở các bài tiếp
                                theo sẽ được học cách tạo và sử dụng đối tượng
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lesson1;
