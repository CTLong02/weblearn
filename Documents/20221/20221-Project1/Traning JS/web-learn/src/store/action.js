import { LOG_IN, LOG_OUT } from './constant';
export const login = (payload) => {
    return {
        payload,
        type: LOG_IN,
    };
};

export const logout = () => {
    return {
        payload: {
            fullname: '',
            email: '',
            password: '',
        },
        type: LOG_OUT,
    };
};
