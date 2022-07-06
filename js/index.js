const mainBg = document.querySelector(".main-bg");
const mainBgImgWidth = window.innerWidth;
console.log(mainBgImgWidth);
mainBg.style.width = mainBgImgWidth;
// window.onload = function (e) {

// };

window.addEventListener("scroll", function (e) {
  console.log(e);
  console.log(window.scrollY);
});
