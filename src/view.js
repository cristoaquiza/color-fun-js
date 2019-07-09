import { store } from "./store";
import { changeColorAction } from "./actions";

document.getElementById('changerBtn').addEventListener('click', () => {
    store.dispatch(changeColorAction('white'))
});

const render = () => {
    const { color } = store.getState();
    document.getElementById('box').style.backgroundColor = color;
};

render();

store.subscribe(render);