var pesan1 ="hello"
let pesan2 = "coding"

if(true){
  var pesan1 = 1
  let pesan2 = 2
}

console.log(pesan1)
//variable pesan2 akan tetap tercetak / dikenali sebagai output yang pertama,
//karena variabel let merupakan variabel lokal, bukan bersifat global seperti halnya variable var
console.log(pesan2)
