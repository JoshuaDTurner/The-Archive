luxy.init();

// var bounce = new Bounce();
// bounce
//   .translate({
//     from: { x: 0, y: 0 },
//     to: { x: 0, y: 350 },
//     duration: 1000,
//     easing: "bounce",
//     stiffness: 5,
//     bounce: 1,
//   })
//   .scale({
//     from: { x: 1, y: 1 },
//     to: { x: 0.1, y: 2.3 },
//     easing: "sway",
//     duration: 1000,
//     delay: 65,
//     stiffness: 2,
//   });
// // animationLoopInfo.startY = window.innerWidth / 2;
// // animationLoopInfo.oldY = animationLoopInfo.startY;
// // let mathInt = animationLoopInfo.oldY / 3;
// // console.log(animationLoopInfo.oldY);
// // for (let axisX = 0; axisX > -animationLoopInfo.startY; axisX--) {
// // let quadraticInput = {
// //   width: mathInt,
// //   p: -mathInt,
// //   q: mathInt,
// //   a: 0,
// //   exponent: 0,
// // };
// // quadraticInput.a = 1 / mathInt;
// // quadraticInput.exponent = Math.pow(axisX - quadraticInput.p, 2);

// // let axisY = quadraticInput.a * quadraticInput.exponent + quadraticInput.q;
// // animationLoopInfo.newX = axisX - animationLoopInfo.oldX;
// // animationLoopInfo.newY = axisY - animationLoopInfo.oldY;
// // console.log(animationLoopInfo.newY);
// // console.log(axisY);
// // animationLoopInfo.oldX = axisX;
// // animationLoopInfo.oldY = axisY;

// // bounce.translate({
// //   from: { x: 0, y: 0 },
// //   to: { x: animationLoopInfo.newX, y: animationLoopInfo.newY },
// //   bounce: 1,
// //   easing: "bounce",
// //   duration: 5,
// //   stiffness: 5,
// //   delay: animationLoopInfo.time,
// // });
// // animationLoopInfo.time += 10;
// // }
// bounce.applyTo(document.querySelectorAll("#ball"));

// //Problems to solve
// using graphing to create a loop downwards (will need to make it so it the euqasion can change depending on the width of the screen)
// using vw to make the landing spots consistant for sizes
//looping the graph

let i = {
  h: 0,
  a: 100,
  exponent: 0,
};

i.h = window.innerWidth / 4;
i.exponent = Math.pow(i.h, 2);

for (let y = 1; !(y === 0); i.a--) {
  y = -(i.a / 100) * i.exponent + 100;
  console.log(y, i.a);
}
