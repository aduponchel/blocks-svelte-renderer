export default Heading;
type Heading = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Heading: import("svelte").Component<{
    level: any;
    children: any;
}, {}, "">;
type $$ComponentProps = {
    level: any;
    children: any;
};
