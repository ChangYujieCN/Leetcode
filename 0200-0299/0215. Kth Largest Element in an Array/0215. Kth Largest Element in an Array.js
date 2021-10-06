const partition = function (arr, lo, hi) {
    let pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]]
    return i + 1;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
    k = nums.length - k;
    let [low, high] = [0, nums.length - 1];
    while (low < high) {
        // 每次执行完毕以后都肯定有一个元素已经归位
        const index = partition(nums, low, high);
        if (index < k) {
            low = index + 1
        } else if (index > k) {
            high = index - 1
        } else {
            break
        }
    }
    return nums[k]
}