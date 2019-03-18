//this function should accept an array and move the largest number during an iteration to the end of the array
// on each iteration the length of the array is decreased by one.
// once enough iterations have occurred to equal the length of the array return the sorted array.

function bubbleSort (arr) {
  //start looping from the end of the array towards the beginning with a variable called i
  for (let i = arr.length; i > 0; i--) {
    // start an inner loopwith a variable called j from the beginning until i -1, this requires the loop to be run fewer times
    for (let j = 0; j <i - 1; j++) {
      console.log(arr, arr[j], arr[j+1])
    // if arr[j] is greater than arr[j+1], swap those two values.
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    console.log("One pass complete")
  }
  //return the sorted array
  return arr;
}

const swap = (arr, idxJ, idxK) => {
  [arr[idxJ], arr[idxK]] = [arr[idxK], arr[idxJ]]
}
console.log(bubbleSort([4,1,7,9,2]))
