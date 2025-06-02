export default ListItem;
type ListItem = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const ListItem: import("svelte").Component<{
    children: any;
}, {}, "">;
type $$ComponentProps = {
    children: any;
};
