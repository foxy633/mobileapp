console.clear;
console.log('test');

let elements = document.querySelectorAll('h2::first-line');

for (let elem of elements) {
  console.log(elem.innerHTML); // "тест", "пройден"
  //   if len elem.
}
