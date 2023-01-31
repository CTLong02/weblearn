import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson29/img1.png';
import img2 from '~/image/lesson29/img2.png';
import img3 from '~/image/lesson29/img3.png';
import img4 from '~/image/lesson29/img4.png';
import img5 from '~/image/lesson29/img5.png';
import img6 from '~/image/lesson29/img6.png';

function Lesson29() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={29} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết lợi ích của tính kế thừa là gì (chọn nhiều hơn một đáp án)?</p>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>
                            Như bạn đã được nghe qua ở bài trước, trong lập trình hướng đối tượng có 4 tính chất là tính
                            đóng gói (<em>Encapsulation</em>), tính kế thừa (<em>Inheritance</em>), tính đa hình (
                            <em>Polymorphism</em>) và tính trừu tượng (<em>Abstraction</em>).Trong chương này bạn sẽ học
                            và hiểu được tính chất thứ 2 trong 4 tính chất trên, đó là tính kế thừa.
                        </p>
                        <p>Trước tiên bạn hãy xem một ví dụ để thấy được sự cần thiết của tính kế thừa:</p>
                        <p>
                            Giả sử bạn cần viết một chương trình lưu thông tin về các học sinh và giáo viên. Với học
                            sinh thì bạn cần lưu các thông tin về tên, tuổi, địa chỉ, gpa (điểm trung bình) và với giáo
                            viên thì bạn cần lưu thông tin về tên, tuổi, địa chỉ và tiền lương. Qua một hồi phân tích
                            bạn ra được biểu đồ lớp như sau (kéo cửa sổ bài tập to ra để nhìn rõ hơn):
                        </p>
                        <img className={styles.image} src={img1}></img>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Chắc bạn cũng đã nhận thấy được vấn đề khi nhìn vào sơ đồ này, đó là lớp{' '}
                            <span className={styles.highlight}>Student</span> và lớp{' '}
                            <span className={styles.highlight}>Teacher</span> có chung quá nhiều thuộc tính và phương
                            thức. Vậy nếu cứ làm theo sơ đồ lớp này thì code sẽ bị trùng lặp rất nhiều và vi phạm nguyên
                            tắc <strong>DRY (Don't Repeat Yourself - đừng bao giờ lặp lại code)</strong>. Kế thừa trong
                            OOP sẽ giúp bạn giải quyết vấn đề này.
                        </p>
                        <h4>Tính kế thừa trong lập trình hướng đối tượng</h4>
                        <p>
                            Kế thừa trong lập trình hướng đối tượng chính là thừa hưởng lại những thuộc tính và phương
                            thức của một lớp. Có nghĩa là nếu lớp A kế thừa lớp B thì lớp A sẽ có những thuộc tính và
                            phương thức của lớp B. Do đó, từ sơ đồ trên bạn có thể tách các thuộc tính và phương thức
                            trùng nhau ra một lớp mới tên là <span className={styles.highlight}>Person</span> và cho lớp{' '}
                            <span className={styles.highlight}>Student</span> và{' '}
                            <span className={styles.highlight}>Teacher</span> kế thừa lớp này giống như sau:
                        </p>
                        <img className={styles.image} src={img3}></img>
                        <p>
                            Có thể thấy với sơ đồ này lớp <span className={styles.highlight}>Student</span> và{' '}
                            <span className={styles.highlight}>Teacher</span> sẽ thừa hưởng lại các thuộc tính chung từ
                            lớp <span className={styles.highlight}>Person</span> và code sẽ không còn bị trùng lặp. Ở
                            trong sơ đồ trên thì mũi tên với <strong>hình tam giác rỗng ruột</strong> chính là ký hiệu
                            thể hiện quan hệ kế thừa.
                        </p>
                        <p>
                            Lớp được thừa hưởng những thuộc tính và phương thức từ lớp khác được gọi là dẫn xuất
                            (Derived Class) hay lớp Con (Subclass) và lớp bị lớp khác kế thừa được gọi là lớp cơ sở
                            (Base Class) hoặc lớp cha (Parent Class). Như ở ví dụ trên thì lớp{' '}
                            <span className={styles.highlight}>Person</span> là lớp cha (lớp cơ sở) và{' '}
                            <span className={styles.highlight}>Student</span>,{' '}
                            <span className={styles.highlight}>Teacher</span> là hai lớp con (lớp dẫn xuất).
                        </p>
                        <p>
                            Trong ngôn ngữ lập trình Java, để kế thừa một lớp bạn dùng từ khóa{' '}
                            <span className={styles.highlight}>extends</span>, ví dụ:
                        </p>
                        <div className={styles.stackImg}>
                            <img className={styles.image} src={img4}></img>
                            <img className={styles.image} src={img5}></img>
                        </div>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img6}></img>
                        <p>
                            Có thể thấy rằng lớp <span className={styles.highlight}>Student</span> đã được thừa hưởng
                            những phương thức của lớp <span className={styles.highlight}>Person</span>.
                        </p>
                        <p>
                            Lưu ý: các thuộc tính và phương thức có phạm vi truy cập{' '}
                            <span className={styles.highlight}>private</span> sẽ không thể được truy cập từ lớp con khi
                            làm thực tế bạn nên tách lớp <span className={styles.highlight}>Student</span> và{' '}
                            <span className={styles.highlight}>Person</span> ra làm 2 file <strong>.java</strong> riêng.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson29;
