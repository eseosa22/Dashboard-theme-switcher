// a.addEventListener('click', function (e) {
//     screen.classList.toggle('d-none')
// })

// b.addEventListener('click', function () {
//     console.log("B was clicked")
// })

let checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  console.log(document.documentElement);
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
