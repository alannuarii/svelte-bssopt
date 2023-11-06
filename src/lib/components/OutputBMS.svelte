<script>
	import { arrayDate, konversiTahunBulan } from '../js/date';

	export let numBSS;
	export let dataBMS;

	const tanggalData = arrayDate();
	

	// Contoh penggunaan
	var angkaDesimal = 5.5;
	var hasilKonversi = konversiTahunBulan(angkaDesimal);
	console.log(hasilKonversi); // Output: "5 Tahun 6 Bulan"
</script>

<section>
	<div>
		<h1 class="mb-4 text-center">MONITORING BSS {numBSS}</h1>
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
	<div class="d-flex flex-wrap flex-row justify-content-evenly">
		{#each dataBMS as bms}
			<div class="output border rounded-4 p-2 text-center mb-2">
				<h5 class="text-center">BMS {bms.id_bms}</h5>
				<p>Capacity</p>
				<div
					class="progress mb-2"
					role="progressbar"
					aria-label="Animated striped example"
					aria-valuenow="75"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					<!-- <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%" /> -->
					{#if bms.capacity < 75}
						<div
							class="progress-bar progress-bar-striped progress-bar-animated text-bg-danger"
							style="width: {bms.capacity}%"
						>
							{bms.capacity.toFixed(2)}
						</div>
					{:else if bms.capacity >= 75 && bms.capacity <= 80}
						<div
							class="progress-bar progress-bar-striped progress-bar-animated text-bg-warning"
							style="width: {bms.capacity}%"
						>
							{bms.capacity.toFixed(2)}
						</div>
					{:else}
						<div
							class="progress-bar progress-bar-striped progress-bar-animated text-bg-success"
							style="width: {bms.capacity}%"
						>
							{bms.capacity.toFixed(2)}
						</div>
					{/if}
				</div>
				<div class="row mb-1">
					<div class="col-1"><h6>RUL:</h6></div>
					<div class="col text-start"><h6>{bms.rul.toFixed(0)} cycles</h6></div>
				</div>
				<div class="row">
					<div class="col-1"><h6>Usia:</h6></div>
					<div class="col text-start"><h6>{konversiTahunBulan(bms.rul / 365)}</h6></div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.output {
		width: 100px;
	}
	.output h5 {
		font-size: 13px;
		font-weight: 700;
	}
	.output h6 {
		font-size: 8px;
		margin: 0;
	}
	.output p {
		margin: 0;
		font-size: 8px;
	}
</style>
