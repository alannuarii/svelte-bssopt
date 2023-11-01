<script>
	import OutputBms from '../../../../lib/components/OutputBMS.svelte';

	export let data;

	const dataBMS = data.data.data.length > 0 ? data.data.data : [];
</script>

<OutputBms numBSS={2} {dataBMS} />