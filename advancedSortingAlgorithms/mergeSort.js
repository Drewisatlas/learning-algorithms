function mergeArrays (arr1, arr2) {
  let merged = [];
  let m = 0; //pointer for the first array
  let n = 0; //pointer for the second array
  //while there is still data in both arrays
  while (m < arr1.length && n < arr2.length) {
    console.log(arr1[m], arr2[n])
    if (arr1[m] < arr2[n]) {
      merged.push(arr1[m]);
      m++;
    } else {
      merged.push(arr2[n]);
      n++;
    }
    console.log(merged);
  }
  while (m < arr1.length) {
    merged.push(arr1[m]);
    m++;
  }
  while ( n < arr2.length) {
    merged.push(arr2[n]);
    n++;
  }
  return merged;
}
// console.log(mergeArrays([2, 4, 10, 15, 26 ], [1, 3, 4, 9]))

// we will use recursion to build this function
function mergeSort (arr) {
  if (arr.length <= 1) return arr; // define the base case
  //Break up the array into halves using the slice method.
  let mid = Math.floor(arr.length/2);
  //calls merge sort on the left half of the array recursively
  let left = mergeSort(arr.slice(0, mid));
  // calls merge sort on the right half of the array recursively
  let right = mergeSort(arr.slice(mid));
  // these recursive calls happen until they meet the base case.
  //then merge the sorted arrays back together with the array mergeArrays function
  return mergeArrays(left, right);
  //returns the merged and sorted array
}


console.log(mergeSort([1, 5, 2, 0, 3, 4, 5]));
