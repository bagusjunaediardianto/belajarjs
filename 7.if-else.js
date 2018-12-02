//contoh function dengan menampung dalam variabel
var ifelse = function(){
  var nilai = 10

  if (nilai === 10) console.log("Sepuluh")
  else console.log("Bukan sepuluh")
}

//contoh function dengan pemanggilan lewat method function
function ifelse1(){
   var nilai = 9

   if (nilai === 9){
     console.log("sembilan")
   }
   else {
     console.log("Bukan sembilan")
   }
}

//contoh pemanggilan function dengan variabel
var ifelse2 = ()=> {
  var nilai = 8

  if(nilai === 8){
    console.log("Delapan")
  }
  else{
    console.log("Bukan delapan")
  }
}
ifelse()
ifelse1()
ifelse2()
