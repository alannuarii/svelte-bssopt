<script>
	const handleFileUpload = (event) => {
		const check = event.target.files[0].type;
		if (check === 'text/csv') {
			checkFileUpload = true;
		} else {
			checkFileUpload = false;
		}
	};
</script>

<section>
	<form method="POST" enctype="multipart/form-data" class="row">
		<div class="offset-3 col-lg-6">
			<div>
				<h1 class="mb-4 text-center">DATA IRRADIANCE</h1>
			</div>
			<div class="row mb-3 border shadow-sm p-4">
				<div class="mb-4">
					<label for="exampleFormControlInput2" class="form-label">Upload File</label>
					<input type="file" class="form-control" name="irradiance" on:change={handleFileUpload} />
				</div>
				<div>
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
</style>
