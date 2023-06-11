const click = document.querySelector(".click");
const lid = document.querySelector(".one");
const letter = document.querySelector(".letter");
const sectionTwo = document.getElementById("section-two");

const audio = document.getElementById("audio");

click.addEventListener("click", (e) => {
  lid.classList.add("animate");
  letter.classList.add("animate-paper");
  audio.play();

  setTimeout(() => {
    sectionTwo.scrollIntoView();
  }, 3000);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log("hi");
    }
  });
});

const hiddenElem = document.querySelectorAll(".hidden");

hiddenElem.forEach((el) => observer.observe(el));
