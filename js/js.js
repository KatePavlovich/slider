
let slider = {
  prevButton: document.querySelector('#prevButton'),
  nextButton: document.querySelector('#nextButton'),
  img: document.querySelector('img'),
  imgArr: ['https://motivationping.com/wp-content/uploads/2017/10/motivational-inspirational-quotes-30.jpg',
              'http://rishikajain.com/wp-content/uploads/2017/07/create-yourself.jpg',
              'https://mk0ryrobg0ysk5t06n.kinstacdn.com/wp-content/uploads/2017/09/Hustle-Quotes-Motivation_-Don%E2%80%99t-stay-in-bed-unless-you-can.jpg'],
  index: 0,

start: function() {
  let that = this;

  this.prevButton.addEventListener('click', (e) => that.showPrevImage(e));
  this.nextButton.addEventListener('click',(e) => that.showNextImage(e));
  this.prevButton.disabled = true;
},

showPrevImage: function (e) {
  this.index--;
  this.img.src = this.imgArr[this.index];
  this.nextButton.disabled = false;

  if (this.index === 0) {
    this.prevButton.disabled = true;
  }
},

 showNextImage: function(e) {
  this.index++;
  this.img.src = this.imgArr[this.index];
  this.prevButton.disabled = false;

  if (this.index === this.imgArr.length-1) {
    this.nextButton.disabled = true;
  }
}
}

slider.start();