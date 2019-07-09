import { store } from "./store";
import { changeColor, loadColor } from "./actions";

document.getElementById('changerBtn').addEventListener('click', () => {
    store.dispatch(loadColor())
});

const render = () => {
    const { color } = store.getState();
    document.getElementById('box').style.backgroundColor = color;
};

render();

store.subscribe(render);