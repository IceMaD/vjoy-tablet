<script context="module">
    export async function preload() {
        const mapping = await this.fetch(`mapping.json`);

        return {
            mapping: await mapping.json(),
        };
    }
</script>

<script>
    import Spreaded from "../components/Spreaded.svelte";

    export let mapping;
    export let activeKey = "combat";

    $: keys = Object.keys(mapping);

    let open = (key) => () => (activeKey = key);
    let close = () => (activeKey = null);
</script>

<Spreaded direction="vertical">
    <div>
        {#each keys as key}
            {#if activeKey === key}
                <button disabled class="active">
                    {key}
                    <!-- ⮝ -->
                </button>
            {:else}
                <button on:click={open(key)}>
                    {key}
                    <!-- ⮟ -->
                </button>
            {/if}
        {/each}
    </div>

    {#if activeKey}
        <pre>
            {JSON.stringify(mapping[activeKey], null, 2)}
        </pre>
    {/if}
</Spreaded>

<style>
    pre {
        font-size: 8px;
    }

    button {
        background-color: transparent;
        border: none;
        color: inherit;
        text-transform: uppercase;
        cursor: pointer;
        padding: 0.5rem 1rem;
    }

    button.active {
        cursor: default;
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>
