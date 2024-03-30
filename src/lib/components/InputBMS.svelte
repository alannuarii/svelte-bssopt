<script>
	import ModalInputBms from './ModalInputBMS.svelte';
	import { arrayDate, getToday } from '../js/date';

	export let numRak;
	export let numBSS;
	export let idBMS;

	const tanggalData = arrayDate();
</script>

<section>
	<div>
		<h1 class="mb-4 text-center">DATA BSS {numBSS}</h1>
	</div>
	<div class="row gx-0 mb-4 d-flex align-items-center">
		<div class="col-1 text-center"><h5>Periode</h5></div>
		<div class="col-2">
			<input
				type="text"
				class="form-control form-control-sm text-center"
				value={tanggalData[0]}
				disabled
			/>
		</div>
		<div class="col-1 text-center"><h5>hingga</h5></div>
		<div class="col-2">
			<input
				type="text"
				class="form-control form-control-sm text-center"
				value={tanggalData[1]}
				disabled
			/>
		</div>
	</div>
	{#each numRak as num, index}
		<div class="border outer border-4 shadow-sm mb-4 border py-3 px-2 rounded-4 position-relative">
			<span class="badge ms-1 mb-2 position-absolute top-0 start-0 translate-middle"
				>RAK {index + 1}</span
			>
			<div class="d-flex flex-row justify-content-evenly">
				{#each num as rak}
					{#if idBMS.includes(rak)}
						<div class="card text-center p-2 rounded-3 bg-success">
							<h6>BMS {rak}</h6>
						</div>
					{:else}
						<div
							class="card text-center p-2 rounded-3 bg-danger btn"
							data-bs-toggle="modal"
							data-bs-target="#inputBMS{rak}"
						>
							<h6>BMS {rak}</h6>
						</div>
					{/if}
					<ModalInputBms number={rak} tanggal={getToday()} />
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	h6 {
		font-weight: 400;
		font-size: 13px;
		margin: 0;
	}
	.card {
		width: 100px;
		color: #ffffff;
		border: none;
	}
	span {
		font-size: 15px;
		font-weight: 600;
		background-color: #43a6a3 !important;
	}
	h5 {
		font-weight: 500;
		margin: 0px;
		font-size: 15px;
	}
	.outer {
		border-color: #43a6a3 !important;
	}
	.form-control {
		background-color: #ffffff;
	}
</style>
