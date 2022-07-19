const mainBg = document.querySelector(".main-bg");
const mainBgImgWidth = window.innerWidth;
const enterIntroImg = document.querySelector(".enter-intro-img");
const enterImgHover = document.querySelector(".intro-img-hover");
const gmBloc = document.querySelector(".game-intro-back");
const rext = gmBloc.getBoundingClientRect();

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
  plantopacity(window.scrollY);
  // console.log(e);
});

function bgImageX(Y) {
  // console.log("Y= ", Y);
  // console.log("lastscroll= ", lastScroll);
  if (Y > lastScroll && Y < 700) {
    i -= 1;
    mainBg.style.backgroundPosition = `${i}px center`;
  } else if (Y < lastScroll) {
    i += 1;
    mainBg.style.backgroundPosition = `${i}px center`;
  }
  if (Y > 1600 && Y < 2400) {
    // console.log("증가");
  } else if (Y < 1600 && Y > 2400) {
    // console.log("감소");
  }
  lastScroll = Y;
}
function plantopacity(Y) {
  console.log("rectY : ", rext.y);
  console.log(
    "clientH : ",
    document.querySelector(".game-intro-back").clientHeight
  );
  // console.log("inHegt : ", window.innerHeight);
  // console.log("scrollY : ", window.scrollY);
  // console.log("scrollY : ", parseFloat((window.scrollY / 3500).toPrecision(4)));
  const opc = parseFloat((Y / 4000).toPrecision(4));
  gmBloc.style.opacity = `${opc}`;
}
