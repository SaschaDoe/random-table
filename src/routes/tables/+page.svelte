<script>
    import SvelteMarkdown from 'svelte-markdown'
    import source from './plot/plot_table.server.md?raw';

</script>

<h1>Character tables</h1>
<SvelteMarkdown {source} />