let div = document.querySelector("div");
let createBtn = document.querySelector("#create");
let clearBtn = document.querySelector("#clear");

createBtn.addEventListener("click", (e) => {
  let input = document.querySelector("#num");
  let num = Number(input.value);
  for (let i = 0; i < num; i++) {
    let br = document.createElement("br");
    div.append(br);
    for (let j = 0; j <= i; j++) {
      let span = document.createElement("span");
      span.innerHTML = "*";
      div.append(span);
    }
  }
});

clearBtn.addEventListener("click", () => {
  div.innerHTML = "";
});
