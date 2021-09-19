function addNumbers(num1, num2) {
  let result = 0;
  //argument array er moto kaj kora , toba akane array er moto push or pop kora jai na 
  // console.log(arguments([1])
  for (const num of arguments) {
    result = result + num;
  }

  return result;

}
const sum = addNumbers(20, 30, 40, 100)
console.log(sum);


// how to add a bing sring to use function 
function getFullName(firstName, lastName) {
  let fullName = '';
  for (const part of arguments) {
    fullName = fullName + part + ' ';

  }
  return fullName;
}

const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'Tomuk', 'Songket', 'bin', 'kumuk', ''songket);
console.log(name);
