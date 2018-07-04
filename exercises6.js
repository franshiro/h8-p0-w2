console.log('Exercises 6 no.1');
console.log('---------------------------------------------------------------')
console.log('LOOPING PERTAMA');

var counter = 0;

while(counter < 20){
    counter = counter + 2;
    console.log(counter + ' - I love coding');
}

console.log('---------------------------------------------------------------')
console.log('LOOPING KEDUA')

while(counter > 0){
    console.log(counter + ' - I will become fullstack developer');
    counter = counter - 2;
}

console.log('---------------------------------------------------------------')
console.log('Exercises 6 no.2');
console.log('LOOPING PERTAMA');
for(var i = 1; i <= 20 ; i++){
    console.log(i + ' - I love coding');
}

console.log('---------------------------------------------------------------')
console.log('LOOPING KEDUA');
for(var j=20; j > 0; j--){
    console.log(j + '- I will become fullstack developer')
}

console.log('---------------------------------------------------------------')
console.log('Exercises 6 no.3');
console.log('Exercises 6 no.3.1-2');
for(var i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i + ' - GENAP');
    }
    else{
        console.log(i + ' - GANJIL');
    }
}

console.log('---------------------------------------------------------------')
console.log('Exercises 6 no.3');
console.log('Exercises 6 no.3.2');
console.log('Penambahan 2')

for(var k = 1; k <= 100; k += 2){
    if(k % 3 == 0){
        console.log(k+ ' Kelipatan 3 ');
    }   
    else{
        console.log('""')
    }
}

console.log('---------------------------------------------------------------')
console.log('Exercises 6 no.3');
console.log('Exercises 6 no.3.2');
console.log('Penambahan 5');

for(var k6 = 1; k6 <= 100; k6 += 5){
    if(k6 % 6 == 0){
        console.log(k6 + ' Kelipatan 6 ');
    }   
    else{
        console.log('""')
    }
}

console.log('---------------------------------------------------------------')
console.log('Exercises 6 no.3');
console.log('Exercises 6 no.3.2');
console.log('Penambahan 9');

for(var k10 = 1; k10 <= 100; k10 += 9){
    if(k10 % 10 == 0){
        console.log(k10 + ' Kelipatan 10 ');
    }   
    else{
        console.log('""')
    }
}
