// Vars
let list = document.querySelector("ul");
let button = document.querySelector("button");
let score = "";

// Events
list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    let items = list.getElementsByTagName("li");
    for (element of items) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
    event.target.style.transition = "0.5s";
    event.target.style.backgroundColor = "hsl(216, 12%, 54%)";
    event.target.style.color = "white";
    score = event.target.innerHTML;
  }
});

button.addEventListener("click", function () {
  if (score !== "") {
    document.getElementsByClassName("assessment")[0].classList.add("hidden");
    document.getElementsByClassName("qualification")[0].classList.remove("hidden");
    document.getElementsByTagName("span")[0].innerHTML = `You selected ${score} out of 5`;
  } else {
    document.getElementsByTagName("fieldset")[0].style.border = "1px dashed hsl(25, 97%, 53%)";
    document.getElementsByTagName("legend")[0].style.color = "hsl(25, 97%, 53%)";
  }
});
