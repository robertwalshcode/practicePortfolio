document.addEventListener("DOMContentLoaded", function () {
  const options = document.getElementsByClassName("option");

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      for (let j = 0; j < options.length; j++) {
        options[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
});
