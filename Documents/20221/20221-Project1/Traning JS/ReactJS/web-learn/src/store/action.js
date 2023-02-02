import { LOG_IN, LOG_OUT } from './constant';
export const login = (payload) => {
    return {
        payload,
        type: LOG_IN,
    };
};

export const logout = () => {
    return {
        type: LOG_OUT,
    };
};
