class Solution:
    def convert(self, s: str, numRows: int) -> str:
        str_buffer = [""] * numRows
        i = 0
        while i < len(s):
            j = 0
            while i < len(s) and j < numRows:
                str_buffer[j] += s[i]
                i += 1
                j += 1
            j = numRows - 2
            while i < len(s) and j > 0:
                str_buffer[j] += s[i]
                i += 1
                j -= 1
        return ''.join(str_buffer)
