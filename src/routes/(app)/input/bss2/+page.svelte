<script>
	import InputBms from '../../../../lib/components/InputBMS.svelte';

    export let form;
	export let data;

	const dataIdBMS = form !== null ? form.data : data.data.data;

	const idBMS = dataIdBMS.map((item) => item.id_bms);

	const rak1 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
	const rak2 = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
	const rak3 = [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121];
	const rak4 = [122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132];
	const rak5 = [133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143];
	const rak6 = [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154];
	const rak7 = [155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165];
	const rak8 = [166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176];
	const numRak = [rak1, rak2, rak3, rak4, rak5, rak6, rak7, rak8];
</script>

<InputBms {numRak} {idBMS} numBSS={1} />
