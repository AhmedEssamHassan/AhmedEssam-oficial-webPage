const titles = document.querySelectorAll(".title");

const paragraphs = document.querySelectorAll(".explanation");

for (let x = 0; x < titles.length; x++) {
  titles[x].addEventListener("click", () => {
    paragraphs[x].classList.toggle("show");
  });
}
