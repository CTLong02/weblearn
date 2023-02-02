import { LOG_IN, LOG_OUT } from './constant';
import storage from './storage';
const initState = {
    account: storage.get(),
};
const reducer = (state, action) => {
    switch (action.type) {
        case LOG_IN:
            const newState = { ...state, account: action.payload };
            storage.set(newState.account);
            return newState;
        case LOG_OUT:
            const newStateLogOut = { ...state, account: undefined };
            storage.set(newStateLogOut);
            return newStateLogOut;
        default:
    }
};
export { initState };
export default reducer;
