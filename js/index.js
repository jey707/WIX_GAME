const mainBg = document.querySelector(".main-bg");
const mainBgImgWidth = window.innerWidth;
const enterIntroImg = document.querySelector(".enter-intro-img");
const enterImgHover = document.querySelector(".intro-img-hover");
let lastScroll = 0;
let i = 0;
// console.log(window.pageYOffset);
// console.log(mainBgImgWidth);
mainBg.style.width = mainBgImgWidth;
// window.onload = function (e) {

// };
window.onload = function () {
  // setTimeout(function () {
  //   scrollTo(0, 0);
  // }, 100);
};
window.addEventListener("scroll", function (e) {
  bgImageX(window.scrollY);
});

function bgImageX(Y) {
  if (Y > lastScroll && Y < 700) {
    i -= 1;
    mainBg.style.backgroundPosition = `${i}px center`;
  } else if (Y < lastScroll) {
    i += 1;
    mainBg.style.backgroundPosition = `${i}px center`;
  }
  lastScroll = Y;
}
