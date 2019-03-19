function selectionSort (arr) {
  //store the first element as the smallest value you have seen so far
  for (let i = 0; i < arr.length; i++){
    smallest = i;
    let selection;
    for (let j = i+1; j < arr.length; j++) {
      //compare this item to the next item un the array until you find a smaller number
      console.log(arr[smallest], arr[j])
      if ( arr[j] < arr[smallest]) {
        //if a smaller number is found, designate the smaller number to be the new minimum and continue until theend of the array.
        smallest = j;
        console.log(`new smallest number ${arr[smallest]}`)
      }
    }
    // if the minimum is not the value (index) you initially began with, swap the two values.
    if( arr[i] !== smallest) {
      console.log(` End of array: swapping ${arr[smallest]} for ${arr[i]}`)
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;

    }
    console.log('Array is now: ', arr)
  }
  return arr;
  //repeat with the next element until the array is sorted.
}

console.log(selectionSort([ 4, 8, 13, 2, 7]))
