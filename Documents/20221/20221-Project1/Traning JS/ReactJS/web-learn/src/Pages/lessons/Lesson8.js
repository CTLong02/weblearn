import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson8/img1.png';
import img2 from '~/image/lesson8/img2.png';
import img3 from '~/image/lesson8/img3.png';
import img4 from '~/image/lesson8/img4.png';
import img5 from '~/image/lesson8/img5.png';
import img6 from '~/image/lesson8/img6.png';
import img7 from '~/image/lesson8/img7.png';

function Lesson8() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Classes and Objects')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={8} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Student</span> trong file{' '}
                            <span className={styles.highlight}>Student.java</span> với thông tin giống như sau:
                        </p>
                        <img className={styles.image2} src={img1}></img>
                        <p>
                            Giải thích: hình trên là mô tả của lớp Student với các thuộc tính và phương thức giống như
                            sau:
                        </p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>name</span> là thuộc tính kiểu{' '}
                                <span className={styles.highlight}>String</span> với phạm vi truy cập{' '}
                                <span className={styles.highlight}>private</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>age</span> là thuộc tính kiểu{' '}
                                <span className={styles.highlight}>int</span> với phạm vi truy cập{' '}
                                <span className={styles.highlight}>private</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>Student()</span> là phương thức khởi tạo không tham
                                số có phạm vi truy cập là <span className={styles.highlight}>public</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>getInformation()</span> và{' '}
                                <span className={styles.highlight}>display()</span> là hai phương thức có phạm vi truy
                                cập public.
                            </li>
                        </ul>
                        <p>
                            Trong thực tế, bạn không nên viết code của hai class trong cùng 1 file giống như các bài tập
                            ở phần trước (<span className={styles.highlight}>class Student</span> và{' '}
                            <span className={styles.highlight}>class Entry</span> được viết trong cùng 1 file). Với mỗi
                            một class bạn nên tạo ra 1 file riêng cho nó. Ví dụ: file{' '}
                            <span className={styles.highlight}>Student.java</span> sẽ chứa code của lớp{' '}
                            <span className={styles.highlight}>Student</span>, file{' '}
                            <span className={styles.highlight}>Entry.java</span> sẽ chứa code của lớp{' '}
                            <span className={styles.highlight}>Entry</span>, ...
                        </p>
                        <p>
                            Quay lại phần bài tập, cửa sổ code trong bài này chính là file{' '}
                            <span className={styles.highlight}>Student.java</span>, trong file này bạn cần tạo ra lớp{' '}
                            <span className={styles.highlight}>Student</span> với đầy đủ các thuộc tính và phương thức
                            giống như đã mô tả (bạn chỉ cần khai báo các thuộc tính và phương thức, không cần viết code
                            bên trong phương thức).
                        </p>
                        <p>Lưu ý: khi nộp bài lên hệ thống, bạn không cần khai báo package.</p>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết :</h3>
                        <p>
                            Hình minh họa về lớp <span className={styles.highlight}>Student</span> bên trên chính là một
                            sơ đồ lớp. Ở các bài trước bạn đã được làm quen với sơ đồ này nhưng ở bài này bạn sẽ được
                            hiểu sâu hơn về nó.
                        </p>
                        <h4>Sơ đồ lớp</h4>
                        <p>
                            Như bạn đã biết, lập trình hướng đối tượng là phương pháp giải quyết các bài toán lập trình
                            thông qua các đối tượng và mối quan hệ giữa chúng, một chương trình thực tế sẽ có rất nhiều
                            các lớp và đối tượng. Sơ đồ lớp chính là sơ đồ mà nhìn vào đó bạn thấy được mô tả của các
                            lớp, mối quan hệ giữa các đối tượng trong hệ thống (mối quan hệ giữa các đối tượng bạn sẽ
                            được học trong các bài tiếp theo).
                        </p>
                        <p>
                            Một ký hiệu lớp sẽ có 3 phần là Class name (tên lớp), attributes (danh sách các thuộc tính)
                            và operations (các thủ tục, để đơn giản thì bạn hãy coi thủ tục chính là phương thức). Một
                            lớp trong biểu đồ lớp sẽ được mô tả giống như sau:
                        </p>
                        <img className={styles.image2} src={img2}></img>
                        <ul>
                            Trong sơ đồ lớp, bạn có thể mô tả phạm vi truy cập của các thuộc tính, phương thức bằng cách
                            đặt các ký tự <span className={styles.highlight}>-, ~, #, +</span> trước các thuộc tính và
                            phương thức.
                            <li>
                                Ký tự <span className={styles.highlight}>'-'</span> sẽ tương ứng với phạm vi truy cập{' '}
                                <span className={styles.highlight}>private</span>.
                            </li>
                            <li>
                                Ký tự <span className={styles.highlight}>'~'</span> sẽ tương ứng với phạm vi truy cập{' '}
                                <span className={styles.highlight}>default</span>.{' '}
                            </li>
                            <li>
                                Ký tự <span className={styles.highlight}>'#'</span> sẽ tương ứng với phạm vi truy cập{' '}
                                <span className={styles.highlight}>protected</span>.
                            </li>
                            <li>
                                Ký tự <span className={styles.highlight}>'+'</span> sẽ tương ứng với phạm vi truy cập{' '}
                                <span className={styles.highlight}>public</span>.
                            </li>
                        </ul>
                        <p>
                            Ví dụ lớp <span className={styles.highlight}>Student</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img3}></img>
                        <p>
                            Sẽ được biểu mô tả bằng sơ đồ lớp giống như sau (bạn hãy để ý các ký tự{' '}
                            <span className={styles.highlight}>-, ~, #, +</span>):
                        </p>
                        <img className={styles.image2} src={img4}></img>
                        <p>
                            Lưu ý: khi một phương thức không được định nghĩa kiểu trả về và tên phương thức trùng với
                            tên lớp thì đây chính là phương thức khởi tạo. Như trong sơ đồ lớp trên thì{' '}
                            <span className={styles.highlight}>+Student()</span> chính là phương thức khởi tạo{' '}
                            <span className={styles.highlight}>public</span>.
                        </p>
                        <p>
                            Để chắc chắn rằng bạn đã hiểu về sơ đồ lớp, hãy xem ví dụ tiếp theo về lớp{' '}
                            <span className={styles.highlight}>Product</span> (lớp dùng để mô tả các đối tượng sản
                            phẩm):
                        </p>
                        <img className={styles.image} src={img5}></img>
                        <p>Lớp này sẽ được mô tả bằng sơ đồ lớp giống như sau:</p>
                        <img className={styles.image2} src={img6}></img>
                        <p>
                            Đọc tới đây bạn đã hiểu được cách mô tả các lớp bằng ký hiệu lớp, hãy quay lại phần bài tập
                            và làm thử.
                        </p>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn:</h3>
                        <p>Code mẫu:</p>
                        <img className={styles.image} src={img7}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson8;
