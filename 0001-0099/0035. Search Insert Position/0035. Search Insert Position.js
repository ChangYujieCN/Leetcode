/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let [low, high] = [0, nums.length - 1];
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return low;
};
// 最后结束前的位置 
// low + 1 === high  mid === low
//     mid > target high = mid - 1 === low - 1  跳出循环 low > target return low 
//     mid < target low = mid + 1 === low + 1  low === high 进行下次循环
// low === high mid === high === low
//     mid > target => low > target  return low 
//     mid < target => low < target 应该插入到 low + 1 去 也就是 mid + 1