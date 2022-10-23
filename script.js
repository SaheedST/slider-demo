"use strict";

const landscapeSlider = document.querySelector(".landscape_slider");
const landscapeSlideArray = Array.from(landscapeSlider.children);
let countClick = 0;
let moveSlides;

const imageSelector = document.querySelector(".selectors_container");
const selectorDot = `<div class="selector"></div>`;

const currentSlideNumber = document.querySelector(".image_number");
const totalNoSlides = document.querySelector(".total_number");

const showSlideNumber = () => {
  slideNumber.insertAdjacentHTML("afterbegin", imageNumberHTML);
};

// showSlideNumber();

for (let i = 0; i < landscapeSlideArray.length; i++) {
  imageSelector.insertAdjacentHTML("afterbegin", selectorDot);
}
const selectorsArray = Array.from(imageSelector.children);

currentSlideNumber.textContent = countClick + 1;
totalNoSlides.textContent = landscapeSlideArray.length;

const slideRuns = () => {
moveSlides = setInterval(() => {
  if (
    landscapeSlideArray[landscapeSlideArray.length - 1].style.translate === "0%"
  ) {
    countClick = -1;
  } else {
    countClick = countClick;
  }

  countClick++;
  landscapeSlideArray.forEach((slide, index) => {
    slide.style.translate = `${100 * (index - countClick)}%`;
  });

  currentSlideNumber.textContent = countClick + 1;
  totalNoSlides.textContent = landscapeSlideArray.length;

  // what is the index for translate === 0%
  const idx = landscapeSlideArray.findIndex(
    (element) => element.style.translate === "0%"
  );

  //   reset all colors back to white
  selectorsArray.map((selector) => (selector.style.background = "white"));

  // change color of dot that corresponds with the image
  selectorsArray[idx].style.background = "yellow";
}, 5000);
    
}

slideRuns();

landscapeSlider.addEventListener('click', ()=>{
clearInterval(moveSlides)
console.log('slider stopped')
})


imageSelector.addEventListener("click", (e) => {
  const targetDot = e.target;
  const dotIndex = selectorsArray.findIndex((dot) => dot === targetDot);

  countClick = dotIndex;
  landscapeSlideArray.forEach((slide, index) => {
    slide.style.translate = `${100 * (index - countClick)}%`;
  });

  currentSlideNumber.textContent = countClick + 1;
  totalNoSlides.textContent = landscapeSlideArray.length;

  //   reset all colors back to white
  selectorsArray.map((selector) => (selector.style.background = "white"));

  // change color of dot that corresponds with the image
  selectorsArray[dotIndex].style.background = "yellow";

  //   showSlideNumber();

  slideRuns()
});

// selectorsArray[2].style.background='blue'

landscapeSlideArray.forEach((slide, index) => {
  slide.style.translate = `${100 * index}%`;
});

selectorsArray[countClick].style.background = "yellow";

const fwdButton = document.querySelector(".btn_right");
const backButton = document.querySelector(".btn_left");

fwdButton.addEventListener("click", () => {
  if (
    landscapeSlideArray[landscapeSlideArray.length - 1].style.translate === "0%"
  ) {
    countClick = -1;
  } else {
    countClick = countClick;
  }

  countClick++;
  landscapeSlideArray.forEach((slide, index) => {
    slide.style.translate = `${100 * (index - countClick)}%`;
  });

  currentSlideNumber.textContent = countClick + 1;
  totalNoSlides.textContent = landscapeSlideArray.length;

  // what is the index for translate === 0%
  const idx = landscapeSlideArray.findIndex(
    (element) => element.style.translate === "0%"
  );

  //   reset all colors back to white
  selectorsArray.map((selector) => (selector.style.background = "white"));

  // change color of dot that corresponds with the image
  selectorsArray[idx].style.background = "yellow";

  //   showSlideNumber();
  slideRuns()
});

backButton.addEventListener("click", () => {
  if (landscapeSlideArray[0].style.translate === "0%") {
    countClick = landscapeSlideArray.length;
  } else {
    countClick = countClick;
  }

  countClick--;

  landscapeSlideArray.forEach((slide, index) => {
    slide.style.translate = `${100 * (index - countClick)}%`;
  });

  currentSlideNumber.textContent = countClick + 1;
  totalNoSlides.textContent = landscapeSlideArray.length;

  // what is the index for translate === 0%
  const idx = landscapeSlideArray.findIndex(
    (element) => element.style.translate === "0%"
  );

  //   reset all colors back to white
  selectorsArray.map((selector) => (selector.style.background = "white"));

  // change color of dot that corresponds with the image
  selectorsArray[idx].style.background = "yellow";

  //   showSlideNumber();
  slideRuns()
});

// use thumbnails to select specific image

// indicate the current slide number relateive to total

// re-factor code
