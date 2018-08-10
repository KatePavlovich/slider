class Slider {
  constructor(imgArr) {
    this.prevButton = null;
    this.nextButton = null;
    this.img = null;
    this.imgArr = imgArr;
    this.index = 0;
  }
  

  start(elId) {
    let that = this;
    let el = document.querySelector(`#${elId}`);
    this.prevButton = el.querySelector('.prevButton');
    this.nextButton = el.querySelector('.nextButton');
    this.img = el.querySelector('img');

    this.prevButton.addEventListener('click', (e) => that.showPrevImage(e));
    this.nextButton.addEventListener('click',(e) => that.showNextImage(e));
    this.prevButton.disabled = true;
  };

  showPrevImage(e) {
    this.index--;
    this.img.src = this.imgArr[this.index];
    this.nextButton.disabled = false;

    if (this.index === 0) {
      this.prevButton.disabled = true;
    }
  };

  showNextImage(e) {
    this.index++;
    this.img.src = this.imgArr[this.index];
    this.prevButton.disabled = false;

    if (this.index === this.imgArr.length-1) {
      this.nextButton.disabled = true;
    }
  };
};