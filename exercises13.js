function xo(str){
  // var total = {}
  // str.split('').forEach(function(i){
  // total[i] = (total[i] || 0) + 1
  // })
  // console.log(total)
  // if(total.x === total.o){
  //   return true
  // }
  // else{
  //   return false
  // }
  var hitungX = 0
  var hitungO = 0
  for(var i=0; i<str.length; i++){
    if(str[i] === 'x'){
      // console.log('#')
      hitungX++
    }
    else{
      // console.log('*')
      hitungO++
    }
  }
  // console.log(hitungO)
  // console.log(hitungX)
  return hitungO === hitungX
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

