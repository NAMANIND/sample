/* Main navigation */
let panelsSection = document.querySelector("#panels-nm"),
  panelsContainer = document.querySelector("#panels-container-nm"),
  tween;
document.querySelectorAll(".anchor-nm").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // console.log("click");
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = cont.scrollWidth - innerWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false
      },
      duration: 1
    });
  });
});

/* Panels */
const cont = document.querySelector("#panels-container-nm");
const panels = gsap.utils.toArray("#panels-container-nm .panel-nm");

tween = gsap.to(panels, {
  x: () => -1 * (cont.scrollWidth - innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container-nm",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont.scrollWidth - innerWidth),
    onUpdate: (self) => {
    //  console.log(self.progress)
    }
  }
});


const texts = document.querySelectorAll(".circular-text .textf");

// Iterate over each selected text element
texts.forEach(function(text) {
  // Make the current text element circular with CircleType
  // You can find the full docs here: https://circletype.labwire.ca/
  const rotate = new CircleType(text).radius(65);

  // Add a scroll listener to the window object and rotate the current text element according to the scroll
  // We use * 0.15 to make the rotation look smoother
  window.addEventListener("scroll", function() {
    const rotation = window.scrollY * 0.15;
    text.style.transform = `rotate(${rotation}deg)`;
  });
});
