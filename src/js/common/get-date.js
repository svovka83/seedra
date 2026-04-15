export function getDate(gottenDate) {
	const currentDate = gottenDate.seconds;

	const date = new Date(currentDate * 1000);

	const day = date.getDate();
	let month = date.getMonth() + 1;
	const year = date.getFullYear();

	if (String(month).length === 1) {
		month = `0${month}`;
	}

	const resDate = `${day}.${month}.${year}`;

	return resDate;
}
