const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);
const friends = ['kalam', 'salam', 'ami', 'tumi'];
const sortFriends = friends.sort();
//console.log(sortFriends);
// reverse
const reverseFriends = friends.reverse();
console.log(reverseFriends);

//akstha  sort and reverse korar  system
const sortedReversresFriends = friends.sort().reverse();
console.log(sortedReversresFriends);

//number sorting fun
const bigNumber = [66, 58, 81, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumber.sort(function (a, b) {
  return a - b;
})
console.log(sortedBigNumbers);
