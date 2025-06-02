import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch(`http://localhost:1337/api/blocks-svelte-renderer`);
    const {data} = await res.json();
    return { dummydata : data.content };
};