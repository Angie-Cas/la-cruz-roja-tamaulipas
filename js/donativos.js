const carouselInner = document.getElementById("carousel-x-inner");
const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");
const item3 = document.getElementById("item-3");

function toItem1() {
    carouselInner.style.marginTop = "0px";
}

function toItem2() {
    carouselInner.style.marginTop = "-400px";
}

function toItem3() {
    carouselInner.style.marginTop = "-800px";
}

item1.addEventListener("click", function(){
   toItem1(); 
});

item2.addEventListener("click", function(){
    toItem2(); 
 });

 item3.addEventListener("click", function(){
    toItem3(); 
 });