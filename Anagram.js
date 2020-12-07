function getAnagramCount(data) {
  let list = [];
  data.split(" ").forEach((element) => {
    list = [...list, element.split("").sort().join("")];
  });
  const result = list.reduce((acc, element) => {
    if (typeof acc[element] === "undefined" && element.length > 1) {
      acc[element] = 1;
    } else {
      acc[element] += 1;
    }
    return acc;
  }, {});

  let count = 0;
  for (let item in result) {
    if (result[item] > 1) {
      count = count + 1;
    }
  }
  return count;
}

console.log(getAnagramCount("aa aa gdo dog ogd")); //2
console.log(getAnagramCount("a c b c run unr nru")); //1
console.log(getAnagramCount("k k k foo bar")); //0
