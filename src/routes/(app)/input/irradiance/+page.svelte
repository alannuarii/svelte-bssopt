<script>
	import { getBefore4Day } from '../../../../lib/js/date';

	export let data;
	const dates = data.data1.data.length > 0 ? data.data1.data : [];
	const fourDays = getBefore4Day();

	const handleFileUpload = (event) => {
		const check = event.target.files[0].type;
		if (check === 'text/csv') {
			checkFileUpload = true;
		} else {
			checkFileUpload = false;
		}
	};

	const savedData = dates.map((obj) => {
		const tanggalObj = new Date(obj.tanggal);
		return tanggalObj.toLocaleDateString('id-ID', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	});

	const arrayDays = fourDays.map((tanggal) => {
		const tanggalObj = new Date(tanggal);
		return tanggalObj.toLocaleDateString('id-ID', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		});
	});

	console.log(savedData[3]);
</script>

<section>
	<form method="POST" enctype="multipart/form-data" class="row">
		<div class="offset-3 col-lg-6">
			<div>
				<h1 class="mb-4 text-center">DATA IRRADIANCE</h1>
			</div>
			<div class="row mb-3 border shadow-sm p-4 bg-white">
				<div class="">
					<label for="exampleFormControlInput2" class="form-label">Upload File</label>
					<input type="file" class="form-control" name="irradiance" on:change={handleFileUpload} />
				</div>
				<div class="px-3 py-2"><h6>Data terakhir : {savedData[3]}</h6></div>
				<div class="d-flex flex-wrap justify-content-evenly mt-2">
					{#each arrayDays as day}
						<p class="tanggal">
							<i
								class={savedData.includes(day)
									? 'bi-check-square-fill text-success'
									: 'bi-x-square-fill text-danger'}
							/>
							{day}
						</p>
					{/each}
				</div>
				<div class="mt-4">
					<p class="mb-2">Keterangan:</p>
					<ul>
						<li>Ekstensi file adalah .csv</li>
					</ul>
				</div>
			</div>
			<div class="d-flex justify-content-center">
				<button class="btn w-25 text-light" type="submit">Submit</button>
			</div>
		</div>
	</form>
</section>

<style>
	.form-label {
		margin: 0px;
		font-weight: 700;
	}
	p {
		margin: 0px;
	}
	.btn {
		background-color: #43a6a3;
		border-color: transparent;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
	.border {
		border-radius: 25px;
	}
	h6 {
		margin: 0px;
		font-size: 13px;
		font-style: italic;
		font-weight: 600;
	}
	.tanggal {
		margin: 0px;
		font-size: 13px;
	}
</style>
