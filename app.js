let bounce = new Bounce();

let calculationLoopInfo = {
  h: window.innerWidth / 4,
  a: 10,
  exponent: 0,
  numOfDigits: 10,
  topNumOfDigits: Math.pow(10, 15),
};
let animationLoopInfo = {
  newX: 0,
  newY: 0,
  oldX: 1,
  oldY: 0,
  time: 1450,
};

//Initiates inertia scrolling using luxy.js
luxy.init();
//Initiates bouncy ball animation using bounce.js and JavaSript
ballInit();

function ballInit() {
  formatAnimation();
  render();
}

function formatAnimation() {
  movementOne();
  movementTwo();
}

function findAnimationPath() {
  calculationLoopInfo.exponent = Math.pow(calculationLoopInfo.h, 2);
  for (let y = 1; !(y === 0); calculationLoopInfo.a--) {
    y =
      (calculationLoopInfo.a / calculationLoopInfo.numOfDigits) *
        calculationLoopInfo.exponent -
      300;
    console.log(y);
    if (y < 0) {
      calculationLoopInfo.a = (calculationLoopInfo.a + 1) * 10;
      calculationLoopInfo.numOfDigits = calculationLoopInfo.numOfDigits * 10;
    }
    if (calculationLoopInfo.numOfDigits >= calculationLoopInfo.topNumOfDigits) {
      y = 0;
    }
  }
}

function movementOne() {
  bounce
    .translate({
      from: { x: 0, y: 0 },
      to: { x: 0, y: 350 },
      duration: 12000,
      easing: "hardbounce",
      stiffness: 5,
      bounce: 1,
    })
    .scale({
      from: { x: 1, y: 1 },
      to: { x: 0.1, y: 2.3 },
      easing: "hardsway",
      duration: 10000,
      stiffness: 5,
      bounce: 1,
    })
    .scale({
      from: { x: 1, y: 1 },
      to: { x: 2.3, y: 0.1 },
      easing: "sway",
      duration: 2000,
      delay: 1200,
      stiffness: 5,
      bounce: 1,
    });
}

function movementTwo() {
  findAnimationPath();
  console.log(calculationLoopInfo.a, calculationLoopInfo.numOfDigits);
  for (
    let axisX = 1;
    !(
      axisX >= -(window.innerWidth / 2) - 1 &&
      axisX <= -(window.innerWidth / 2) + 1
    );
    axisX--
  ) {
    if (axisX === 1) {
      calculationLoopInfo.exponent = Math.pow(axisX + calculationLoopInfo.h, 2);
      animationLoopInfo.oldY =
        (calculationLoopInfo.a / calculationLoopInfo.numOfDigits) *
          calculationLoopInfo.exponent -
        300;
      axisX = 0;
    }

    calculationLoopInfo.exponent = Math.pow(axisX + calculationLoopInfo.h, 2);
    let axisY =
      (calculationLoopInfo.a / calculationLoopInfo.numOfDigits) *
        calculationLoopInfo.exponent -
      300;

    console.log(axisY + "this is Y", animationLoopInfo.oldY + "this is old Y");
    animationLoopInfo.newX = axisX - animationLoopInfo.oldX;
    animationLoopInfo.oldX = axisX;
    animationLoopInfo.newY = axisY - animationLoopInfo.oldY;
    animationLoopInfo.oldY = axisY;
    console.log(
      animationLoopInfo.newX,
      animationLoopInfo.newY + " this is new y"
    );
    bounce.translate({
      from: { x: 0, y: 0 },
      to: { x: animationLoopInfo.newX, y: animationLoopInfo.newY },
      bounce: 1,
      easing: "hardbounce",
      duration: 5,
      stiffness: 5,
      delay: animationLoopInfo.time,
    });
    animationLoopInfo.time += 5;
  }
}

function render() {
  bounce.applyTo(document.querySelectorAll("#ball"));
}
