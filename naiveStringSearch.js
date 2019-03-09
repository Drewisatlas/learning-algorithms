function naiveStringSearch (longStr, shortStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for ( let j = 0; j < shortStr.length; j++) {
      console.log(longStr[i], shortStr[j])
      if (shortStr[j] !== longStr[i+j]) {
        console.log('Break!');
        break;
      }
      if ( j === shortStr.length - 1) {
        console.log("match");
        count ++;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch('wowomgzomg', 'omg'));
