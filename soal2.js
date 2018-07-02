var tahun = 1900

var remainder = tahun % 4
var remainder2 = tahun % 100
var remainder3 = tahun % 400

if(remainder == 0){
    if(remainder2 == 0){
        if(remainder3 == 0){
            console.log('100% kabisat')
        }
        else{
            console.log('ternyata bukan kabisat')
        }
    }
    else{
        console.log('pasti kabisat')
    }
}
else{
    console.log("bukan kabisat")
}