function calcAverage(arr) {
    // var sum;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    // return sum;
    return sum / arr.length;
  }
  calcAverage([85, 90, 92]);
