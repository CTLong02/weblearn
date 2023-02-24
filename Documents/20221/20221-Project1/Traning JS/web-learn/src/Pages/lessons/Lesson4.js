import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson4/img1.png';
import img2 from '~/image/lesson4/img2.png';
import img3 from '~/image/lesson4/img3.png';
import img4 from '~/image/lesson4/img4.png';
import img5 from '~/image/lesson4/img5.png';
import ChoiceAnswer from '~/components/choiceAnswer/ChoiceAnswer';

function Lesson4() {
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
            <NavLesson lesson={4} list={list} />
            <div className={styles.container}>
                <div className={styles.read} style={{ height: `${height}px` }}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>Hãy cho biết kết quả khi chạy chương trình sau</p>
                        <>
                            <img className={styles.image} src={img1} />
                        </>
                    </div>
                    <div className={styles.theory}>
                        <h3>Lý thyết</h3>
                        <p>
                            Nhìn vào đoạn code khai báo phương thức display() bạn sẽ thấy có từ khóa{' '}
                            <span className={styles.highlight}>public</span>, vậy sự khác nhau giữa public và private là
                            gì ?Bài này sẽ giúp bạn hiểu điều đó
                        </p>
                        <h4>Phạm vi truy cập</h4>
                        <p>
                            Phạm vi truy cập là khái niệm để xác định xem một biến hay một phương thức có được truy xuất
                            từ bên ngoài hay không. Trong java có 4 loại phạm vi truy cập là
                            <span className={styles.highlight}> private, default, protected, public</span>. Xem bảng
                            minh họa dưới đây để có cái nhìn tổng quan về phạm vi truy cập
                        </p>
                        <>
                            <img className={styles.image} src={img2} />
                        </>
                        <h4>Phạm vi truy cập private</h4>
                        <p>
                            Đây là phạm vi truy cập hạn chế nhất, tất cả các thuộc tính và phương thức sẽ chỉ được xuất
                            từ bên trong lớp đó. Ví dụ nếu bạn truy xuất một thuộc tính hoặc phương thức được khai báo
                            với từ khóa <span className={styles.highlight}> private</span> từ một lớp khác thì chương
                            trình sẽ báo lỗi giống như sau
                        </p>
                        <>
                            <img className={styles.image} src={img3} />
                        </>
                        <p>
                            Để chương trình trên có thể chạy được cần phải thay đổi phạm vi truy cập của thuộc tính name
                            trong lớp <span className={styles.highlight}> Student</span> từ{' '}
                            <span className={styles.highlight}>private</span> sang{' '}
                            <span className={styles.highlight}> default,protected</span> hoặc{' '}
                            <span className={styles.highlight}>public</span>
                        </p>
                        <h4>Phạm vi truy cập mặc định (default)</h4>
                        <p>
                            Khi khai báo một thuộc tính hoặc một phương thức mà không khai báo phạm vi truy cập thì
                            chương trình sẽ hiểu là bạn đang khai báo với phạm vi truy cập mặc định. Các biến và phương
                            thức truy cập mặc định có thể được truy xuất trong cùng một package. Ví dụ trong cùng
                            package OOP bạn có thể truy xuất tới thuộc tính của lớp{' '}
                            <span className={styles.highlight}> Student</span> từ lớp{' '}
                            <span className={styles.highlight}> Entry</span> giống như chương trình sau:
                        </p>
                        <>
                            <img className={styles.image} src={img4} />
                        </>
                        <p>Nhưng nếu 2 lớp này khác package thì chương trình sẽ báo lỗi:</p>
                        <>
                            <img className={styles.image} src={img5} />
                        </>
                        <p>
                            Trong trường hợp trên để chương trình chạy thì bạn phải thay phạm vi truy cập từ{' '}
                            <span className={styles.highlight}> default</span> thành{' '}
                            <span className={styles.highlight}> public</span>
                        </p>
                        <p>
                            Lưu ý: Khi muốn sử dụng một lớp từ package khác thì cần
                            <span className={styles.highlight}>import</span> lớp bằng câu lệnh{' '}
                            <span className={styles.highlight}>import {'<tên_package>.<tên_lớp>;'}</span> giống như trên
                            ví dụ trên
                        </p>
                        <h4>Phạm vi truy cập protected</h4>
                        <p>
                            Đây là phạm vi truy cập tương tự với <span className={styles.highlight}> default</span>{' '}
                            nhưng ít hạn chế ở chỗ các thuộc tính và phương thức có phạm vi truy cập này có thể truy
                            xuất từ một lớp con của package khác (bạn sẽ hiểu rõ ở tính kế thừa){' '}
                        </p>
                        <h4>Phạm vi truy cập public</h4>
                        <p>
                            Đây là phạm vi truy cập rộng nhất , các thuộc tính và phương thức có phạm vi truy cập này có
                            thể truy xuất từ bất cứ đâu (kể cả từ package khác).{' '}
                        </p>
                        <p>Đọc tới đây bạn đã hiểu về các phạm vi truy cập trong java và đã có thể làm được bài này</p>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn : </h3>
                        <p>
                            Phương thức <span className={styles.highlight}> display()</span> trong lớp{' '}
                            <span className={styles.highlight}> Student</span> được khai báo với từ khóa{' '}
                            <span className={styles.highlight}>private</span> nên không thể truy xuất từ phương thức{' '}
                            <span className={styles.highlight}> main()</span> của lớp{' '}
                            <span className={styles.highlight}> Entry</span>.Do đó đáp án là{' '}
                            <span className={styles.highlight}>"Compile Time error "</span>(Lỗi biên dịch)
                        </p>
                    </div>
                </div>
                <div className={styles.practice} style={{ height: `${height}px` }}>
                    <ChoiceAnswer
                        contentAnswers={['Compile Time Error (Lỗi biên dịch)', 'Name : Codelearn']}
                        ans={1}
                        link="/learning/Classes%20and%20Objects/5"
                    ></ChoiceAnswer>
                </div>
            </div>
        </>
    );
}

export default Lesson4;
