var panggilSplice = (a,b)=>{
  var data = {
    propinsi : ["Banten","DKI Jakarta","Jawa Barat","Jawa Timur"],
    pemekaranProp : []
  }
  data.propinsi.splice(3,0,"Jawa Tengah")
  var dataProp = data.propinsi
  var dataPemekaranProp = data.pemekaranProp

  dataPemekaranProp.push(dataProp)

  for (var i = 0; i < dataPemekaranProp.length; i++){
    dataPemekaranProp[i].splice(a,b)

    return dataPemekaranProp[i]
  }
}

console.log(panggilSplice(3,1))
