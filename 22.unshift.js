var panggilUnshift = function (){
  var data = {
    propinsi : ["Banten", "DKI Jakarta","Jawa Barat", "Jawa Tengah", "Jawa Timur"],
    pemekaranProp : []
  }
  var propinsi = data.propinsi
  propinsi.unshift()

  var pemekaranProp = data.pemekaranProp
  pemekaranProp.push(propinsi)

  for (var i = 0; i < pemekaranProp.length;i++){
      return pemekaranProp[i]
  }

}

console.log(panggilUnshift())
