const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// accepts three arguments: an array, start index, end index
function pivot (arr, start = 0, end = array.length+1) {
  let pivotI = arr[start];
  let swapIdx = start; // counter for things less than pivot
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotI > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap( arr, start, swapIdx)
  return swapIdx;
}
