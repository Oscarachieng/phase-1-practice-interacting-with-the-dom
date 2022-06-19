// Grabbing the elements
const start = document.querySelector("#start");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");

let counter = document.querySelector("#counter");
let pauseEffect;

start.addEventListener("click", function () {
  pauseEffect = setInterval(() => {
    counter.textContent++;
  }, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(pauseEffect);
});

minus.addEventListener("click", function (event) {
  // event.preventDefault();
  /*
    1.Grad the counter.
    2.Change the value to integer.
    3.Reduce the counter value by 1 on each click.
  */
  counter.textContent--;
  console.log(counter.textContent);
});

plus.addEventListener("click", function (event) {
  counter.innerText++;
  console.log(counter.innerText);
});

heart.addEventListener("click", function (event) {
  const likes = document.querySelector(".likes");
  const heartLike = document.createElement("li");
  heartLike.textContent = `I like it at ${counter.innerText} seconds.`;
  likes.appendChild(heartLike);
  likes.style.color = "green";
  likes.style.listStyle = "none";
  heartLike.style.list_style = "none";
});

const form = document.querySelector("#comment-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.querySelector("#comment-input");
  const li = document.createElement("li");
  li.textContent = input.value;
  const list = document.querySelector("#leave-comment");
  list.appendChild(li);
  list.style.listStyle = "none";
  li.style.backgroundColor = "skyblue";
  li.style.padding = "5px";
  li.style.width = "15%";
  li.style.margin = "3px";
  li.style.textAlign = "center";
  form.reset();
});
