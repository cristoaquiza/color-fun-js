export const CHANGE_COLOR = 'CHANGE_COLOR';

export const changeColor = (color) => {
    return {
        type: CHANGE_COLOR,
        color
    }
};

export const loadColor = () => {
    return (dispatch) => {
        fetch('http://www.colr.org/json/color/random')
        .then((response) => response.json())
        .then((data) => {
            dispatch(changeColor(`#${data['new_color']}`))
        })
        .catch((error) => { console.error(error) });
    }
}