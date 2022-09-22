const aside = document.querySelector("aside");

const section = document.querySelectorAll("section");

aside.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    Array.from(aside.children).forEach((item) => {
      item.classList.remove("selected");

      section.forEach((el) => {
        el.classList.remove("active");
        if (el.firstElementChild.textContent.includes(e.target.textContent)) {
          el.classList.toggle("active");
        }
      });
    });
    e.target.classList.toggle("selected");
  }
});
