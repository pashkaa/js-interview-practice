function truncateString(s, number) {
  if (s.length <= number) return s;
  return s.slice(0, number) + "...";
}

console.log(truncateString("Hello World", 5)); // має повернути "Hello..."
console.log(truncateString("JavaScript", 20)); // має повернути "JavaScript"
console.log(truncateString("OpenAI is cool", 10)); // має повернути "OpenAI is..."
і