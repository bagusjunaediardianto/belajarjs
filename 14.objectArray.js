function panggilObjectArray(){
  var data = {
    nama : ["bagus","dewa","chandra","andini"],
    alamat : ["jakarta","bandung","semarang","surabaya"],
    jeniskelamin : ["laki-laki","laki-laki","laki-laki","perempuan"],
  }
  console.log(data.nama[0])
  console.log(data.alamat[0])
  console.log(data.jeniskelamin[0])
}

panggilObjectArray()

var panggilObjectArray1 = function(){
  var data = {
    benua : ["Asia","Amerika","Afrika","Eropa"],
    negara : ["Indonesia","USA","Afrika Selatan","Inggris"],
    ibukota : ["Jakarta","Washington DC","Cape Town","London"],
  }
  for (var i = 0 ; i < (data.benua.length||data.negara.length||data.ibukota.length); i++){
    console.log(i+1,data.benua[i])
    console.log("--------------")
    console.log(i+1,data.negara[i])
    console.log("--------------")
    console.log(i+1,data.ibukota[i])
    console.log("--------------")
  }
}

panggilObjectArray1()
