import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson16/img1.png';
import img2 from '~/image/lesson16/img2.png';
import img3 from '~/image/lesson16/img3.png';
import img4 from '~/image/lesson16/img4.png';
import img5 from '~/image/lesson16/img5.png';
import img6 from '~/image/lesson16/img6.png';
import img7 from '~/image/lesson16/img7.png';
import img8 from '~/image/lesson16/img8.png';
import img9 from '~/image/lesson16/img9.png';
import img10 from '~/image/lesson16/img10.png';
import img11 from '~/image/lesson16/img11.png';
import img12 from '~/image/lesson16/img12.png';
import img13 from '~/image/lesson16/img13.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';

function Lesson16() {
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(window.innerHeight - 48);
    const handleResize = () => {
        setHeight(window.innerHeight - 48);
    };
    window.addEventListener('resize', handleResize);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={16} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Bạn hãy cho biết kết quả của chương trình sau:</p>
                        <img className={styles.image} src={img1}></img>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thuyết:</h3>
                        <p>Bài này sẽ giúp bạn hiểu về khái niệm nạp chồng phương thức trong Java.</p>
                        <p>
                            Trước hết bạn hãy xem lại hàm <span className={styles.highlight}>abs</span> của lớp{' '}
                            <span className={styles.highlight}>Math</span> trong bài trước:
                        </p>
                        <img className={styles.image} src={img2}></img>
                        <p>
                            Vấn đề gặp phải với hàm này là tham số của hàm là một số nguyên, vậy nếu bạn muốn dùng hàm{' '}
                            <span className={styles.highlight}>abs</span> để tính giá trị tuyệt đối của một số thực hay
                            một số nguyên kiểu <span className={styles.highlight}>long</span> thì sao? Có thể bạn nghĩ
                            ngay tới cách tạo thêm 2 hàm với tên gọi khác nhau như sau:
                        </p>
                        <img className={styles.image} src={img3}></img>
                        <p>
                            Vấn đề với cách làm này là bạn cần phải tạo ra nhiều tên hàm cho các tham số khác nhau, tại
                            sao đều là trị tuyệt đối mà không thể dùng chung tên hàm là{' '}
                            <span className={styles.highlight}>abs()</span>
                        </p>
                        <p>
                            Trước hết bạn hãy thử gọi hàm <span className={styles.highlight}>abs</span> của lớp{' '}
                            <span className={styles.highlight}>Math</span> có sẵn trong Java với các tham số kiểu{' '}
                            <span className={styles.highlight}>int, double, long</span>:
                        </p>
                        <img className={styles.image} src={img4}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img5}></img>
                        <p>
                            Có thể thấy phương thức <span className={styles.highlight}>abs()</span> của lớp{' '}
                            <span className={styles.highlight}>Math</span> có sẵn dùng được cho cả 3 kiểu dữ liệu là{' '}
                            <span className={styles.highlight}>int, float, double</span>. Kỹ thuật để lớp{' '}
                            <span className={styles.highlight}>Math</span> làm được việc này gọi là nạp chồng phương
                            thức.
                        </p>
                        <h4>Nạp chồng phương thức</h4>
                        <p>
                            Nếu một lớp có nhiều phương thức cùng tên nhưng khác nhau về kiểu dữ liệu hoặc số các tham
                            số, thì đó là nạp chồng phương thức.
                        </p>
                        <p>
                            Ví dụ bạn có thể tạo ra 2 hàm <span className={styles.highlight}>add</span> để tính tổng số
                            nguyên và số thực như sau:
                        </p>
                        <img className={styles.image} src={img6}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img7}></img>
                        <p>
                            Có thể thấy bạn không cần tạo ra 2 hàm với tên khác nhau để tính tổng 2 số. Đây cũng là cách
                            mà lớp <span className={styles.highlight}>Math</span> tạo ra phương thức{' '}
                            <span className={styles.highlight}>abs()</span>. Source code của phương thức{' '}
                            <span className={styles.highlight}>abs()</span> trong lớp{' '}
                            <span className={styles.highlight}>Math</span> sẽ giống như sau:
                        </p>
                        <img className={styles.image} src={img8}></img>
                        <p>
                            Ngoài ra bạn còn có thể nạp chồng phương thức bằng cách thay đổi số tham số của phương thức:
                        </p>
                        <img className={styles.image} src={img9}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img10}></img>
                        <p>Ngoài ra, các phương thức được nạp chồng còn có thể gọi tới nhau:</p>
                        <img className={styles.image} src={img11}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img12}></img>
                        <p>
                            Lưu ý: trong các ví dụ của bài này tôi đều dùng phương thức{' '}
                            <span className={styles.highlight}>static</span> nhưng bạn hoàn toàn có thể thực hiện nạp
                            chồng phương thức đối với các phương thức{' '}
                            <span className={styles.highlight}>non-static</span>.
                        </p>
                        <h4>Lợi ích của nạp chồng phương thức</h4>
                        <p>
                            Nạp chồng phương thức giúp bạn tránh được việc tạo ra các phương thức với tên gọi khác nhau,
                            giúp cho code trở nên gọn gàng, dễ đọc hơn. Bạn hãy xem ví dụ về hàm{' '}
                            <span className={styles.highlight}>System.out.println()</span> mà bạn vẫn hay dùng để thấy
                            được lợi ích của nạp chồng phương thức:
                        </p>
                        <img className={styles.image} src={img13}></img>
                        <p>
                            Có thể thấy nếu không có nạp chồng phương thức, thì bạn sẽ cần tới 10 cái tên cho hàm{' '}
                            <span className={styles.highlight}>println()</span>,{' '}
                            <span className={styles.highlight}>printlnInt()</span>,{' '}
                            <span className={styles.highlight}>printlnString()</span>,...
                        </p>
                        <p>
                            Đọc tới đây bạn đã hiểu về kỹ thuật nạp chồng phương thức trong Java, hãy quay lại phần bài
                            tập và làm thử.
                        </p>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={['Lỗi biên dịch', '5']}
                        ans={2}
                        link="http://localhost:3005/learning/Static%20variables%20and%20methods/17"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}
export default Lesson16;
