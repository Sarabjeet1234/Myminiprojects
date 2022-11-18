const preloader = document.getElementById('preloader');
const cover = document.getElementsByClassName('cover')[0];

let count = 5;

const preload = () => {
if (count > 1){
  count = count - 1;
  preloader.innerHTML = `<div class="positioned">${count}</div>`;
} else if (count <= 1){
clearInterval();
preloader.remove();
 cover.style.display = "flex";
}
}
setInterval(preload,1000);
