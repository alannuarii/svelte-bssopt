<script>
	export let number;
	export let tanggal;
</script>

<div
	class="modal fade"
	id="inputBMS{number}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<form method="POST">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">BMS {number}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col">
							<label for="inputEmail4" class="form-label">Voltage (V)</label>
							<input type="text" class="form-control form-control-sm" name="voltage" />
						</div>
						<div class="col">
							<label for="inputEmail4" class="form-label">Temperature (C)</label>
							<input type="text" class="form-control form-control-sm" name="temperature" />
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<input type="hidden" name="tanggal" value={tanggal} />
					<input type="hidden" name="id_bms" value={number} />
					<button type="submit" class="btn btn-primary btn-sm">Submit</button>
				</div>
			</div>
		</form>
	</div>
</div>

<style>
	label {
		font-weight: 500;
	}
	.btn {
		background-color: #43a6a3;
		border-color: transparent !important;
	}
	.btn:hover {
		background-color: #43a6a3df;
	}
</style>
