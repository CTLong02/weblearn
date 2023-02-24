import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson7/img1.png';
import img2 from '~/image/lesson7/img2.png';
import img3 from '~/image/lesson7/img3.png';
import img4 from '~/image/lesson7/img4.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';

function Lesson7() {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(window.innerHeight - 48);
    const handleResize = () => {
        setHeight(window.innerHeight - 48);
    };
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        fetch('/api/Classes and Objects')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={7} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Hãy cho biết kết quả khi chạy chương trình sau:</p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>
                            Nếu một lớp đã được khai báo constructor thì chương trình sẽ không tự sinh ra constructor
                            mặc định nữa (constructor mặc định là constructor không có tham số).
                        </p>
                        <p>
                            Để có thể thấy lớp <span className={styles.highlight}>Customer</span> đã được khai báo
                            constructor và đây lại là constructor có tham số nên bên trong phương thức{' '}
                            <span className={styles.highlight}>main()</span> bạn không thể khởi tạo được đối tượng thuộc
                            lớp <span className={styles.highlight}>customer</span> (do trong phương thức{' '}
                            <span className={styles.highlight}>main()</span> bạn gọi tới constructor không tham số nhưng
                            bên trong lớp <span className={styles.highlight}>Customer</span> lại không có consturctor
                            này ). Với đoạn code trên chương trình sẽ báo lỗi như sau:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Chương trình sẽ báo lỗi do không tìm thấy constructor không có tham số trong lớp{' '}
                            <span className={styles.highlight}>Customer</span>.
                        </p>
                        <p>
                            Để chương trình trên hiển thị được ra màn hình dòng chữ{' '}
                            <span className={styles.highlight}>"Welcome to Codelearn!"</span> bạn phải thêm vào
                            constructor không tham số như sau
                        </p>
                        <img className={styles.image} src={img3}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img4}></img>
                        <p>
                            Vậy đáp án của bài này là <span className={styles.highlight}>Compile Time Error</span> (lỗi
                            biên dịch)
                        </p>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={['Compile Time Error(Lỗi biên dịch).', 'Welcome to Codelearn!']}
                        ans={1}
                        link="/learning/Classes%20and%20Objects/8"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}
export default Lesson7;
