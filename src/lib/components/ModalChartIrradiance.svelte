<script>
	import ChartIrradiance from './ChartIrradiance.svelte';

	export let x;
	export let y;
	export let index;
	export let tanggal;
</script>

<div
	class="modal fade"
	id="chart{index}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-fullscreen">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">Chart Irradiance</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="d-flex justify-content-center align-items-center">
					<ChartIrradiance {x} {y} width={1500} height={600} {tanggal} />
				</div>
			</div>
		</div>
	</div>
</div>
