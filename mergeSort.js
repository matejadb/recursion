function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	const newLeft = mergeSort(left);
	const newRight = mergeSort(right);

	return merge(newLeft, newRight);
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

	while (i < left.length) {
		sortedArray.push(left[i]);
		i++;
	}

	while (j < right.length) {
		sortedArray.push(right[j]);
		j++;
	}

	return sortedArray;
}

//console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
