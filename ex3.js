//recap bind(), apply(), call(), this
const array = [1,2,3];

function getMaxNumber(arr){
  const max = Math.max.apply(this, arr)
  return max
}

getMaxNumber(array)
