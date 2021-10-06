class Solution:
    def get_next(self, word):
        k = -1
        j = 0
        next_arr = [0] * len(word)
        next_arr[0] = -1
        while j < (len(word) - 1):
            if k == -1 or word[j] == word[k]: # 第一个不属于公共前后缀的索引k的值和当前索引j一样
                k += 1  # 当前位置相等 因为是斜着对应  所以需要都+1 填入下一个值
                j += 1
                next_arr[j] = k 
            else: # 当前位置j和第一个非公共前后缀k位置处的字符不同那么应该 退而求其次  找稍微短一些的公共前后缀
                k = next_arr[k]
        return next_arr

    def strStr(self, haystack: str, needle: str) -> int:
        m, n = len(haystack), len(needle)
        if not n:
            return 0
        next_log = self.get_next(needle)
        i = j = 0
        while i < m and j < n:
            if j == -1 or haystack[i] == needle[j]:
                i += 1
                j += 1
            else:
                j = next_log[j]
        if j > n-1:
            return i - n
        else:
            return -1


so = Solution()
print(so.strStr("abafsabcabacababda", "abacababd"))
#1. ABCDABD
#2. 0123456 索引值 j 
#3. 0000120 公共前后缀长度
#4. x0000120
#5. -1000012 k的值 代表对应的当前索引j前面所有的字串的公共前后缀长度 同时还有另外一层含义 
# 一旦当j处不匹配应当将k的值的对应索引移动到当前位置继续匹配
# 所以k实际指向的就是 第一个不属于公共前缀的元素

# 实际上代码实现是把上面的往后移动一位
# 前面补上一位 然后最后一位舍去
# 这样一来实际上有着一个斜着的对应关系
# 用k来代替
#index  012345678
#       abacababd
#next  -100101? 
# j = 5  k = 1  word[j] == word[k] 则 next[6] = 2
#index  012345678
#       abacababd
#next  -1001012?
# j = 6  k = 2  word[j] == word[k] 则 next[7] = 3
#index  012345678
#       abacababd
#next  -10010123?
# j = 6 k = 3  word[j] != word[k] 则进入新的逻辑
# abacaba 相同前后缀长度为3 不一样尝试缩小公共前后缀范围
# 因为 aba c aba 

# 算法核心
# abcdabcffds
# abcdabce
# 在e处不匹配 我们发现前面的后缀  abc和前缀abc一样 则索引 1-3 abc不需要比较  直接移动到
# 索引4 d进行下面的比较

# 这里的索引都是从1开始
# 如果遇到不匹配去查next表将 j置为next_log[j] 并与i继续进行比较
#     i
# ababcabcacbab
# ababaab
#     j不匹配  next[5] == 3 把j的第3位移动到和i对齐 j = next_log[j]
#     i
# ababcabcacbab
#   ababaab
#     j   不匹配 next[3] == 1
#     i
# ababcabcacbab
#     ababaab
#     j   不匹配 j = (next[1] == 0) i+1  j+1
#        i
# ababcabcacbab
#      ababaab
#        j   不匹配 j = (next[3] == 1)
#        i
# ababcabcacbab
#        ababaab
#        j   不匹配 j = (next[1] == 0) i+1  j+1
#         i
# ababcabcacbab
#         ababaab
#         j   不匹配 j = (next[1] == 0) i+1  j+1
