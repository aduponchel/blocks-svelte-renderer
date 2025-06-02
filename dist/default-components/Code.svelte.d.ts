export default Code;
type Code = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const Code: import("svelte").Component<{
    plainText: any;
}, {}, "">;
type $$ComponentProps = {
    plainText: any;
};
