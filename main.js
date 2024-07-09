const stringToSpaces = (s) => {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    out += ' ';
  }
  return out;
};

const displayTheseElementsOnly = (list, arrayOfIndices) => {
  let s = '[';
  let comma = '';
  for (let i = 0; i < list.length; i++) {
    const indexFound = arrayOfIndices.findIndex((j) => j === i);
    if (indexFound > -1) {
      arrayOfIndices.splice(indexFound, 1);
      s += comma + list[i];
    } else {
      s += comma + stringToSpaces(String(list[i]));
    }
    comma = ', ';
  }
  return s + ']';
};

let iterations = 0;
let swaps = 0;

const swap = (listToSort, iIndex, jIndex) => {
  console.group('swap - indices:', iIndex, jIndex);
  console.log('from', displayTheseElementsOnly(listToSort, [iIndex, jIndex]));

  const temp = listToSort[iIndex];
  listToSort[iIndex] = listToSort[jIndex];
  listToSort[jIndex] = temp;

  swaps++;

  console.log('  to', displayTheseElementsOnly(listToSort, [iIndex, jIndex]));
  console.groupEnd();
};

const pivotAndSort = (listToSort, low, high) => {
  if (low >= high) {
    return;
  }
  console.groupCollapsed(low, high, 'pivotAndSort');

  iterations++;

  const pivotIndex = partition(listToSort, low, high);
  pivotAndSort(listToSort, low, pivotIndex - 1);
  pivotAndSort(listToSort, pivotIndex + 1, high);

  console.groupEnd();
};

const partition = (listToSort, low, high) => {
  const pivot = listToSort[low];
  let l = low;
  let h = high;
  while (l < h) {
    while (listToSort[l] <= pivot && l < h) {
      l++;
    }
    while (listToSort[h] > pivot) {
      h--;
    }
    if (l < h) {
      swap(listToSort, l, h);
    }
  }
  if (low < h) {
    swap(listToSort, low, h);
  }

  console.log('Pivot: ', pivot);
  console.log(listToSort);
  return h;
};

const quickSort = (listToSort) => {
  pivotAndSort(listToSort, 0, listToSort.length - 1);
};

const arrayToSort = [6, 5, 11, 4, 2, 5, 10, 3, 7, 8, 9];
// 7 iterations, 9 swaps (was 10)

// const arrayToSort = [5, 4, 6, 2, 1, 10, 7, 3, 8, 9];
// 8 iterations, 6 swaps (was 9)

// const arrayToSort = [11, 10, 9, 8, 7, 6, 5, 5, 4, 3, 2];
// 9 iterations, 6 swaps (was 10)

// const arrayToSort = [2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11];
// 9 iterations, 1 swap (was 9)

// const arrayToSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// 10 iterations, 0 swaps (was 10)

// const arrayToSort = [7, 8, 9, 10, 11, 6, 5, 5, 4, 3, 2];
// 8 iterations, 11 swaps (was 12)

// const arrayToSort = [6, 5, 5, 4, 3, 2, 11, 10, 9, 8, 7];
// 9 iterations, 5 swaps (was 9)

// const arrayToSort = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
// 10 iterations, 10 swaps

console.log('initial array:', arrayToSort);

quickSort(arrayToSort);
console.log('sorted array:', arrayToSort);
console.log('iterations:', iterations);
console.log('swaps:', swaps);
