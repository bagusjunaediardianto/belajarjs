var panggilFor = ()=>{
  var i = 0
  var data = [10]

  for (i = 1; i <= data[0]; i++){
    if (i % 3 === 0)
    {
      console.log("Hai")
    }
    else if (i % 5 === 0){
      console.log("hai juga")
    }
    else{
      console.log(i)
    }

  }
}

panggilFor()
