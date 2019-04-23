// document.documentElement.classList.add('chrome-slider');
//
// const range = document.querySelectorAll('input[type="range"]');
// document.querySelectorAll(`p[data-key="6"]`).forEach(item => item.classList.add('c-survey-slider__numbers--bolder'));
//
// range.forEach(item => item.addEventListener('input', (e) => {
//  const listElements = e.target.parentElement.parentElement.querySelectorAll(`p`);
//  listElements.forEach(p => p.dataset.key === e.target.value ?
//      p.classList.add('c-survey-slider__numbers--bolder') : p.classList.remove('c-survey-slider__numbers--bolder'));
//  item.style.setProperty('--val', +e.target.value);
// }));
//
// const surveyDiv = document.querySelector('.c-survey__form');
// const overlayDiv = document.createElement("div")
// overlayDiv.innerHTML =  '   <div class="c-survey__overlay">' +
//     '        <div class="c-survey__overlay--loader">' +
//     '            <div class="css-folding-cube">' +
//     '                <div class="css-cube1 css-cube"></div>' +
//     '                <div class="css-cube2 css-cube"></div>' +
//     '                <div class="css-cube4 css-cube"></div>' +
//     '                <div class="css-cube3 css-cube"></div>' +
//     '            </div>' +
//     '        </div>' +
//     '    </div>';
// surveyDiv.appendChild(overlayDiv);
// const submitButton = document.querySelector('.c-survey__cta');
// const overlay = document.querySelector('.c-survey__overlay');
// var form = $("form");
//
// /*const displayOverlayDiv = (e) => {
//  e.preventDefault();
//  if (form.valid()) {
//   overlay.style.display = "block";
//  }
//
// };*/
//
// const displayOverlayDiv = (e) => {
//  e.preventDefault();
//  overlay.style.display = "block";
// };
//
// submitButton.addEventListener('click', displayOverlayDiv);

"use strict";

document.documentElement.classList.add('chrome-slider');
var range = document.querySelectorAll('input[type="range"]');
document.querySelectorAll("p[data-key=\"6\"]").forEach(function (item) {
 return item.classList.add('c-survey-slider__numbers--bolder');
});
range.forEach(function (item) {
 return item.addEventListener('input', function (e) {
  var listElements = e.target.parentElement.parentElement.querySelectorAll("p");
  listElements.forEach(function (p) {
   return p.dataset.key === e.target.value ? p.classList.add('c-survey-slider__numbers--bolder') : p.classList.remove('c-survey-slider__numbers--bolder');
  });
  item.style.setProperty('--val', +e.target.value);
 });
});
var surveyDiv = document.querySelector('.c-survey__form');
var overlayDiv = document.createElement("div");
overlayDiv.innerHTML = '   <div class="c-survey__overlay">' + '        <div class="c-survey__overlay--loader">' + '            <div class="css-folding-cube">' + '                <div class="css-cube1 css-cube"></div>' + '                <div class="css-cube2 css-cube"></div>' + '                <div class="css-cube4 css-cube"></div>' + '                <div class="css-cube3 css-cube"></div>' + '            </div>' + '        </div>' + '    </div>';
surveyDiv.appendChild(overlayDiv);
var submitButton = document.querySelector('.c-survey__cta');
var overlay = document.querySelector('.c-survey__overlay');
var form = $("form");
/*const displayOverlayDiv = (e) => {
 e.preventDefault();
 if (form.valid()) {
  overlay.style.display = "block";
 }

};*/

var displayOverlayDiv = function displayOverlayDiv(e) {
 e.preventDefault();
 overlay.style.display = "block";
};

submitButton.addEventListener('click', displayOverlayDiv);