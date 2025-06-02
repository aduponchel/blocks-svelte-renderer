export default Paragraph;
type Paragraph = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Paragraph: import("svelte").Component<{
    children: any;
}, {}, "">;
type $$ComponentProps = {
    children: any;
};
