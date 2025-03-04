function fibs(n) {
	if (n === 0) return [];
	if (n === 1) return [0];

	const fibsArray = [0, 1];
	let current = 0;
	let next = 1;

	for (let i = 2; i < n; i++) {
		let newFib = current + next;
		fibsArray.push(newFib);
		current = next;
		next = newFib;
	}

	return fibsArray;
}
console.log(fibs(8));
