<script>
	import InputBms from '../../../../lib/components/InputBMS.svelte';

	export let form;
	export let data;

	const dataIdBMS = form !== null ? form.data : data.data.data;

	const idBMS = dataIdBMS.map((item) => item.id_bms);

	const rak1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const rak2 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
	const rak3 = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];
	const rak4 = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
	const rak5 = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];
	const rak6 = [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66];
	const rak7 = [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77];
	const rak8 = [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88];
	const numRak = [rak1, rak2, rak3, rak4, rak5, rak6, rak7, rak8];
</script>

<InputBms {numRak} {idBMS} numBSS={1} />
