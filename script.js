const h1 = document.querySelector(".h1");
const span = document.querySelector(".span");
const pic = document.querySelector(".pics");
const lis = document.querySelectorAll(".a");
const p = document.querySelector(".about");
const body=document.querySelector(".containe");
const skillsBox = document.querySelectorAll(".skills-box");
h1.addEventListener("mouseover", () => {
  span.style.transition = "all 0.4s 0s linear";
  span.style.color = "#F1FAEE";
});
h1.addEventListener("mouseout", () => {
  span.style.transition = "all 0.4s 0s linear";
  span.style.color = "#EF233C";
});
pic.addEventListener("mouseover", () => {
  pic.style.transition = "all .4s linear";
  pic.style.scale = "1.05";
});
pic.addEventListener("mouseout", () => {
  pic.style.transition = "all .4s linear";
  pic.style.scale = "1";
});
for (let li of lis) {
  li.addEventListener("mouseover", () => {
    li.style.transition = "all 0.4s  linear";
    li.style.color = "#EF233C";
  });
  li.addEventListener("mouseout", () => {
    li.style.transition = "all 0.4s linear";
    li.style.color = "#F1FAEE";
  });
  li.addEventListener("click",()=>{
    body.style.transition="all 1s"
  })
}
p.addEventListener("mouseover", () => {
  p.style.color = "#EF233C";
  p.style.transition = "all 0.4s linear";
});
p.addEventListener("mouseout", () => {
  p.style.color = "#F1FAEE";
  p.style.transition = "all 0.4s linear";
});
for(let skillBox of skillsBox){
skillBox.addEventListener("mouseover", () => {
    skillBox.style.scale = "1.2";
    skillBox.style.transition = "all 1s";
  
});
skillBox.addEventListener("mouseout", () => {

    skillBox.style.scale = "1";
    skillBox.style.transition = "all 1s";
  
});
}

//Slider
let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
let refreshSlider = setInterval(() => {
  next.click();
}, 5000);
function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lastactive = document.querySelector(".slider .dots li.active");
  lastactive.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}
dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
