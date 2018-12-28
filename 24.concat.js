function panggilConcat(){
  var data = {
    kota : ["Jakarta","Serang","Bandung","Semarang","Sleman","Surabaya"],
    kabupaten : ["kep. seribu","cilegon","majalengka","brebes","bantul","kediri"],
  }
  var kota = data.kota
  var kabupaten = data.kabupaten

  for (var i = 0;i < (kota.length||kabupaten.length) ;i++){
    return kota.concat(kabupaten)
  }
}

console.log(panggilConcat())
