let div = document.querySelector("div");
let btn = document.querySelector("button");
let input = document.querySelector("#num");
let num = Number(input.value);

btn.addEventListener("click", (e) => {
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
