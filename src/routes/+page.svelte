<script lang="ts">
    import BlockRenderer from "$lib/BlocksRenderer.svelte";

    const { data } = $props();
</script>

{#if data.dummydata}
    <details>
        <summary>Show dummyData</summary>
        <pre>{JSON.stringify(data.dummydata, null, 2)}</pre>
    </details>
    <BlockRenderer content={data.dummydata} />
{:else}
    Something went wrong with a showcase :(
{/if}