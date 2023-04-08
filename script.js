//Quesito 7
function changeH1(){
    const title=document.querySelector("h1");
    title.innerText = "Compra di più";
    
}
console.log(changeH1());

//Quesito 8
function changeBkg(){
    const background=document.querySelector("body");
    background.style.background = "lightyellow";
}
//console.log(changeBkg());

//Quesito 9
function changeAddress(){
    const address=document.getElementById("address");
    address.innerText = "Via Cavour";
}
console.log(changeAddress());

//Quesito 10
function addClassToLink(){
    const links=document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
     links[i].classList.add("amazonLink");
        
    }
}
//console.log(addClassToLink());

//Quesito 11
function imageClass(){
    const img=document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++){
     img[i].classList.add("visibility");
    }
}
//console.log(imageClass());

//Quesito 12
function priceColor(){
    const price = document.querySelectorAll(".price");
    let red = 200;
    let green = 200;
    let blue = 200;
    
    red = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    let randomColor = "rgb("+ red +","+ green +","+ blue +")";
    for (let i = 0; i < price.length; i++) {
        price[i].style.color = randomColor;
        
    }
}
//console.log(priceColor());

