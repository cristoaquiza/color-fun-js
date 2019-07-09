import { CHANGE_COLOR } from "./actions";

const defaultState = { color: 'red' };

export const colorReducer = (state = defaultState, action) => {
    if (action.type === CHANGE_COLOR) {
        return { ...state, ...{ color: action.color } };
    } else {
        return state;
    }
}