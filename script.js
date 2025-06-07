window.addEventListener("keydown", function(e) {
  const setas = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  if (setas.includes(e.key)) {
    e.preventDefault();
  }
}, false);

