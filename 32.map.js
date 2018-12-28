function panggilMap(){
  var data = {
    kota : ["jakarta","bandung","surabaya"]
  }
  var datakota = data.kota

  datakota.map((item,index,array)=>{
    console.log(item)
    console.log(index)
    console.log(array)
  })
}

panggilMap()
