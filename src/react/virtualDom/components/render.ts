import {ParsingVirtualDom} from "./parsing-virtual-dom";

export function Render(virtualDOM: any, container: HTMLElement) {
    container.appendChild(ParsingVirtualDom(virtualDOM));
}