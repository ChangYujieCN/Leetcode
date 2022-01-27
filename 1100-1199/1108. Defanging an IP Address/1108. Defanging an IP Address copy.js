/**
 * 仅仅就是将IP地址中的.替换成[.]
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split(".").join("[.]");
};

var defangIPaddr2 = function(address) {
    return address.replace(/\./g,"[.]");
};
