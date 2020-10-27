document.addEventListener("click", function (e) {
  if (!e.target.matches("button")) {
    return;
  }

  if (e.target.matches("[data-toggle]")) {
    document.querySelector("html").classList.toggle("dark");
  }
});
