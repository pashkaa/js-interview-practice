function removeDuplicates(array) {
  const newSet = [...new Set(array)];
  return newSet;
}

console.log(removeDuplicates([1, 2, 2, 1]));
console.log(removeDuplicates(["a", "b", "a"])); // → ["a", "b"]
