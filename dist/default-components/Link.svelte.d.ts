export default Link;
type Link = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Link: import("svelte").Component<{
    url: any;
    children: any;
}, {}, "">;
type $$ComponentProps = {
    url: any;
    children: any;
};
