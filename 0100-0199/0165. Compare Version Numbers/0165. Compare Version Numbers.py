class Solution:

    def compareVersion(self, version1: str, version2: str) -> int:
        version1 = version1.split(".")  # split返回列表
        version2 = version2.split(".")
        for i in range(max(len(version1), len(version2))):
            v1 = int(version1[i]) if i < len(version1) else 0
            v2 = int(version2[i]) if i < len(version2) else 0
            if v1 < v2:
                return -1
            elif v1 > v2:
                return 1
        return 0


from itertools import zip_longest


class Solution2:

    def compareVersion(self, version1, version2):
        v1s = map(int, version1.split("."))
        v2s = map(int, version2.split("."))

        for v1, v2 in zip_longest(v1s, v2s, fillvalue=0):
            if v1 > v2:
                return 1
            elif v1 < v2:
                return -1

        return 0
