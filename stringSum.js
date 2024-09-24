export const negate_msg = "negative number not allowed";
export const delimiter = /[,s;|:\t\r\n/\\]+/;
export function stringSum(string) {
  const negatives = [];
  let result = 0;
  if (string === "") return 0;
  result = string.split(delimiter).reduce((acc, curr) => {
    const current = Number(curr);
    if (current < 0) negatives.push(curr);
    return acc + current;
  }, 0);
  return negatives.length ? `${negate_msg} ${negatives.join(",")}` : result;
}

console.log(stringSum("-1,2,3,-4"));
console.log(stringSum("1,2,3,4"));
console.log(stringSum("//;1\n;2"));
console.log(stringSum("//;1\n;-2;-3\n-4"));
console.log(stringSum(""));
