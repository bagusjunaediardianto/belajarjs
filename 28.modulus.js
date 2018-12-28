var panggilModulus = ()=>{
  var data = {
    angka1 : [10,12,15,19,24,30,37,45,54,64,75],
    angka2 : [1,2,3,4,5,6,5,4,3,2,1],
  }
  var angka1 = data.angka1
  var angka2 = data.angka2

  for (var i = 0; i < angka1.length;i++){
    console.log("-----------")
    console.log("angka pembagi :"+angka1[i])
    console.log("angka yang dibagi :"+angka2[i])
    console.log("angka modulus :"+angka1[i] % angka2[i])
    console.log("-----------")
  }
}

(panggilModulus())
