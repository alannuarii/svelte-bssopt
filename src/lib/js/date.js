export const arrayDate = () => {
	const tanggalHariIni = new Date();
	const hariIni = tanggalHariIni.getDay();

	if (hariIni === 0) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 2);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 4);

		return [date2(start), date2(end)];
	} else if (hariIni === 1) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 3);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 3);

		return [date2(start), date2(end)];
	} else if (hariIni === 2) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 4);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 2);

		return [date2(start), date2(end)];
	} else if (hariIni === 3) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 5);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 1);

		return [date2(start), date2(end)];
	} else if (hariIni === 4) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 6);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 0);

		return [date2(start), date2(end)];
	} else if (hariIni === 5) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 0);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 6);

		return [date2(start), date2(end)];
	} else if (hariIni === 6) {
		const start = new Date(tanggalHariIni);
		start.setDate(tanggalHariIni.getDate() - 1);
		const end = new Date(tanggalHariIni);
		end.setDate(tanggalHariIni.getDate() + 5);

		return [date2(start), date2(end)];
	}
};

export const formatTanggal = (tanggal) => {
	const dd = String(tanggal.getDate()).padStart(2, '0');
	const mm = String(tanggal.getMonth() + 1).padStart(2, '0');
	const yyyy = tanggal.getFullYear();
	return dd + '/' + mm + '/' + yyyy;
    // 27/10/2023
};

export const date2 = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export const getToday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 8);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};
