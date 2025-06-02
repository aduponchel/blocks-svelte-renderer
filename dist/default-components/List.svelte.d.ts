export default List;
type List = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const List: import("svelte").Component<{
    format: any;
    children: any;
}, {}, "">;
type $$ComponentProps = {
    format: any;
    children: any;
};
