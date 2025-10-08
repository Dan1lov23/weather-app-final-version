import { createStore } from 'redux';

const defaultState = {
    isTheme: "light",
    city: "",
};

const reducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                isTheme: action.payload,
            }
        case "SET_CITY":
            return {
                ...state,
                city: action.payload,
            }
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
