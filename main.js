const swap = (listToSort, iIndex, jIndex) => {
  const temp = listToSort[iIndex];
  listToSort[iIndex] = listToSort[jIndex];
  listToSort[jIndex] = temp;
};

let iterations = 0;
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
  swap(listToSort, low, h);

  console.log('Pivot: ', pivot);
  console.log(listToSort);
  return h;
};

const quickSort = (listToSort) => {
  pivotAndSort(listToSort, 0, listToSort.length - 1);
};

const arrayToSort = [6, 5, 11, 4, 2, 5, 10, 3, 7, 8, 9]; // 7 iterations
// const arrayToSort = [5, 4, 6, 2, 1, 10, 7, 3, 8, 9]; // 8 iterations
// const arrayToSort = [11, 10, 9, 8, 7, 6, 5, 5, 4, 3, 2]; // 9 iterations
// const arrayToSort = [2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11]; // 9 iterations
// const arrayToSort = [7, 8, 9, 10, 11, 6, 5, 5, 4, 3, 2]; // 8 iterations
// const arrayToSort = [6, 5, 5, 4, 3, 2, 11, 10, 9, 8, 7]; // 9 iterations
// const arrayToSort = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]; // 10 iterations
console.log('initial array:', arrayToSort);

quickSort(arrayToSort);
console.log('sorted array:', arrayToSort);
console.log('iterations:', iterations);
