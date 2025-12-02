function countCharacters(s) {
  const result = {};
  for (let i = 0; i < s.length; i++) {
    if (result[s[i]] === undefined) result[s[i]] = 1;
    else {
      result[s[i]] = +result[s[i]] + 1;
    }
  }
  return result;
}

console.log(countCharacters("stTress"));
