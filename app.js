luxy.init();
let animationLoopInfo = {
  time: 30,
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
for (i = 0; i < 10; )
  bounce
    .scale({
      from: { x: 1, y: 1 },
      to: { x: 1, y: 1 },
      easing: "sway",
      duration: 300,
      delay: 30,
    })
    .translate({
      from: { x: 0, y: 0 },
      to: { x: -100, y: 20 },
      duration: 2000,
      stiffness: 4,
      delay: 3195,
    });

bounce.define("my-animation");

// //Problems to solve
// using graphing to create a loop downwards (will need to make it so it the euqasion can change depending on the width of the screen)
// using vw to make the landing spots consistant for sizes
//looping the graph

for (let axisX = 100; axisX > -100; x++) {
  let axisY = (-1 / 100) * (axisX * axisX) + 100;
  animationLoopInfo.newX = axisX - animationLoopInfo.oldX;
  animationLoopInfo.newY = axisY - animationLoopInfo.oldY;

  bounce.translate({
    from: { x: 0, y: 0 },
    to: { x: 0, y: 0 },
    duration: 2000,
    stiffness: 4,
    delay: time,
  });
  time = 1;
}
