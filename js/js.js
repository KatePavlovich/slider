function Slider() {
  this.prevButton = null;
  this.nextButton = null;
  this.img = null;
  this.imgArr = ['https://motivationping.com/wp-content/uploads/2017/10/motivational-inspirational-quotes-30.jpg',
                  'http://rishikajain.com/wp-content/uploads/2017/07/create-yourself.jpg',
                  'https://mk0ryrobg0ysk5t06n.kinstacdn.com/wp-content/uploads/2017/09/Hustle-Quotes-Motivation_-Don%E2%80%99t-stay-in-bed-unless-you-can.jpg'];
  this.index = 0;

  this.start = function(elId) {
    let that = this;
    let el = document.querySelector(`#${elId}`);
    this.prevButton = el.querySelector('.prevButton');
    this.nextButton = el.querySelector('.nextButton');
    this.img = el.querySelector('img');

    this.prevButton.addEventListener('click', (e) => that.showPrevImage(e));
    this.nextButton.addEventListener('click',(e) => that.showNextImage(e));
    this.prevButton.disabled = true;
  };
  this.showPrevImage = function (e) {
    this.index--;
    this.img.src = this.imgArr[this.index];
    this.nextButton.disabled = false;

    if (this.index === 0) {
      this.prevButton.disabled = true;
    }
  };

  this.showNextImage = function(e) {
    this.index++;
    this.img.src = this.imgArr[this.index];
    this.prevButton.disabled = false;

    if (this.index === this.imgArr.length-1) {
      this.nextButton.disabled = true;
    }
  };
}