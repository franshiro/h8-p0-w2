var jumlahSiswa = 40
var counter = 0

while (counter < jumlahSiswa){

    counter = counter + 1
    console.log(counter)
    cek = counter % 4
    if(cek == 0){
        console.log('kaplok')
    }
    else{
        console.log('pinter')
    }
}