export function stringSum(string) {
  let result = 0;
  if (string === "") return 0;
  result = string.split(",").reduce((acc, curr) => {
    const current = Number(curr);
    return acc + current;
  }, 0);
  return result;
}

const result = stringSum("");
console.log("result", result);
