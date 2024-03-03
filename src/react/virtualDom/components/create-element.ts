type Element = string | Function;

interface ElementProps {
    type: Element,
    props: { [key: string]: any } | null,
    children?: (string | number | boolean | object | null)[] | string | number | boolean | object | null;
}

export function CreateElement({
        type,
        props,
        children
    }: ElementProps) {
    return {
        type,
        props: {
            ...props,
            children: children || []
        }
    };
}