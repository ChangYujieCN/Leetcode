from typing import List


class Solution:

    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        while l <= r:
            mid = (l + r) >> 1
            if nums[mid] == target:
                return mid
            elif nums[mid] >= nums[l]:  # 加等号是因为 mid == l的时候
                # 同样划定的新范围的那个l可能就是我们需要找的target,所以需要=
                if nums[l] <= target < nums[mid]:
                    r = mid - 1
                else:
                    l = mid + 1
            else:
                # 同样划定的新范围的那个r可能就是我们需要找的target,所以需要=
                if nums[r] >= target > nums[mid]:
                    l = mid + 1
                else:
                    r = mid - 1
        return -1