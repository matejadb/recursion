function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const left = arr.slice(0, Math.floor(arr.length / 2));
	const right = arr.slice(Math.floor(arr.length / 2));

	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
	let sortedArray = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			sortedArray.push(left[i]);
			i++;
		} else {
			sortedArray.push(right[j]);
			j++;
		}
	}

  

	return sortedArray;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
