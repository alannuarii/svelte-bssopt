<script>
	import ChartIrradiance from '../../../lib/components/ChartIrradiance.svelte';
	import ModalChartIrradiance from '../../../lib/components/ModalChartIrradiance.svelte';
	import { date4, date5, getTomorrow } from '../../../lib/js/date';

	export let data;
	const irr1 = data.data1.data.length > 0 ? data.data1.data : [];
	const irr2 = data.data2.data.length > 0 ? data.data2.data : [];
	const irr3 = data.data3.data.length > 0 ? data.data3.data : [];
	const avgIrr = data.data4.data.length > 0 ? data.data4.data : [];
	const maxIrr = data.data5.data.length > 0 ? data.data5.data : [];

	const x1 = irr1.map((item) => date5(item.waktu));
	const y1 = irr1.map((item) => item.irradiance);
	const tanggal1 = irr1.map((item) => date4(item.waktu));

	const x2 = irr2.map((item) => date5(item.waktu));
	const y2 = irr2.map((item) => item.irradiance);
	const tanggal2 = irr2.map((item) => date4(item.waktu));

	const x3 = irr3.map((item) => date5(item.waktu));
	const y3 = irr3.map((item) => item.irradiance);
	const tanggal3 = irr3.map((item) => date4(item.waktu));

	const x4 = avgIrr.map((item) => date5(item.waktu));
	const y4 = avgIrr.map((item) => item.irradiance);
	const sumAvg = avgIrr.map((item) => item.irradiance / 360);
	const totalAvg = sumAvg.reduce((acc, cur) => acc + cur, 0);
	const forecastProduksiPV = totalAvg * 6.8

	const x5 = maxIrr.map((item) => date5(item.waktu));
	const y5 = maxIrr.map((item) => item.irradiance);
	const sumMax = maxIrr.map((item) => item.irradiance / 360);
	const totalMax = sumMax.reduce((acc, cur) => acc + cur, 0);
	const forecastProduksiPVBSS = totalMax * 6.8

	const forecastSmooting = forecastProduksiPVBSS - forecastProduksiPV
	const kebutuhanDoD = forecastSmooting / 900 * 100

	const datas = [
		{ x: x1, y: y1, tanggal: tanggal1[0] },
		{ x: x2, y: y2, tanggal: tanggal2[0] },
		{ x: x3, y: y3, tanggal: tanggal3[0] }
	];
</script>

<section>
	<div>
		<h1 class="text-center">OPTIMIZATION RESULT</h1>
	</div>
	<div class="row gx-0 mb-4">
		{#each datas as data, index}
			<div class="col-4 d-flex flex-column">
				<ChartIrradiance
					x={data.x}
					y={data.y}
					title={`Irradiance ${data.tanggal}`}
					display={{ displayModeBar: false }}
				/>
				<div class="d-flex justify-content-center mt-2">
					<button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#chart{index}"
						>Detail</button
					>
				</div>
				<ModalChartIrradiance x={data.x} y={data.y} {index} tanggal={data.tanggal} />
			</div>
		{/each}
	</div>
	<div class="mb-4">
		<ChartIrradiance x={x4} y={y4} title={'Forecast Produksi PV'} />
	</div>
	<div class="mb-5">
		<ChartIrradiance x={x5} y={y5} title={'Forecast Produksi PV + BSS'}/>
	</div>
	<div class="row border rounded-4 px-2 py-3 shadow">
		<div class="col-6">
			<h5 class="mb-3">Forecast Produksi {getTomorrow()}</h5>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-6 col-form-label">Forecast Total Produksi PV</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" value="{forecastProduksiPV.toFixed(2)}" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">kWh</label>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-6 col-form-label">Forecast Kebutuhan Smoothing BSS</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" value="{forecastSmooting.toFixed(2)}" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">kWh</label>
			</div>
			<div class="row">
				<label for="inputPassword" class="col-6 col-form-label">Forecast Total Produksi PV + BSS</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" value="{forecastProduksiPVBSS.toFixed(2)}" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">kWh</label>
			</div>
		</div>
		<div class="col-6">
			<h5 class="mb-3">Rekomendasi Setting Parameter {getTomorrow()}</h5>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-6 col-form-label">Kebutuhan %DoD yang Dibutuhkan</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" value="{kebutuhanDoD.toFixed(2)}" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">%</label>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-6 col-form-label">Setting C-rate</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">C</label>
			</div>
			<div class="mb-3 row">
				<label for="inputPassword" class="col-6 col-form-label">Setting Ramp Rate</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">kW/s</label>
			</div>
			<div class="row">
				<label for="inputPassword" class="col-6 col-form-label">Setting Max Beban BSS</label>
				<div class="col-4">
					<input type="text" class="form-control text-center" disabled />
				</div>
				<label for="inputPassword" class="col-2 col-form-label">kW</label>
			</div>
		</div>
	</div>
</section>

<style>
	.btn {
		background-color: #43a6a3;
		border-color: transparent !important;
		color: #ffffff;
		font-size: 10px;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	h5{
		font-weight: 700;
		color: #43a6a3;
	}
</style>
