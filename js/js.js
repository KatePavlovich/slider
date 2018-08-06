let prevButton = document.querySelector('#prevButton');
let nextButton = document.querySelector('#nextButton');
let img = document.querySelector('img');
let imgArr = ['https://motivationping.com/wp-content/uploads/2017/10/motivational-inspirational-quotes-30.jpg',
              'http://rishikajain.com/wp-content/uploads/2017/07/create-yourself.jpg',
              'https://mk0ryrobg0ysk5t06n.kinstacdn.com/wp-content/uploads/2017/09/Hustle-Quotes-Motivation_-Don%E2%80%99t-stay-in-bed-unless-you-can.jpg'];
let index = 0;

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
prevButton.disabled = true;

function showPrevImage() {
  index--;
  img.src = imgArr[index];
    nextButton.disabled = false;

  if (index === 0) {
  prevButton.disabled = true;
  }
}

function showNextImage() {
  index++;
  img.src = imgArr[index];
  prevButton.disabled = false;

  if (index === imgArr.length-1) {
   nextButton.disabled = true;
  }
}