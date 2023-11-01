<script>
	import { arrayDate, getToday } from '../../../../lib/js/date';

	const tanggalData = arrayDate();

	const rak1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const rak2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
	const rak3 = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
	const rak4 = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
	const rak5 = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];
	const rak6 = [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66];
	const rak7 = [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77];
	const rak8 = [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88];
</script>

<section>
	<div>
		<h1 class="mb-4 text-center">DATA BSS 1</h1>
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
		<div class="col-1 text-center"><h5>sampai</h5></div>
		<div class="col-2">
			<input
				type="text"
				class="form-control form-control-sm text-center"
				value={tanggalData[1]}
				disabled
			/>
		</div>
	</div>
	<div class="d-flex flex-row justify-content-evenly">
		{#each rak1 as rak}
			<div class="output border rounded-4 p-2 text-center">
				<h5 class="text-center">BMS1</h5>
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
					<div
						class="progress-bar progress-bar-striped progress-bar-animated text-bg-success"
						style="width: 75%"
					>
						75%
					</div>
				</div>
				<div class="row mb-1">
					<div class="col-1"><h6>RUL:</h6></div>
					<div class="col text-start"><h6>1918 cycles</h6></div>
				</div>
                <div class="row">
					<div class="col-1"><h6>Usia:</h6></div>
					<div class="col text-start"><h6>5 tahun</h6></div>
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
		font-size: 9px;
        margin: 0;
	}
	.output p {
		margin: 0;
		font-size: 8px;
	}
</style>
