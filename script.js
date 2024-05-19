const btn = document.getElementById("button");

button.addEventListener("click", (e) => {
  console.log("Button clicked");
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  const container = document.querySelector(".container");
  container.appendChild(newBox);
});
