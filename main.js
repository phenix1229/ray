const Ray = () => {
  return obj = {

  length: 0,

  push: function(value){
    this[this.length] = value;
    this.length++;
  },

  pop: function(){
    const lastValue = this[this.length - 1];
    delete this[this.length -1];
    this.length--;
    return lastValue;
  },

  unshift: function(value){
    for (i = this.length; i > 0; i--){
      this[i] = this[i - 1];
    }
    this.length++
    this[0] = value;
  },

  shift: function(){
    const firstValue = this[0];
    delete this[0];
    for (i = 0; i < this.length; i++){
      this[i] = this[i + 1];
    }
    this.length--;
    return firstValue;
  },
}
}


module.exports = {
  Ray,
}