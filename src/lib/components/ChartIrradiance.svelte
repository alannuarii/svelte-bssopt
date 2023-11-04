<script>
	import { onMount } from 'svelte';

	export let x;
	export let y;
	export let width;
	export let height;
	export let title;
	export let display;

	let plotlyContainer;

	onMount(() => {
		const trace1 = {
			x: x,
			y: y,
			mode: 'lines',
			type: 'scatter',
			name: 'Line Chart',
			line: {
				color: 'rgb(67, 166, 163)',
				width: 1
			}
		};

		const data = [trace1];

		const layout = {
			title: title,
			xaxis: {
				title: 'Time'
			},
			yaxis: {
				title: 'Global Irradiance'
			},
			width: width,
			height: height
		};

		Plotly.newPlot(plotlyContainer, data, layout, display);
	});
</script>

<div class="chart" bind:this={plotlyContainer} />

<style>
	.chart {
		width: 100%;
	}
</style>
