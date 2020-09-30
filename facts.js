const randomTrivia = document.querySelector(".random-trivia");
const randomYear = document.querySelector(".random-year");
const randomDate = document.querySelector(".random-date");
const randomMath = document.querySelector(".random-math");

const urlTrivia = "http://numbersapi.com/random/trivia?json";
const urlYear = "http://numbersapi.com/random/year?json";
const urlDate = "http://numbersapi.com/random/date?json";
const urlMath = "http://numbersapi.com/random/math?json";

randomTriviaFacts = () => {
  fetch(urlTrivia)
    .then((response) => response.json())
    .then((data) => {
      randomTrivia.innerHTML = data.text;
    });
};

randomYearFacts = () => {
  fetch(urlYear)
    .then((response) => response.json())
    .then((data) => {
      randomYear.innerHTML = data.text;
    });
};

randomDateFacts = () => {
  fetch(urlDate)
    .then((response) => response.json())
    .then((data) => {
      randomDate.innerHTML = data.text;
    });
};

randomMathFacts = () => {
  fetch(urlMath)
    .then((response) => response.json())
    .then((data) => {
      randomMath.innerHTML = data.text;
    });
};

randomTriviaFacts();
randomYearFacts();
randomDateFacts();
randomMathFacts();
