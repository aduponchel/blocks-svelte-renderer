export default Image;
type Image = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Image: import("svelte").Component<{
    image: any;
}, {}, "">;
type $$ComponentProps = {
    image: any;
};
