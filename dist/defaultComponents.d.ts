declare const _default: {
    blocks: {
        paragraph: import("svelte").Component<{
            children: any;
        }, {}, "">;
        quote: import("svelte").Component<{
            children: any;
        }, {}, "">;
        code: import("svelte").Component<{
            plainText: any;
        }, {}, "">;
        heading: import("svelte").Component<{
            level: any;
            children: any;
        }, {}, "">;
        link: import("svelte").Component<{
            url: any;
            children: any;
        }, {}, "">;
        list: import("svelte").Component<{
            format: any;
            children: any;
        }, {}, "">;
        "list-item": import("svelte").Component<{
            children: any;
        }, {}, "">;
        image: import("svelte").Component<{
            image: any;
        }, {}, "">;
    };
    modifiers: {
        bold: string;
        italic: string;
        underline: string;
        strikethrough: string;
        code: string;
    };
};
export default _default;
