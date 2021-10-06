from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i = 0
        profit = 0
        n = len(prices)-1
        while i < n:
            while i < n and prices[i + 1] <= prices[i]:  # 如果明天股票下跌 就不买 直到上涨才买入
                i += 1
            buy = prices[i]
            while i < n and prices[i + 1] > prices[i]:  # 如果明天下跌 立刻卖出
                i += 1
            sell = prices[i]
            profit += (sell - buy)
        return profit
