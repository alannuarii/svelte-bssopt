<script>
	import Timer from './Timer.svelte';
	import user from '../img/user.png';
	const reload = () => {
		location.reload();
	};
</script>

<nav class="navbar bg-light-subtle shadow">
	<div class="container-fluid">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="navbar-brand text-dark ms-3 d-flex align-items-center" href="/"
			>MAMOLE<span class="ms-2">| Machine Learning Based Modelling for Energy Storage</span></a
		>
		<div class="ms-auto me-5"><Timer /></div>
		<div class="me-4 reload">
			<button on:click={reload}
				><i
					class="bi-arrow-clockwise"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-title="Reload"
				/></button
			>
		</div>
		<div class="dropdown-center user">
			<div class="me-3 d-flex" data-bs-toggle="dropdown" data-bs-display="static">
				<img src={user} class="me-2" alt="" />
				<h6 class="d-block my-auto">Admin</h6>
			</div>
			<ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-dark">
				<li>
					<a
						class="dropdown-item d-flex align-items-center justify-content-center auth"
						href="/logout"><i class="bi-box-arrow-right me-2" />Log Out</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	nav {
		height: 70px;
	}
	.navbar-brand {
		font-size: 25px;
		font-weight: 900;
	}
	.reload {
		font-size: 22px;
		cursor: pointer;
	}
	button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	img {
		height: 30px;
	}
	h6 {
		font-weight: 300;
	}
	.user {
		cursor: pointer;
	}
	.user:hover {
		color: #43a6a3 !important;
	}
	span {
		font-weight: 100;
		font-size: smaller;
		margin: 0px;
	}
</style>
