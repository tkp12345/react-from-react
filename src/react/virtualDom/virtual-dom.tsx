import {CreateElement} from "./components/create-element";
import {Render} from "./components/render";

const virtualDOM =  CreateElement({
    type: 'div',
    props: {
        id: 'container'
    },
    children: [
        CreateElement({ type: 'h1', props: {}, children: 'Hello, World!' }),
        CreateElement({ type: 'p', props: {}, children: 'This is a virtual DOM example.' })
    ]
});

const root = document.getElementById('root');
if (root) {
    Render(virtualDOM, root);
}