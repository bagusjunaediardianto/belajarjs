function panggilkelipatan(a){
  var data = []

  for (var i = 1; i <= a; i++){
    if (i % 2 === 0){
      data+= ' NIO '
    }
    else if(i % 3 === 0){
      data+= ' MIC '
    }
    else{
      data+= i
    }
  }
  return data
}

console.log(panggilkelipatan(20))
