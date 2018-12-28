var panggilSplit = function(){
  var data = {
    kalimat : "saya sedang belajar js",
    kalimatbaru : []
  }
  var kalimat = data.kalimat
  var kalimatbaru = data.kalimatbaru

  kalimatbaru.push(kalimat.split(" "))

  for (var i = 0; i < kalimatbaru.length; i++){
      return kalimatbaru[i]
  }
}

console.log(panggilSplit())


function panggilSplit1(a){
  var data = {
    kalimat : "saya sedang belajar js",
    kalimatbaru : []
  }
  var kalimat = data.kalimat.split(a)
  var kalimatbaru = data.kalimatbaru

  kalimatbaru.push(kalimat)
  for (var i = 0; i < kalimatbaru.length; i++){
    return kalimatbaru[i]
  }
}
console.log(panggilSplit1(" "))
