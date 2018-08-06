let prevButton = document.querySelector('#prevButton');
let nextButton = document.querySelector('#nextButton');
let imgArr = document.querySelectorAll('img');
let index = 0;

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
prevButton.disabled = true;

function showPrevImage() {
  imgArr[index].classList.add('hidden');
  imgArr[index-1].classList.remove('hidden');
  index--;
  nextButton.disabled = false;

  if (index === 0) {
  prevButton.disabled = true;
  }
}

function showNextImage() {
  imgArr[index].classList.add('hidden');
  imgArr[index+1].classList.remove('hidden');
  index++;
  prevButton.disabled = false;

  if (index === imgArr.length-1) {
   nextButton.disabled = true;
  }
}