luxy.init();

let animationLoopInfo = {
  time: 1000,
  newX: 0,
  newY: 0,
  oldX: 0,
  oldY: 200,
};
var bounce = new Bounce();
bounce
  .translate({
    from: { x: 0, y: 0 },
    to: { x: 0, y: 85 },
    duration: 1000,
    easing: "bounce",
    stiffness: 5,
    bounce: 1,
  })
  .scale({
    from: { x: 1, y: 1 },
    to: { x: 0.1, y: 2.3 },
    easing: "sway",
    duration: 1000,
    delay: 65,
    stiffness: 2,
  });

for (let axisX = 0; axisX > -220; axisX--) {
  let quadraticInput = {
    width: (window.innerWidth / 100) * 25,
    p: -100,
    q: 100,
    a: 0,
    exponent: 0,
  };
  quadraticInput.a = 1 / quadraticInput.width;
  quadraticInput.exponent = Math.pow(axisX - quadraticInput.p, 2);

  let axisY = quadraticInput.a * quadraticInput.exponent + quadraticInput.q;
  animationLoopInfo.newX = axisX - animationLoopInfo.oldX;
  animationLoopInfo.newY = axisY - animationLoopInfo.oldY;
  console.log(animationLoopInfo.newY);
  animationLoopInfo.oldX = axisX;
  animationLoopInfo.oldY = axisY;

  bounce.translate({
    from: { x: 0, y: 0 },
    to: { x: animationLoopInfo.newX, y: animationLoopInfo.newY },
    bounce: 1,
    easing: "bounce",
    duration: 50,
    stiffness: 5,
    delay: animationLoopInfo.time,
  });
  animationLoopInfo.time += 10;
}
bounce.applyTo(document.querySelectorAll("#ball"));

// //Problems to solve
// using graphing to create a loop downwards (will need to make it so it the euqasion can change depending on the width of the screen)
// using vw to make the landing spots consistant for sizes
//looping the graph
