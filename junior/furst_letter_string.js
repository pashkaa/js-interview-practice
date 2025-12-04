function capitalizeWords(str) {
  const result = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  console.log(result);
}

capitalizeWords("hello world");
capitalizeWords("javaScript is fun");
