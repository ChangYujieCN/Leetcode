/**
 * @param {string[]} A
 * @return {string[]}
 */
// vector<string> commonChars(vector<string>& A) {
//     vector<int> cnt(26, INT_MAX);
//     vector<string> res;
//     for (auto s : A) {
//         vector<int> cnt1(26, 0);
//         for (auto c : s) ++cnt1[c - 'a'];
//         for (auto i = 0; i < 26; ++i) cnt[i] = min(cnt[i], cnt1[i]);
//     }
//     for (auto i = 0; i < 26; ++i)
//     for (auto j = 0; j < cnt[i]; ++j) res.push_back(string(1, i + 'a'));
//     return res;
// }
// public List<String> commonChars(String[] A) {
//     List<String> ans = new ArrayList<>();
//     int[] count = new int[26];
//     Arrays.fill(count, Integer.MAX_VALUE);
//     for (String str : A) {
//         int[] cnt = new int[26];
//         str.chars().forEach(c -> ++cnt[c - 'a']); // count each char's frequency in string str.
//         for (int i = 0; i < 26; ++i) { count[i] = Math.min(cnt[i], count[i]); } // update minimum frequency.
//     }
//     for (char c = 'a'; c <= 'z'; ++c) {
//         while (count[c - 'a']-- > 0) { ans.add("" + c); }
//     }
//     return ans;
// }
const commonChars = function(A) {
  const cnt = Array(26).fill(Number.MAX_SAFE_INTEGER);
  const res = [];
  for (const str of A) {
    const cnt1 = Array(26).fill(0);
    for (const char of str) {
      // "a".charCodeAt(0)  === 97
      ++cnt1[char.charCodeAt(0) - 97];
    } // count each char's frequency in string str.
    for (let i = 0; i < 26; i++) cnt[i] = Math.min(cnt[i], cnt1[i]); // update minimum frequency.
  }
  for (let i = 0; i <= 26; ++i) {
    while (cnt[i]-- > 0) {
      res.push(String.fromCharCode(97 + i));
    }
  }
  return res;
};
const commonChars2 = function(A) {
  let originalChars = [...A[0]];
  for (let i = 1; i < A.length; i++) {
    const tempChars = [...A[i]];
    originalChars = originalChars.filter(char => {
      const ind = tempChars.indexOf(char);
      //这里通过对tempChars重新赋值 可以保证满足多个重复字母的情况
      return ind > -1 ? (tempChars[ind] = true) : false;
    });
  }
  return originalChars;
};


