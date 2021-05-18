  
const btn = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

let j = 0;
cards[1].style.display = "none";

for (let i of btn) {
  i.addEventListener("click", (e) => {
    if (j === 0) {
      cards[0].style.display = "none";
      cards[1].style.display = "flex";
      j = 1;
    } else {
      cards[1].style.display = "none";
      cards[0].style.display = "flex";
      j = 0;
    }
  });
}