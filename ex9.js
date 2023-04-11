//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
// Result = 1899

Date.prototype.lastYear = function () {
   return this.getFullYear()-1;
};

console.log(new Date('1900-10-10').lastYear());

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
// Result = 1🗺, 2🗺, 3🗺

Array.prototype.map = function () {
  let array = []
  this.forEach(element => {
    array.push(element + '🗺')
  });
  return array
};

console.log([1,2,3].map());
