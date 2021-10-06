class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count = 0
        n = len(nums)
        for i in range(1, n):
            if nums[i] == nums[i - 1]:
                count += 1
            else:
                nums[i - count] = nums[i]
        return n - count

