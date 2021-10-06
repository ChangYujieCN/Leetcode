from typing import List


class Solution:
    # 用来出来 给出的价格是每一天相对于前一天的价格差[0, 6, -3, 7]而不是每一天的价格[1, 7, 4, 11]
    def maxProfit(self, prices: List[int]) -> int:
        max_cur = 0
        max_so_far = 0
        for i in range(1, len(prices)):
            max_cur += (prices[i] - prices[i - 1])
            max_cur = max(0, max_cur)
            max_so_far = max(max_cur, max_so_far)
        return max_so_far

    # 简单地说  取得的收益这取决于买的价格和卖的价格  只需要在最低点买入  最高点卖出
    def maxProfit2(self, prices: List[int]) -> int:
        max_pro, min_price = 0, float('inf')
        for i in range(len(prices)):
            min_price = min(min_price, prices[i])
            max_pro = max(max_pro, prices[i] - min_price)
        return max_pro
