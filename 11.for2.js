function panggilFor(){
  var data = ''

  for (var i = 1; i < 10; i++){
    if(i % 3 === 0){
      data+= ' NIO '
    }else{
      data+= i
    }
  }
  return data
}

console.log(panggilFor())
