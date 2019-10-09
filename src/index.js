module.exports = function getZerosCount(number, base) {
  let k = base;
  let array = [];
  let resultArray = [];


  for (let i = 2; i <= base;) {
    if (k % i == 0) {
      if (isNaN(array[i])) {
        array[i] = 0;
      }
      array[i]++;
      k = k / i;
    }
    else {
      i++;
    }
  }


  for (let i = 0; i <= base; ++i) {
    if (!isNaN(array[i])) {

      let temp = i;
      let res = 0;

      while (number / temp) {
        res = res + Math.floor(number / temp);
        temp = temp * i;
      }

      resultArray.push(Math.floor(res / array[i]));
    }
  }

  return Math.min.apply(Math, resultArray);
}
