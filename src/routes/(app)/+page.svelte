<script>
	import { getToday, convertDate } from '../../lib/js/date';
	import bssOn from '../../lib/img/bss-on.png';
	import bssOff from '../../lib/img/bss-off.png';
	import moma from '../../lib/img/moma.png';

	export let data;

	const bss1 = data.data6.data.length > 0 ? data.data6.data[0].status : '';
	const bss2 = data.data6.data.length > 0 ? data.data6.data[1].status : '';

	const minIrr = data.data4.length > 0 ? data.data4 : [];
	const maxIrr = data.data5.length > 0 ? data.data5 : [];

	const y4 = minIrr.map((item) => item.irradiance);
	const sumMin = minIrr.map((item) => item.irradiance / 360);
	const totalmin = sumMin.reduce((acc, cur) => acc + cur, 0);
	const forecastProduksiPV = totalmin * 6.8 * 0.1917;

	const y5 = maxIrr.map((item) => item.irradiance);
	const sumMax = maxIrr.map((item) => item.irradiance / 360);
	const totalMax = sumMax.reduce((acc, cur) => acc + cur, 0);
	const forecastProduksiPVBSS = totalMax * 6.8 * 0.1917;

	const arrayRampRate = [];
	for (let i = 1; i < y4.length; i++) {
		const selisih = y5[i + 1] - y4[i];
		if (!isNaN(selisih)) {
			arrayRampRate.push(selisih);
		}
	}

	const arrayMaxBeban = [];
	for (let i = 1; i < y4.length; i++) {
		const selisih = y5[i] - y4[i];
		arrayMaxBeban.push(selisih);
	}

	const forecastSmooting = forecastProduksiPVBSS - forecastProduksiPV;
	const kebutuhanDoD = (forecastSmooting / 900) * 100;
	const maxBebanBSS =
		Math.max(...arrayMaxBeban) * 6.8 * 0.1917 < 600
			? Math.max(...arrayMaxBeban) * 6.8 * 0.1917
			: 600;
	const rampRate =
		Math.max(...arrayRampRate) * 6.8 * 0.1917 < 200
			? Math.max(...arrayRampRate) * 6.8 * 0.1917
			: 200;
</script>

<section>
	<div class="row">
		<div class="col-9">
			<div class="border rounded-5 ps-5 pt-3 pb-4 shadow bg-white">
				<div class="text-center mb-3 setting">
					<h3 class="">REKOMENDASI SETTING BSS</h3>
					<h4 class="">{convertDate(getToday())}</h4>
				</div>
				{#if minIrr.length === 0 && maxIrr.length === 0}
					<div class="text-center kosong d-flex justify-content-center align-items-center">
						<div class="">
							<h3 class="mb-3">DATA KOSONG</h3>
							<a class="btn" href="/input/irradiance">Input Data</a>
						</div>
					</div>
				{:else}
					<div class="mb-4">
						<h5 class="mb-3">Forecast Produksi</h5>
						<div class="mb-3 row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Forecast Total Produksi PV</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={forecastProduksiPV.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kWh</label>
						</div>
						<div class="mb-3 row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Forecast Kebutuhan Smoothing BSS</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={forecastSmooting.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kWh</label>
						</div>
						<div class="row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Forecast Total Produksi PV + BSS</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={forecastProduksiPVBSS.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kWh</label>
						</div>
					</div>
					<div class="">
						<h5 class="mb-3">Rekomendasi Setting Parameter</h5>
						<div class="mb-3 row">
							<label for="inputPassword" class="col-6 col-form-label"
								>Kebutuhan %DoD yang Dibutuhkan</label
							>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={kebutuhanDoD.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">%</label>
						</div>
						<div class="mb-3 row">
							<label for="inputPassword" class="col-6 col-form-label">Setting C-rate</label>
							<div class="col-4">
								<input type="text" class="form-control text-center" value="0.2" disabled />
							</div>
							<label for="inputPassword" class="col-2 col-form-label">C</label>
						</div>
						<div class="mb-3 row">
							<label for="inputPassword" class="col-6 col-form-label">Setting Ramp Rate</label>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={rampRate == 200 ? 200 : rampRate.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kW/s</label>
						</div>
						<div class="row">
							<label for="inputPassword" class="col-6 col-form-label">Setting Max Beban BSS</label>
							<div class="col-4">
								<input
									type="text"
									class="form-control text-center"
									value={maxBebanBSS.toFixed(2)}
									disabled
								/>
							</div>
							<label for="inputPassword" class="col-2 col-form-label">kW</label>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="col-3">
			<div class="border rounded-5 shadow py-4 bg-white">
				<div class="text-center mb-3 bss">
					<h3 class="">KETERSEDIAAN BSS</h3>
					<h4 class="">{convertDate(getToday())}</h4>
				</div>
				<div class="text-center">
					<div class="border rounded-5 m-4 py-3 shadow-sm">
						{#if bss1 === 1}
							<a href="/output/bss1"><img src={bssOn} alt="" /></a>
							<div class="on py-2 mt-1">
								<h6>BSS 1</h6>
								<p>(Stand by)</p>
							</div>
						{:else if bss1 === 0}
							<a href="/output/bss1"><img src={bssOff} alt="" /></a>
							<div class="off py-2 mt-1">
								<h6>BSS 1</h6>
								<p>(Pemeliharaan)</p>
							</div>
						{/if}
					</div>
					<div class="border rounded-5 m-4 py-3 shadow-sm">
						{#if bss2 === 1}
							<a href="output/bss2"><img src={bssOn} alt="" /></a>
							<div class="on py-2 mt-1">
								<h6>BSS 1</h6>
								<p>(Stand by)</p>
							</div>
						{:else if bss1 === 0}
							<a href="output/bss2"><img src={bssOff} alt="" /></a>
							<div class="off py-2 mt-1">
								<h6>BSS 1</h6>
								<p>(Pemeliharaan)</p>
							</div>
						{/if}
					</div>
				</div>
				<div class="text-center moma">
					<p class="mb-1">Source</p>
					<img src={moma} alt="" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* .btn {
		background-color: #43a6a3;
		border-color: transparent !important;
		color: #ffffff;
		font-size: 10px;
	}
	.btn:hover {
		background-color: #43a6a3df;
	} */
	h5 {
		font-weight: 700;
	}
	.setting h3 {
		margin: 0;
		font-weight: 700;
		color: #43a6a3;
	}
	.setting h4 {
		margin: 0;
		font-size: 23px;
		color: #43a6a3;
	}
	.bss h3 {
		margin: 0;
		font-weight: 700;
		color: #43a6a3;
		font-size: 20px;
	}
	.bss h4 {
		margin: 0;
		font-size: 15px;
		color: #43a6a3;
	}
	.on {
		border: 5px solid #43a6a3;
		border-radius: 15px;
		margin: 0px 70px;
	}
	.off {
		border: 5px solid #2f3e46;
		border-radius: 15px;
		color: #ffffff;
		margin: 0px 60px;
	}
	p {
		margin: 0px;
		font-weight: 500;
		font-size: 12px;
		color: #2f3e46;
	}
	h6 {
		margin: 0px;
		font-size: 12px;
		color: #2f3e46;
	}
	img {
		width: 30%;
	}
	.moma img {
		width: 20%;
	}
	.moma p {
		font-weight: 400;
	}
	.kosong {
		height: 50vh;
	}
	h3 {
		font-weight: 900;
	}
	.btn {
		background-color: #43a6a3;
		border-color: transparent;
		color: #ffffff;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
</style>
