const array1 = ["emre", "EMRE"];

function includesCi(arr, b) {
  let check = false;
  arr.forEach((element) => {
    if (element.toLowerCase() === b.toLowerCase()) {
      check = true;
    }
  });
  return check;
}

console.log(includesCi(array1, "emRe"));
