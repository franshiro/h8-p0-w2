function xo(str){
  var total = {}
  str.split('').forEach(function(i){
  total[i] = (total[i] || 0) + 1
  })
  if(total.x === total.o){
    return true
  }
  else{
    return false
  }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true