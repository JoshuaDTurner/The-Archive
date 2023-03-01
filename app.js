luxy.init();
let animationLoopInfo = {
  time: 100,
  newX: 0,
  newY: 0,
  oldX: 0,
  oldY: 0,
};
var bounce = new Bounce();
bounce
  .translate({
    from: { x: 0, y: 0 },
    to: { x: 0, y: 85 },
    duration: 2000,
    stiffness: 4,
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: "sway",
    duration: 800,
    delay: 65,
    stiffness: 2,
  });
for (let axisX = 0; axisX > -200; axisX--) {
  let exponent = Math.pow(axisX + 100, 2);
  let axisY = (-1 / (window.innerWidth / 10)) * exponent + 100;
  animationLoopInfo.newX = axisX - animationLoopInfo.oldX;
  animationLoopInfo.newY = axisY - animationLoopInfo.oldY;
  animationLoopInfo.oldY = axisY;
  animationLoopInfo.oldX = axisX;

  bounce.translate({
    from: { x: 0, y: 0 },
    to: { x: animationLoopInfo.newX, y: animationLoopInfo.newY },
    duration: 2000,
    stiffness: 4,
    delay: animationLoopInfo.time,
  });
  animationLoopInfo.time += 3;
  console.log("test");
}
bounce.applyTo(document.querySelectorAll("#ball"));
console.log(window.innerWidth);

1250;

// //Problems to solve
// using graphing to create a loop downwards (will need to make it so it the euqasion can change depending on the width of the screen)
// using vw to make the landing spots consistant for sizes
//looping the graph
