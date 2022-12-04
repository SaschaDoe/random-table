<script>
	import { loadPlotTable } from './tables/tables-loader';

	let bla = loadPlotTable();
</script>

<svelte:head>
	<title>Random tables</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<button>Add Plot</button>
	<button>Add Character</button>
	<ul>
		<li>{bla}</li>
	</ul>
</div>



<style>
	div {
		display: flex;
	}

	button {
		margin-right: 10pt;
	}
</style>
