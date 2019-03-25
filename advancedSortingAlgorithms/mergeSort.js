function mergeArrays (arr1, arr2) {
  let merged = [];
  let m = 0;
  let n = 0;
  while (m < arr1.length && n < arr2.length) {
    console.log(arr1[m], arr2[n])
    if (arr1[m] < arr2[n]) {
      merged.push(arr1[m]);
      m++;
    } else if (arr1[m] > arr2[n]) {
      merged.push(arr2[n]);
      n++;
    } else {
      merged.push(arr1[m]);
      merged.push(arr2[n]);
      m++;
      n++;
    }
    console.log(merged);
  }
  if (m < arr1.length) {
    merged = merged.concat(arr1.slice(m))
    console.log("adding", arr1.slice(m))
  }
  if (n < arr2.length) {
    merged = merged.concat(arr1.slice(m))
    console.log("adding", arr2.slice(n))
  }
  return merged;
}


console.log(mergeArrays([2, 4, 10, 16, 25, 100], [1, 3, 4, 9]))

function mergeSort () {}
