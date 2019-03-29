// accepts three arguments: an array, start index, end index
function pivot (arr, startI, endI) {
  let pivotI = start;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[start] > arr[i]) {
      let temp = arr[pivotI];
      arr[pivotI] = arr[i];
      pivotI ++;
      arr[pivotI] = temp;
    }
  }
  return pivotI
}
