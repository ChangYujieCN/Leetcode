/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 * 蔡勒公式
 * https://baike.baidu.com/item/%E8%94%A1%E5%8B%92%E5%85%AC%E5%BC%8F/10491767?fr=aladdin
 * https://en.wikipedia.org/wiki/Zeller%27s_congruence
 */
const dayOfTheWeek = function(day, month, year) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (month < 3) {
    month += 12;
    year -= 1;
  }
  //w：星期； w对7取模得：0-星期日，1-星期一，2-星期二，3-星期三，4-星期四，5-星期五，6-星期六
  //c：世纪（注：一般情况下，在公式中取值为已经过的世纪数，也就是年份除以一百的结果，而非正在进行的世纪，也就是现在常用的年份除以一百加一；不过如果年份是公元前的年份且非整百数的话，c应该等于所在世纪的编号，如公元前253年，是公元前3世纪，c就等于-3）
  //y：年（一般情况下是后两位数，如果是公元前的年份且非整百数，y应该等于cMOD100+100）
  //m：月（m大于等于3，小于等于14，即在蔡勒公式中，某年的1、2月要看作上一年的13、14月来计算，比如2003年1月1日要看作2002年的13月1日来计算）
  //d：日
  const century = Math.floor(year / 100);
  year = year % 100;
  const week = (Math.floor(century / 4) - 2 * century + year + Math.floor(year / 4) + Math.floor((13 * (month + 1)) / 5) + day - 1) % 7;
  return days[(week + 7) % 7];
};

const dayOfTheWeek2 = function(day, month, year) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date(`${year}-${month}-${day}`).getDay()];
};

// 西元年份除以4不可整除，為平年。
// 西元年份除以4可整除，且除以100不可整除，為閏年。
// 西元年份除以100可整除，且除以400不可整除，為平年
// 西元年份除以400可整除，為閏年。
// 题目给的条件从1971年开始  2019.12.26是周四  所以数组从Thursday开始
// 算出今天距离1971年有多少天  给定日期距离1971年有多少天  相减就可以获得相差天数  % 7
const dayOfTheWeek3 = function(day, month, year) {
  const sum = (arr, end) => {
    return arr.slice(0, end).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  };
  const hasLeapDay = (year) => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0);
  const days = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const daysSinceStart = (day, month, year) => {
    let numDays = 0;
    for (let i = year - 1; i > 1970; i--) {
      numDays += 365 + hasLeapDay(i);
    }
    numDays += sum(daysInMonth, month - 1);
    numDays += day;
    if (month > 2) numDays += hasLeapDay(year);
    return numDays;
  };

  const knowStart = daysSinceStart(26, 12, 2019);
  const d = daysSinceStart(day, month, year);
  const index = (d - knowStart) % 7;
  return index < 0 ? days[days.length + index] : days[index];
};

const dayOfTheWeek4 = (day, month, year) => {
  new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date(year, month - 1, day));
};
