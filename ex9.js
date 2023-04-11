//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
// Result = 1899

const dateObject = new Date('1900-10-10');
dateObject.lastYear = () => dateObject.getFullYear()-1;

console.log(dateObject.lastYear());

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
// Result = 1🗺, 2🗺, 3🗺

const array1 = [1,2,3];
console.log(array1.map(element => element + '🗺'));
