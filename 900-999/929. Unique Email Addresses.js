/**https://leetcode.com/problems/unique-email-addresses/
 * 在一个电子邮箱地址中如果有 . 号，则点号可以省略 如"alice.z@leetcode.com" = "alicez@leetcode.com"
 * 如果有 + 号，则 + 号后面的直到 @ 前的所有字符都会被忽略 m.y+name@email.com = my@email.com，给定一组邮箱，确定其中有几个独特的邮箱（因为可能重复）
 * @param {string[]} emails
 * @return {number}
 */

const numUniqueEmails = emails =>
  new Set(
    emails.map(
      mail =>
        `${mail.split("@")[0].replace(/\+.*$|\./g, "")}@${mail.split("@")[1]}`
    )
  ).size;

/*-------------------------------------------*/
const trimEmail = email => {
  let trimmed = "";
  let ignore = false;
  let domain = false;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") domain = true;
    if (email[i] === "+") ignore = true;
    if ((!ignore && email[i] !== ".") || domain) trimmed += email[i];
  }
  return trimmed;
};
const numUniqueEmails2 = emails =>
  new Set(emails.map(email => trimEmail(email))).size;
