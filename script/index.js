const titles = document.querySelectorAll(".title");

const explanations = document.querySelectorAll(".explanation");

for (let x = 0; x < titles.length; x++) {
  titles[x].addEventListener("click", () => {
    explanations[x].classList.toggle("show");
  });
}

