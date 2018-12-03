var ifswitch = ()=>{
  var indeks = 101
  var grade = 1
  if(indeks >90 && indeks <= 100){
    grade = 1
  }
  else if (indeks >80 && indeks <= 90){
    grade = 2
  }
  else if (indeks >70 && indeks <= 80){
    grade = 3
  }
  else if (indeks >60 && indeks <= 70){
    grade = 4
  }
  else if (indeks >= 0 && indeks <= 60){
    grade = 5
  }
  else{
    grade = 0
    console.log("undefined")
  }

  switch(grade){
    case 1 :
    console.log("Sangat Baik")
    break

    case 2:
    console.log("Baik")
    break

    case 3:
    console.log("Cukup")
    break

    case 4:
    console.log("belum cukup")
    break

    case 5:
    console.log("kurang")
    break
  }
}

ifswitch()
