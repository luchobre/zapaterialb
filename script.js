var menClick = document.getElementById("menIcon");
var menList = document.getElementById("men");

var womenClick = document.getElementById("womenIcon");
var womenList = document.getElementById("women");

var kidsClick = document.getElementById("kidsIcon");
var kidsList = document.getElementById("kids");

var offer = document.getElementById("offer");
var banner = document.getElementById("banner");

var burgerOpen = document.getElementById("burgerOpen");
// var burgerClose = document.getElementById("burgerClose");
var burgerMenu = document.getElementById("burgerMenu");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var img13 = document.getElementById("img13");
var img14 = document.getElementById("img14");
var img15 = document.getElementById("img15");
var img16 = document.getElementById("img16");

menClick.addEventListener("click", () => {
  menList.classList.toggle("show");
  womenList.classList.remove("show");
  kidsList.classList.remove("show");
});

womenClick.addEventListener("click", () => {
  womenList.classList.toggle("show");
  menList.classList.remove("show");
  kidsList.classList.remove("show");
});

kidsClick.addEventListener("click", () => {
  kidsList.classList.toggle("show");
  womenList.classList.remove("show");
  menList.classList.remove("show");
});

//////////////////////////////// CAMBIAR TEXTO DE BANNER//////////////////////////////
let text = [
  "3 CUOTAS SIN INTERÉS",
  "ENVÍOS GRATIS A PARTIR DE $20.000🚀",
  "TRABAJAMOS CON TODAS LAS TARJETAS💳",
];
let i = 0;
function changeOffer() {
  offer.textContent = text[i];
  i++;
  if (i >= text.length) {
    i = 0;
  }
}
setInterval(changeOffer, 2000);

////////////////////////////// CAMBIAR IMAGEN DE BANNER///////////////////////
let bannerChg = [
  'url("./images/banner.jpg")',
  'url("./images/banner1.jpg")',
  'url("./images/banner2.jpg")',
];
let pic = 1;
function changePic() {
  banner.style.backgroundImage = bannerChg[pic];
  pic++;
  if (pic > bannerChg.length -1) {
    pic = 0;
  }
}
setInterval(changePic, 4000);

//////////////////////////////// BURGER MENU//////////////////////////////
  burgerOpen.addEventListener("click", function() {
    burgerMenu.classList.toggle("show");
  });
//////////////////////////////// CATALOGO//////////////////////////////

function changeImg1() {
  img1.src = "./images/borcegos/1-a.webp";
}
function restoreImg1() {
  img1.src = "./images/borcegos/1.webp";
}
function changeImg2() {
  img2.src = "./images/borcegos/2-a.webp";
}
function restoreImg2() {
  img2.src = "./images/borcegos/2.webp";
}
function changeImg3() {
  img3.src = "./images/borcegos/3-a.webp";
}
function restoreImg3() {
  img3.src = "./images/borcegos/3.webp";
}
function changeImg4() {
  img4.src = "./images/borcegos/4-a.webp";
}
function restoreImg4() {
  img4.src = "./images/borcegos/4.webp";
}
function changeImg5() {
  img5.src = "./images/borcegos/5-a.webp";
}
function restoreImg5() {
  img5.src = "./images/borcegos/5.webp";
}
function changeImg6() {
  img6.src = "./images/borcegos/6-a.webp";
}
function restoreImg6() {
  img6.src = "./images/borcegos/6.webp";
}
function changeImg7() {
  img7.src = "./images/borcegos/7-a.webp";
}
function restoreImg7() {
  img7.src = "./images/borcegos/7.webp";
}
function changeImg8() {
  img8.src = "./images/borcegos/8-a.webp";
}
function restoreImg8() {
  img8.src = "./images/borcegos/8.webp";
}
function changeImg9() {
  img9.src = "./images/borcegos/9-a.webp";
}
function restoreImg9() {
  img9.src = "./images/borcegos/9.webp";
}
function changeImg10() {
  img10.src = "./images/borcegos/10-a.webp";
}
function restoreImg10() {
  img10.src = "./images/borcegos/10.webp";
}
function changeImg11() {
  img11.src = "./images/borcegos/11-a.webp";
}
function restoreImg11() {
  img11.src = "./images/borcegos/11.webp";
}
function changeImg12() {
  img12.src = "./images/borcegos/12-a.webp";
}
function restoreImg12() {
  img12.src = "./images/borcegos/12.webp";
}
function changeImg13() {
  img13.src = "./images/borcegos/13-a.webp";
}
function restoreImg13() {
  img13.src = "./images/borcegos/13.webp";
}
function changeImg14() {
  img14.src = "./images/borcegos/14-a.webp";
}
function restoreImg14() {
  img14.src = "./images/borcegos/14.webp";
}
function changeImg15() {
  img15.src = "./images/borcegos/15-a.webp";
}
function restoreImg15() {
  img15.src = "./images/borcegos/15.webp";
}
function changeImg16() {
  img16.src = "./images/borcegos/16-a.webp";
}
function restoreImg16() {
  img16.src = "./images/borcegos/16.webp";
}
