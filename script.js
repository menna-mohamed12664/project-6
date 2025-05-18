var log = document.getElementById("log")
var login = document.getElementById("login")
var allproduct =document.querySelectorAll(".container .item")
var ShowPrice =document.getElementById("ShowPrice")
var Purchase =document.getElementById("Purchase")
var Clear =document.getElementById("Clear")
var Warehouse =document.getElementById("Warehouse")
var YorWarehouse = document.getElementById("Yor Warehouse")
var home = document.getElementById("home")
totailPrice = 0

allproduct.forEach(function(item){
  item.onclick = function(){
     totailPrice += parseFloat(item.getAttribute("price"))
     Warehouse.innerHTML += item.textContent + "<br/>" + "<br/>"
      alert("Added to the shopping cart")

     if(Warehouse.innerHTML !==""){
      ShowPrice.style.display="block"
      Clear.style.display="block"
      Purchase.style.display="block"
     }
  }
})

ShowPrice.addEventListener("click", ()=>{
  if(totailPrice > 100000){
    alert("you have discound 20%")
    totailPrice -= 3000
  }
  Warehouse.innerHTML += "The Totail Price Is : " + totailPrice + "<br/>"
})

Clear.addEventListener("click" , ()=>{
  Warehouse.innerHTML=""
  Purchase.style.display = "none"
  Clear.style.display = "none"
  ShowPrice.style.display = "none"
})

Purchase.addEventListener("click",()=>{
  alert("The operation was successful.")
})

log.addEventListener("click" , ()=>{
   login.style.display ='block'
})
log.addEventListener("dblclick" , ()=>{
   login.style.display ='none'
})

window.addEventListener("scroll",()=>{
  if(window.scrollY > 100){
    home.style.display='block'
  }else{
      home.style.display='none'
  }
})

var password=""
while(password!=="1234"){
  password=prompt("Enter The Password Please : *1234*")
}
/////////////////////////////////////

var inputsearch = document.getElementById("search")
var productlist = document.querySelectorAll(".container .item")
var notfound = document.getElementById("notfound")

inputsearch.addEventListener("input",()=>{
  var inputvalue = inputsearch.value.toLowerCase()
  var anyvisible = false

  productlist.forEach((item)=>{
    if(item.textContent.toLowerCase().includes(inputvalue)){
      item.style.display="block"
      anyvisible = true
    }else{
      item.style.display="none"
    }
  })
  notfound.style.display = anyvisible ? "none" : "block"
}) 