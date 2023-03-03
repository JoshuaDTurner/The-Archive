luxy.init();
let scrollInfo = {
  currentScrollTop: 0,
  lastScrollTop: 0,
  vector: 0,
};

document.addEventListener("scroll", scrollCheck);

function scrollCheck() {
  scrollInfo.currentScrollTop = document.documentElement.scrollTop;
  if (scrollInfo.currentScrollTop > scrollInfo.lastScrollTop) {
    scrollInfo.vector = 1;
  }
  if (scrollInfo.currentScrollTop < scrollInfo.lastScrollTop) {
    scrollInfo.vector = -1;
  }
  scrollInfo.lastScrollTop = scrollInfo.currentScrollTop;
  console.log(scrollInfo.vector);
  render();
}

function render() {
  const element = document.querySelector(".spotLight").style;
  console.log("hi");
  element.setProperty("--current-pos", element.transform);
}
