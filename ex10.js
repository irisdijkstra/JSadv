// How would you be able to create your own .bind() method using call or apply?

Function.prototype.bind = function(inputFn){
  if(typeof inputFn === Array) {
    inputFn.apply(this, this.arguments)
  } else {
    inputFn.call(this)
  };
};
