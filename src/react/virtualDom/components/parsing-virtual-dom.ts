interface VirtualDOMNode {
    type: string;
    props: {
        [key: string]: any;
        children?: VirtualDOMNode | VirtualDOMNode[];
    };
}
export function ParsingVirtualDom(virtualDOM: VirtualDOMNode): HTMLElement | Text {
    if (typeof virtualDOM === 'string' || typeof virtualDOM === 'number') {
        return document.createTextNode(`${virtualDOM}`);
    }

    const element = document.createElement(virtualDOM.type);

    Object.entries(virtualDOM.props || {}).forEach(([name, value]) => {
        if (name === 'children') {
            if (Array.isArray(value)) {
                value.forEach(child => element.appendChild(ParsingVirtualDom(child)));
            } else {
                element.appendChild(ParsingVirtualDom(value));
            }
        } else {
            element.setAttribute(name, value);
        }
    });

    return element;
}