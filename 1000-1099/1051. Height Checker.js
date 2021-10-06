/**
 * @param {number[]} heights
 * @return {number}
 */
//计数排序
const heightChecker = heights => {
  let heightToFrequence = [];
  for (let height of heights) {
    heightToFrequence[height]
      ? heightToFrequence[height]++
      : (heightToFrequence[height] = 1);
  }
  let count = 0,
    currnetHeight = 0;
  console.log(heightToFrequence);
  for (let i = 0; i < heights.length; i++) {
    while (!heightToFrequence[currnetHeight]) {
      currnetHeight++;
    }
    if (currnetHeight !== heights[i]) {
      count++;
    }
    heightToFrequence[currnetHeight]--;
  }
  return count;
};
console.log(heightChecker([1, 2, 1, 2, 1, 1, 1, 2, 1]));

//使用TypedArray
const heightChecker2 = heights => {
  let heightToFrequence = new Int8Array(101);
  for (let height of heights) {
    ++heightToFrequence[height];
  }
  let count = 0,
    currnetHeight = 0;
  for (let i = 0; i < heights.length; i++) {
    while (!heightToFrequence[currnetHeight]) {
      currnetHeight++;
    }
    if (currnetHeight !== heights[i]) {
      count++;
    }
    heightToFrequence[currnetHeight]--;
  }
  return count;
};

//使用排序
const heightChecker3 = heights => {
    //解除引用的问题
    const temp = [...heights];
    heights.sort((a, b) => a - b);
    let count = 0;
    for (let index = 0; index < temp.length; index++) {
      temp[index] !== heights[index] && count++;
    }
    return count;
  };
