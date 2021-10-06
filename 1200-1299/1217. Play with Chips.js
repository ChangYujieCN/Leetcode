/**
 * 数组中的数字不代表某个数   而是一个东西所处数组位置的下标
 * @param {number[]} chips
 * @return {number}
 */
const minCostToMoveChips = function(chips) {
    const count = Array(2).fill(0);
    for(const chip of chips){
        ++count[chip%2];
    }
    return Math.min(count[0],count[1])
};
