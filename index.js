function theBeatlesPlay(arrMus, arrInst) {
  var emptyArr = [];
  for (let i = 0; i < arrMus.length; i++) {
      emptyArr.push(`${arrMus[i]} plays ${arrInst[i]}`)
  }
  return emptyArr
}

function johnLennonFacts(arr) {
  let i = 0;
  while (i < arr.length) {
    arr[i] += '!!!'
    i++
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let newArr = [];
  do {
      num += 1
      newArr.push("I love the Beatles!")
  }
  while (num < 15);
  return newArr
}