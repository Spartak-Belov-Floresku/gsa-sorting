const bubbleSort = arr => {

      for (let i = arr.length; i > 0; i--) {

        let short =  false;

        for (let j = 0; j < i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            short = true;
          }
        }

        if(!short) break;
      }
      return arr;
}

module.exports = bubbleSort;