// we will take an array and sort it in an ascending value
function insertionSort (arr) {
    for( let i = 1; i < arr.length; i++){
      //pick the second element in the array, and this is the value we will start with as we sort through the array. We will place it on the first iteration.
      let currentVal = arr[i];
      //we are going to keep going while j is greater than 0 and j is greater than the current value
      console.log("start", arr);
      //continue to the next element and if it is in the incorrect order, iterate through the sorted portion (left side) to place the element in the correct place
      for (let j = i-1; j >= 0; j--) {
        //compare the second element with the one before it and swap the larger value upy
        if (arr[j] > currentVal) {
          arr[j+1] = arr[j];
          console.log(arr, `currentVal = ${currentVal}`)
        }
        //we have found the spot where the array is less than or the same value of the current value. we will place the current value above this element and break out of the loop. 
        if (arr[j] <= currentVal) {
          arr[j+1] = currentVal;
          console.log(arr, `Placed ${currentVal}`);
          break;
        }
        //we have reached the end of the array, currentVal is presumably the lowest value so we put it at the front of the array.
        if (j === 0){
          arr[j] = currentVal;
          console.log( arr,`Placed ${currentVal}`)
        }
      }
    }
  //repeat until the array is sorted.
  return arr;
}

console.log('final', insertionSort([4,3,10,9,1,2,5]))
