document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const buttonNums = document.querySelectorAll(".num");
  const start = document.querySelector(".start");
  const equals = document.querySelector(".equals");
  const clean = document.querySelector(".clean");

  buttonNums.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.value;
      if (start.value === "0") {
        start.value = value;
      } else {
        start.value += value;
      }
    });
  });
  clean.addEventListener("click", () => {
    start.value = "0";
  });

  equals.addEventListener("click", () => {
    try {
      start.value = math.evaluate(start.value);
    } catch (error) {
      start.value = "Error";
    }
  });
});
