<script>
	import ChartIrradiance from '../../../lib/components/ChartIrradiance.svelte';
	import ModalChartIrradiance from '../../../lib/components/ModalChartIrradiance.svelte';
	import { date3, date4 } from '../../../lib/js/date';

	export let data;
	const irr1 = data.data1.data.length > 0 ? data.data1.data : [];
	const irr2 = data.data2.data.length > 0 ? data.data2.data : [];
	const irr3 = data.data3.data.length > 0 ? data.data3.data : [];

	const x1 = irr1.map((item) => date3(item.waktu));
	const y1 = irr1.map((item) => item.irradiance);
	const tanggal1 = irr1.map((item) => date4(item.waktu));

	const x2 = irr2.map((item) => date3(item.waktu));
	const y2 = irr2.map((item) => item.irradiance);
	const tanggal2 = irr2.map((item) => date4(item.waktu));

	const x3 = irr3.map((item) => date3(item.waktu));
	const y3 = irr3.map((item) => item.irradiance);
	const tanggal3 = irr3.map((item) => date4(item.waktu));

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
	<div class="row gx-0">
		{#each datas as data, index}
			<div class="col-4 d-flex flex-column">
				<ChartIrradiance x={data.x} y={data.y} tanggal="{data.tanggal}" display={{displayModeBar: false}} />
				<div class="d-flex justify-content-center">
					<button class="btn btn-sm" data-bs-toggle="modal" data-bs-target="#chart{index}"
						>Detail</button
					>
				</div>
				<ModalChartIrradiance x={data.x} y={data.y} {index} tanggal={data.tanggal} />
			</div>
		{/each}
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
</style>
