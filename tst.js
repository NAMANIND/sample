const targets = document.querySelectorAll('.js-target');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // entry.target.classList.remove('a-t');
      entry.target.classList.add('a-p');
      console.log("true");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

targets.forEach(target => {
  observer.observe(target);
});




const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop <= (10 * parseFloat(getComputedStyle(document.documentElement).fontSize));
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;


  return elementTop > (10 * parseFloat(getComputedStyle(document.documentElement).fontSize));
};

const displayScrollElement = (element) => {
  const elementTop = element.getBoundingClientRect().top;
  if (elementTop <= (window.innerHeight || document.documentElement.clientHeight) - 96) { // check if the element is at least 6rem from the top of the viewport
    element.classList.add("scrolled", "fade-in");
  }
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled", "fade-in");
};

const handleScrollAnimation = () => {
  let prevEl;
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      if (prevEl && prevEl !== el) {
        hideScrollElement(prevEl);
      }
      displayScrollElement(el);
      prevEl = el;
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


const scrollElements2 = document.querySelectorAll(".js-scroll2");

const elementInView2 = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (20 * parseFloat(getComputedStyle(document.documentElement).fontSize));
};

const elementOutofView2 = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  const elementBottom = el.getBoundingClientRect().bottom;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return elementTop >= viewportHeight || elementBottom <= 0;
};

const displayScrollElement2 = (element) => {
  if (!element.classList.contains("scrolled")) { // check if the element has already been scrolled
    element.classList.add("scrolled");
  }
};

const hideScrollElement2 = (element) => {
  element.classList.remove("scrolled"); // remove the desired classes
};

const handleScrollAnimation2 = () => {
  scrollElements2.forEach((el) => {
    if (elementInView2(el, 1.25)) {
      displayScrollElement2(el);
    } else if (elementOutofView2(el)) {
      hideScrollElement2(el);
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation2);
