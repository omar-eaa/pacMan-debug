// Your code here
const dodger = document.getElementById("dodger");

undefined;
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
undefined;
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
undefined;

// right area 👇
const dodgerRight = document.getElementById("dodger");

undefined;
function moveDodgerRight() {
  const leftNumbers = dodgerRight.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodgerRight.style.left = `${left + 1}px`;
  }
}
undefined;
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
undefined;
// arrow right 👇

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight()
//     }

//     if (e.key === moveDodgerRight()) {
//       // make your call to moveDodgerRight function here...
//     }
// });

//     function  moveDodgerRight {

//         if(

//         )
//       }
