var panggilJoin = function(){
  var data = {
    kota : ["Jakarta","Bandung","Semarang","Surabaya"]
  }
  var kota = data.kota

  return kota.join("-")
}

console.log(panggilJoin())
