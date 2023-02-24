const ACCOUNT_STORAGE_Key = 'account';

export default {
    get() {
        return JSON.parse(localStorage.getItem(ACCOUNT_STORAGE_Key));
    },
    set(account) {
        return localStorage.setItem(ACCOUNT_STORAGE_Key, JSON.stringify(account));
    },
};
