class Solution:
    def romanToInt(self, s: str) -> int:
      dict = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
      total = dict[s[-1]]
      for i in range(0,len(s)-1):
        if dict[s[i]] < dict[s[i+1]]:
          total -= dict[s[i]] 
        else:
          total += dict[s[i]]
      return total