# const partition = function (arr, lo, hi) {
#     let pivot = arr[hi];
#     let i = lo ;
#     for (let j = lo; j < hi; j++) {
#         if (arr[j] <= pivot) {
#             i++;
#             [arr[i], arr[j]] = [arr[j], arr[i]]
#         }
#     }
#     [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]]
#     return i + 1;
# }

from typing import List


class Solution:
    def partition(self, nums, lo, hi):
        pivot = nums[hi]
        i = lo
        for j in range(lo, hi):
            if nums[j] <= pivot:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        nums[i], nums[hi] = nums[hi], nums[i]
        return i

    def findKthLargest(self, nums: List[int], k: int) -> int:
        n_len = len(nums)
        k = len(nums) - k
        lo, hi = 0, n_len - 1
        while lo < hi:
            index = self.partition(nums, lo, hi)
            if index < k:
                lo = index + 1
            elif index > k:
                hi = index - 1
            else:
                break
        return nums[k]  # 为什么返回k 因第k大  ==  第 len - k + 1小
                        #   len - k 之后还需要 + 1才是需要返回的