const output = document.querySelector(".output");
const search = document.querySelector(".search");

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.keyCode === 13) {
    searchOutput(search.value);
    search.value = "";
  }
});

searchOutput = (val) => {
  fetch(`http://numbersapi.com/${val}?json`)
    .then((response) => response.json())
    .then((data) => (output.innerHTML = data.text));
};
