var panggilBilGenap = function(a,b){
  if (a % b === 0){
    return a+" : "+b+" menghasilkan bilangan genap = "+(a/b)
  }
  else{
    return a+" : "+b+" tidak menghasilkan bilangan genap = "+(a/b)
  }
}

console.log(panggilBilGenap(5,2))

function panggilBilGenap1(a){
  var i = 0
  var genap = []
  var ganjil = []
  for (i = a; i >= 1; i--){
    if (i % 2 !== 0) ganjil.push(i)
  }
  return ganjil
}
console.log(panggilBilGenap1(50))
