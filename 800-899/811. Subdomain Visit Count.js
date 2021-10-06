/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
// ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  cpdomains.forEach((val, index) => {
    let i = val.indexOf(" ");
    //提取到第一个空格之前的数字
    let n = Number(val.substring(0, i));
    //记录下剩余的网址字符串
    let s = val.substring(i + 1);
    for (i = 0; i < s.length; i++) {
      if (s.charAt(i) === ".") {
          //如果检测到 .  代表剩余的域名肯定会被访问 直接添加到 map里
        let d = s.substring(i + 1);
        map.set(d, (map.get(d) || 0) + n);
      }
    }
    //本身的网址也肯定会被访问  所以也添加进去
    map.set(s, (map.get(s) || 0) + n);
  });
  let res = [];
  map.forEach((val, key) => {
    res.push(val + " " + key);
  });
  return res;
};
