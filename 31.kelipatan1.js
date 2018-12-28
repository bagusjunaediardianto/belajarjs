var panggilkelipatan = (a,b)=>{
  var data = []

  for (var i = a ; i <= b ; i++){
    if (i % 5 === 0){
      data.push(i)
    }
  }
  return data
}


console.log(panggilkelipatan(1,50))
