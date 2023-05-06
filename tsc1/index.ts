 export {} 
  let resv:any  = document.querySelector(".projt") 
  let retrn:any  = document.getElementsByClassName(".enter") 

interface Objv{url:string, comment:string}

  var showc :Objv[] = [{url:"./nature.jpg",comment:"good"},{url:"./northern.jpg",comment:"better"}]
// const resp = title?.textContent

 resv.style.fontSize= "77px"
resv.textContent= "hello there"


 console.log (resv?.textContent)


document.body.style.backgroundColor= "red"
var person:string = "john"
console.log(person)

window.addEventListener("DOMContentLoaded",function showv():void{
  const result = showc.map((item:Objv)=>{
    const {url,comment}=item
  return `<img src=${url} alt="logo">
 <h5>${comment}</h5> `  }).join("")
  retrn.innerHTML= result
})