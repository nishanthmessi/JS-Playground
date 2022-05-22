let i = 0;
const getColor = () => {
  let colors = ["orange", "deeppink", "purple", "crimson"];
  let bodyBg = document.querySelector(".bg-color");
  bodyBg.style.backgroundColor = colors[i];
  i = (i + 1) % colors.length;
}

setInterval(getColor, 2000);