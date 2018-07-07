
function konversiMenit(menit) {
    // you can only write your code here!
    var jamStr = Math.floor(menit/60)
    var menitStr = menit % 60

    if(menitStr < 10){
        return jamStr + ':' + '0' + menitStr
    }
    else{
        return jamStr + ':' + menitStr
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00