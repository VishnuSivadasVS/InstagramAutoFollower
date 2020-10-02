(() => {
let i = 5;
const followInterval = setInterval(() => {
if (i >= 50) {
clearInterval(followInterval);
return;
}
const buttons = document.querySelectorAll('button');
const nextButton = buttons[i];
nextButton.click();
i ++;
}, 2000);
console.log("intervalID => ",followInterval);
})();
