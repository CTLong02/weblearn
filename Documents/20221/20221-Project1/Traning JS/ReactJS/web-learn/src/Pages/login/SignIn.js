import clsx from 'clsx';
import { useState } from 'react';
import styles from './login.module.scss';
function SignIn({ setIsLogin, setIsSignIn, setAccount }) {
    const [dataForm, setDataForm] = useState({
        email: '',
        password: '',
    });
    const [mes, setMes] = useState({
        email: '',
        password: '',
        form: '',
    });
    const [method, setMethod] = useState('');
    const [action, setAction] = useState('');
    const isRequire = (value) => {
        return value ? undefined : 'Vui Lòng nhâp trường này';
    };

    const isEmail = (value) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return value.match(regex) ? undefined : 'Vui lòng nhập đúng Email';
    };
    const isPassword = (value, min) => {
        return value.length >= min ? undefined : `Mật khẩu phải chứa ít nhất ${min} kí tự`;
    };
    const isValid = (message) => {
        if (message.email) {
            return false;
        }
        if (message.password) {
            return false;
        }
        return true;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid(mes)) {
            let account = {};
            fetch(`/api/user/${dataForm.email}`)
                .then((res) => res.json())
                .then((data) => {
                    if (Array.isArray(data)) {
                        account = data.find((user) => {
                            return user.email === dataForm.email;
                        });
                    } else {
                        if (data.email === dataForm.email) {
                            account = data;
                        }
                    }
                    if (account) {
                        if (account.password === dataForm.password) {
                            setIsLogin(true);
                            setIsSignIn(false);
                            setAccount({ ...account });
                        } else {
                            setMes({
                                ...mes,
                                form: 'Thông tin tài khoản mật khẩu không chính xác',
                            });
                        }
                    } else {
                        setMes({
                            ...mes,
                            form: 'Tài khoản không tồn tại vui lòng tạo tài khỏan',
                        });
                    }
                });
        } else {
            console.log('fail');
        }
    };
    return (
        <div className={styles.modal}>
            <div className={styles.signIn}>
                <form id={styles.formSI}>
                    <header className={styles.formHeader}>
                        <h3>Đăng nhập tài khoản</h3>
                    </header>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                            Email :
                        </label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Chuthienlong@gmail.com"
                            className={styles.email}
                            onChange={(e) =>
                                setDataForm({
                                    ...dataForm,
                                    email: e.target.value,
                                })
                            }
                            onFocus={() =>
                                setMes({
                                    ...mes,
                                    email: undefined,
                                    form: undefined,
                                })
                            }
                            onBlur={() =>
                                setMes({
                                    ...mes,
                                    email: isRequire(dataForm.email) || isEmail(dataForm.email),
                                })
                            }
                        ></input>
                        <span className={styles.formMessage}>{mes.email}</span>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>
                            Mật khẩu :
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="********"
                            className={styles.password}
                            onChange={(e) =>
                                setDataForm({
                                    ...dataForm,
                                    password: e.target.value,
                                })
                            }
                            onFocus={() =>
                                setMes({
                                    ...mes,
                                    password: undefined,
                                    form: undefined,
                                })
                            }
                            onBlur={() =>
                                setMes({
                                    ...mes,
                                    password: isRequire(dataForm.password) || isPassword(dataForm.password, 6),
                                })
                            }
                        ></input>
                        <span className={styles.formMessage}>{mes.password}</span>
                    </div>
                    <button className={clsx(styles.btn, styles.btnSI)} onClick={(e) => handleSubmit(e)}>
                        Đăng Nhập
                    </button>
                    <span className={styles.formMessage}>{mes.form}</span>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
