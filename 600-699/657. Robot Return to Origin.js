/**https://leetcode.com/problems/robot-return-to-origin/
 * 一个机器人 给定一个字符串包含四个方向的移动 U D L R 判断机器人最后是否回到原地
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
  const str = moves.split("");
  let x = 0,
    y = 0;
  for (let i = 0, a; (a = str[i++]); ) {
    switch (a) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x++;
        break;
      case "R":
        x++;
        break;
    }
  }
  return x === 0 && y === 0;
};
