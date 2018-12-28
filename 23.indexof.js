var panggilIndexof = (a)=>{
  var data = {
    kota : ["Serang","Jakarta Raya","Bandung","Semarang","Yogyakarta","Surabaya"],
    pemekarankota : [],
  }
  var kota = data.kota
  var pemekarankota = data.pemekarankota

  return kota.indexOf(a)
  }


console.log(panggilIndexof("Yogyakarta"))

var panggilIndexof1 = function(a){
  var data = {
    kota : ["kendal","batang","banyuwangi","nganjuk","cimahi"],
    pemekarankota : []
  }
  var kota = data.kota
  var pemekarankota = data.pemekarankota

  pemekarankota.push(kota)

  for (var i = 0; i < pemekarankota.length; i++){
    return pemekarankota[i].indexOf(a)
  }
}

console.log(panggilIndexof1("banyuwangi"))
