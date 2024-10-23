


const square = document.getElementById('square');
let topPosition = 50;
let leftPosition = 50;

document.addEventListener('keydown', function(event) {
const step = 10;
switch (event.key) {
case 'ArrowUp': topPosition -= step; break;
case 'ArrowDown': topPosition += step; break;
case 'ArrowLeft': leftPosition -= step; break;
case 'ArrowRight': leftPosition += step; break;
}
square.style.top = topPosition + 'px';
square.style.left = leftPosition + 'px';
});