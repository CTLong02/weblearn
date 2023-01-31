import { useEffect, useState } from 'react';
import styles from './lessons.module.scss';
import NavLesson from '~/components/lesson/NavLesson';
import img1 from '~/image/lesson19/img1.png';
import img2 from '~/image/lesson19/img2.png';
import img3 from '~/image/lesson19/img3.png';
import img4 from '~/image/lesson19/img4.png';
import img5 from '~/image/lesson19/img5.png';
import img6 from '~/image/lesson19/img6.png';
import img7 from '~/image/lesson19/img7.png';

function Lesson19() {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/Static variables and methods')
            .then((res) => res.json())
            .then((data) => setList([...data]));
    }, []);
    return (
        <>
            <NavLesson lesson={19} list={list} />
            <div className={styles.container}>
                <div className={styles.read}>
                    <div className={styles.task}>
                        <h3>Bài tập</h3>
                        <p>
                            Bạn hãy tạo ra lớp <span className={styles.highlight}>Student</span> với thông tin giống như
                            sau:
                        </p>
                        <img className={styles.image2} src={img1}></img>
                        <p>Giải thích:</p>
                        <ul className={styles.ulLesson}>
                            <li>
                                <span className={styles.highlight}>name</span> và{' '}
                                <span className={styles.highlight}>gender</span> là hai thuộc tính{' '}
                                <span className={styles.highlight}>private</span> của lớp{' '}
                                <span className={styles.highlight}>Student</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>Student()</span> là phương thức khởi tạo không tham
                                số dùng để khởi tạo giá trị cho{' '}
                                <span className={styles.highlight}>name = "Unknown"</span>,{' '}
                                <span className={styles.highlight}>gender = 'u'</span>
                            </li>
                            <li>
                                <span className={styles.highlight}>Student(name: String)</span> là phương thức khởi tạo
                                có tham số dùng để khởi tạo giá trị cho thuộc tính{' '}
                                <span className={styles.highlight}>name</span> và{' '}
                                <span className={styles.highlight}>gender (this.name = name; gender = 'u')</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>Student(gender: char)</span> là phương thức khởi tạo
                                có tham số dùng để khởi tạo giá trị cho thuộc tính{' '}
                                <span className={styles.highlight}>gender</span> và{' '}
                                <span className={styles.highlight}>name</span> (
                                <span className={styles.highlight}>this.gender = gender, name = "Unknown"</span>).
                            </li>
                            <li>
                                <span className={styles.highlight}>Student(name: String, gender: char)</span> là phương
                                thức khởi tạo có tham số dùng để khởi tạo giá trị cho thuộc tính{' '}
                                <span className={styles.highlight}>name</span> và{' '}
                                <span className={styles.highlight}>gender</span>.
                            </li>
                            <li>
                                <span className={styles.highlight}>display()</span> là phương thức dùng để hiển thị
                                thông tin của đối tượng ra màn hình. Nếu
                                <span className={styles.highlight}>gender = 'm'</span> thì hiển thị ra màn hình{' '}
                                <span className={styles.highlight}>"Gender: Male"</span>, nếu
                                <span className={styles.highlight}>gender = 'f'</span> thì hiển thị ra màn hình{' '}
                                <span className={styles.highlight}>"Gender: Female"</span>, nếu{' '}
                                <span className={styles.highlight}>gender = 'u'</span> thì hiển thị ra màn hình{' '}
                                <span className={styles.highlight}>"Gender: Unknown"</span>. Ví dụ:
                                <ul>
                                    <li>
                                        Nếu <span className={styles.highlight}>name = "Thu"</span>,{' '}
                                        <span className={styles.highlight}>gender = 'f'</span> thì khi gọi phương thức{' '}
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:
                                        <img className={styles.image} src={img2}></img>
                                    </li>
                                    <li>
                                        Nếu <span className={styles.highlight}>name = "Sang"</span>,{' '}
                                        <span className={styles.highlight}>gender = 'u'</span> thì khi gọi phương thức{' '}
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:
                                        <img className={styles.image} src={img3}></img>
                                    </li>
                                    <li>
                                        Nếu <span className={styles.highlight}>name = "Unknown"</span>,{' '}
                                        <span className={styles.highlight}>gender = 'u'</span> thì khi gọi phương thức{' '}
                                        <span className={styles.highlight}>display()</span> màn hình sẽ hiển thị ra:
                                        <img className={styles.image} src={img4}></img>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            Chương trình để test lớp <span className={styles.highlight}>Student:</span>
                        </p>
                        <img className={styles.image} src={img5}></img>
                        <p>Kết quả khi chạy chương trình:</p>
                        <img className={styles.image} src={img6}></img>
                    </div>
                    <div className={styles.instruction}>
                        <h3>Hướng dẫn :</h3>
                        <p>
                            Bạn cần tạo ra lớp <span className={styles.highlight}>Student</span> giống như sau:
                        </p>
                        <img className={styles.image} src={img7}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lesson19;
