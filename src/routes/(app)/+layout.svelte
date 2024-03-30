<script>
	import Sidebar from '../../lib/components/Sidebar.svelte';
	import Header from '../../lib/components/Header.svelte';
</script>

<svelte:head>
	<title>BSSOpt</title>
	<meta name="description" content="BSSOpt" />
</svelte:head>

<main>
	<div class="row gx-0">
		<div class="col-2">
			<Sidebar />
		</div>
		<div class="col-10 position-relative">
			<div class="header position-absolute top-0 start-50 translate-middle-x">
				<Header />
			</div>
			<div class="content px-5">
				<slot />
			</div>
		</div>
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
		background-image: url('../../lib/img/bg.jpg');
		background-size: cover;
	}
	.header {
		width: 100%;
		z-index: 1;
	}
	.content {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		padding-top: 90px;
		padding-bottom: 50px;
	}
</style>
