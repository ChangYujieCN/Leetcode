/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */ 
//  dp[i][j] means to index i of s and index j of p, whether it match or not.
//  1, If p.charAt(j) == s.charAt(i) :  dp[i][j] = dp[i-1][j-1];
//  2, If p.charAt(j) == '.' : dp[i][j] = dp[i-1][j-1];
//  3, If p.charAt(j) == '*': 
//     here are two sub conditions:
//                 1   if p.charAt(j-1) != s.charAt(i) : dp[i][j] = dp[i][j-2]  //in this case, a* only counts as empty
//                 2   if p.charAt(i-1) == s.charAt(i) or p.charAt(j-1) == '.':
//                                dp[i][j] = dp[i-1][j]    //in this case, a* counts as multiple a 
//                             or dp[i][j] = dp[i][j-1]   // in this case, a* counts as single a
//                             or dp[i][j] = dp[i][j-2]   // in this case, a* counts as empty
var isMatch = function (str, pattern) {
  const dp = Array.from({length:str.length+1},e=>Array(pattern.length+1).fill(false));
  console.log(dp)
  dp[0][0] = true;  // 占位符 不代表任何位置  代表str pattern都是空字符的时候 
  // 由于3.1只能处理非边界情况  如果pattern 以 a*开头 3.1的模式无法处理所以需要在这里做特殊处理
  for (let j = 0; i < pattern.length; j++)
    dp[0][j + 1] = pattern[i] === "*" && dp[0][j - 1];
    //如果开头是连续的 a*b* 由于x*可以代表0个x字符  那么应当永远和str是空字符匹配  当str时空的时候的情况
  // i代表str的索引   j代表pattern的索引  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] === ".") {
        dp[i + 1][j + 1] = dp[i][j];  //需要注意  dp[i+1][j+1]代表的 str[i]和pattern[j]是否匹配 因为dp长宽比str和pattern都大一位
      }
      if (pattern[j] === str[i]) {
        dp[i + 1][j + 1] = dp[i][j];
      }
      
      if (pattern[j] === "*") {
        if (pattern[j - 1] !== str[i] && pattern[j - 1] !== ".") {  //此时 * 匹配0个元素
          dp[i + 1][j + 1] = dp[i + 1][j - 1];  // str[i] pattern[j]的匹配情况和str[i] pattern[j-2]的匹配情况一样
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] ||   //匹配单个a  或者单个任意字符
          dp[i][j + 1] ||  // 多个a  或者多个任意字符
          //pattern[j]=== "*" && str[i] === pattern[j-1] && (str[i]和pattern[j-1]不匹配),说明有多个a才不匹配,不然肯定匹配,因为pattern[j-1]必定是个字母或者. ,去掉 * 就是单个字母,如果不匹配字母又相等 那说明  str = "xaa"  pattern="xa*" "xa"无法匹配"xaa"
          dp[i + 1][j - 1]; // empty 匹配   aasdf  aasdf.*
          // 为星号要么匹配0个要么匹配1个要么匹配多个
          // 前面判断过  x* 匹配0次这种模式了 
          // 还剩下几种情况
          // xa  xa*  x.*  匹配一次
          // xaa xa*  x.* 匹配多次
          // x   x.* 匹配0次 前面检测过 不为. 这里只需要检测 .*
         }
      }
    }
  }
  return dp[str.length][pattern.length];
};
isMatch("aab", "c*a*b")
