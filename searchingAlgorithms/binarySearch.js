function binarySearch (arr, elem) {
  //set start, middle, and end pointers
  let start = 0; // the first value of the array
  let end = arr.length - 1; // the last value of the array
  let middle = Math.floor((start + end)/2); //we use Math.floor() incase the array has a odd number of values because a index value needs to be a whole number

  while (arr[middle] !== elem && start <= end) { // this loop will end if the element is equal to the middle value or if start point passes the end point
    if (elem < arr[middle]) end = middle - 1; // if the element is less than the middle value move the end position to the  one element below the middle
    else start = middle + 1;  // otherwise move the start position to one element above the middle
    middle = Math.floor((start + end)/2); // calculate the new middle position and reassign it to middle
    console.log("Index Value", `start: ${start}`, `middle: ${middle}`, `end: ${end}`); // a console log so we can see each loop's search points
  }
  return arr[middle] === elem? middle : -1; // checking to see if the middle value equals the element or it returns -1
}

console.log(binarySearch([2,5,6,9,13,15,28,30],15)) // run in terminal witn "node binarySearch.js"
