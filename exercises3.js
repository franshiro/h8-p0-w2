var nama='frans';
var peran='Petinju';

if(nama == ''){
    console.log('Nama harus diisi!');
}
else
{
    if(peran == ''){
        console.log('halo '+nama+ ', Pilih peranmu untuk memulai game!' );
    }
    else if(peran == 'Warrior')
    {
        console.log('"Selamat datang di Dunia Proxytia, ' +nama+ '"');
        console.log('"Sebagai ' +peran+ ' hancurkan musuhmu"'); 
    }
    else if(peran == 'Priest')
    {
        console.log('"Selamat datang di Dunia Proxytia, ' +nama+ '"');
        console.log('"Sebagai ' +peran+ ' Lindungilah teman-temanmu"');  
    }
    else if(peran == 'Wizzard')
    {
        console.log('"Selamat datang di Dunia Proxytia, ' +nama+ '"');
        console.log('"Sebagai ' +peran+ ' Gunakan Sihirmu demi kebaikan"');  
    }
    else
    {
        console.log('"Selamat datang di Dunia Proxytia, ' +nama+ '"');
        console.log('"Peran Sebagai ' +peran+ ' masih Belum tersedia, silahkan memilih ulang"');  
    }
}