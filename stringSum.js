export const negate_msg = "negative number not allowed";
export function stringSum(string) {
  const negatives = [];
  let result = 0;
  if (string === "") return 0;
  result = string.split(",").reduce((acc, curr) => {
    const current = Number(curr);
    if (current < 0) negatives.push(curr);
    return acc + current;
  }, 0);
  return negatives.length ? `${negate_msg} ${negatives.join(",")}` : result;
}

const result = stringSum("-1,2,3,-4");
console.log("result", result);
