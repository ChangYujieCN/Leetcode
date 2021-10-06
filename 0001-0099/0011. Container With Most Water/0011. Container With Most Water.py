# /**
#  * @param {number[]} heights
#  * @return {number}
#  */
# // 面积是根据最小的来计算  最高的那个有多高都没用
# var maxArea = function (heights) {
#   let [left, right] = [0, heights.length-1];
#   let area = 0;
#   while (left < right) {
#     area = Math.max(area,(right - left) * Math.min(heights[left], heights[right]));
#     if (heights[left] < heights[right]) {
#       left++;
#     } else {
#       right--;
#     }
#   }
#   return area;
# };
from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right, area = 0, len(height) - 1, 0
        while left < right:
            area = max(area, (right - left) * min(height[left], height[right]))
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return area
