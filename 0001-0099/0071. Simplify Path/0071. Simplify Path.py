class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
        dirs = path.split("/")
        for item in dirs:
            if item not in ("..", ".", ""):
                stack.append(item)
            if item == ".." and stack:
                stack.pop()
        return "/" + "/".join(stack)


so = Solution()
so.simplifyPath("/../")
