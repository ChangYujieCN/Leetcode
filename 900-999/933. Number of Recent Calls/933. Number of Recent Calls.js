/**
 * 写一个类来作为一个计数器,这个计数器能计算出[t-3000,t]这个时间区间内所有的请求数
 */
var RecentCounter = function() {
  this.pings = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.pings.push(t);
  while (this.pings[0] < t - 3000) this.pings.shift();
  return this.pings.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
var RecentCounter2 = function() {
  this.pings = [];
};

RecentCounter2.prototype.binarySearch = function(t) {
  let low = 0,
    high = this.pings.length - 1,
    mid;

  while (low <= high) {
    mid = (low + high) >> 1;
    if (this.pings[mid] === t - 3000) {
      return mid;
    } else if (this.pings[mid] > t - 3000) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

RecentCounter2.prototype.ping = function(t) {
  this.pings.push(t);
  return this.pings.length - this.binarySearch(t);
};
