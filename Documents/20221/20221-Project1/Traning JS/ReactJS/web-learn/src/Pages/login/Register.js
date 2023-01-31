import clsx from 'clsx';
import { useState } from 'react';
import styles from './login.module.scss';
function Register() {
    const [dataForm, setDataForm] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [mes, setMes] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

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
    const confirmPassword = (value, password) => {
        return value === password ? undefined : 'Nhập lại mật khẩu không chính xác';
    };
    const isValid = (message) => {
        if (message.fullname) {
            return false;
        }
        if (message.email) {
            return false;
        }
        if (message.password) {
            return false;
        }
        if (message.confirmPassword) {
            return false;
        }
        return true;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid(mes)) {
            console.log(dataForm);
        } else {
            console.log('fail');
        }
    };
    return (
        <div className={styles.signIn}>
            <form id={styles.formSI}>
                <header className={styles.formHeader}>
                    <h3>Đăng ký tài khoản</h3>
                </header>
                <div className={styles.formGroup}>
                    <label htmlFor="fullname" className={styles.formLabel}>
                        Họ và tên :
                    </label>
                    <input
                        value={dataForm.fullname}
                        name="fullname"
                        type="text"
                        placeholder="Chu Thiện Long"
                        className={styles.fullname}
                        onChange={(e) =>
                            setDataForm({
                                ...dataForm,
                                fullname: e.target.value,
                            })
                        }
                        onFocus={() =>
                            setMes({
                                ...mes,
                                fullname: undefined,
                            })
                        }
                        onBlur={() =>
                            setMes({
                                ...mes,
                                fullname: isRequire(dataForm.fullname),
                            })
                        }
                    ></input>
                    <span className={styles.formMessage}>{mes.fullname}</span>
                </div>
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
                        type="text"
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
                <div className={styles.formGroup}>
                    <label htmlFor="repassword" className={styles.formLabel}>
                        Nhập lại mật khẩu :
                    </label>
                    <input
                        name="repassword"
                        type="text"
                        placeholder="********"
                        className={styles.repassword}
                        onChange={(e) =>
                            setDataForm({
                                ...dataForm,
                                confirmPassword: e.target.value,
                            })
                        }
                        onFocus={() =>
                            setMes({
                                ...mes,
                                confirmPassword: undefined,
                            })
                        }
                        onBlur={() =>
                            setMes({
                                ...mes,
                                confirmPassword:
                                    isRequire(dataForm.confirmPassword) ||
                                    confirmPassword(dataForm.confirmPassword, dataForm.password),
                            })
                        }
                    ></input>
                    <span className={styles.formMessage}>{mes.confirmPassword}</span>
                </div>
                <button className={clsx(styles.btn, styles.btnSI)} onClick={(e) => handleSubmit(e)}>
                    Đăng Ký
                </button>
            </form>
        </div>
    );
}

export default Register;
