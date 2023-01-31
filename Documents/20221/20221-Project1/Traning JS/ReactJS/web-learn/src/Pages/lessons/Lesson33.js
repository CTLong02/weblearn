import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson33/img1.png';
import img2 from '~/image/lesson33/img2.png';
import img3 from '~/image/lesson33/img3.png';
import img4 from '~/image/lesson33/img4.png';

function Lesson33() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Inheritance')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={33} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết kết quả khi chạy chương trình sau:</p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>
                            Để ghi đè phương thức của lớp cha thì phương thức của lớp con phải có phạm vi truy cập bằng
                            hoặc rộng hơn phạm vị truy cập của phương thức ở lớp cha. Trong bài này phạm vi truy cập của
                            phương thức ở lớp con là <span className={styles.highlight}>default</span> và của lớp cha là{' '}
                            <span className={styles.highlight}>protected</span> mà{' '}
                            <span className={styles.highlight}>default</span> có phạm vi truy cập hẹp hơn{' '}
                            <span className={styles.highlight}>protected</span> nên chương trình sẽ không biên dịch
                            được. Xem lại bảng mô tả các phạm vi truy cập:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Từ bảng này có thể sắp xếp các phạm vi truy cập theo thứ tự sau:{' '}
                            <span className={styles.highlight}>{'private -> default -> protected -> public'}</span>
                        </p>
                        <p>
                            Vậy để chương trình trên hiển thị ra màn hình{' '}
                            <span className={styles.highlight}>"Hello from SubClass"</span> thì bạn cần sửa phạm vi truy
                            cập của phương thức <span className={styles.highlight}>display()</span> ở lớp{' '}
                            <span className={styles.highlight}>SubClass</span> từ{' '}
                            <span className={styles.highlight}>default</span> sang{' '}
                            <span className={styles.highlight}>protected</span> hoặc{' '}
                            <span className={styles.highlight}>public</span> giống như chương trình sau:
                        </p>
                        <img className={styles.image} src={img3}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img4}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson33;
