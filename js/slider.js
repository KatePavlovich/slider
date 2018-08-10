class Slider {
  constructor(imgArr) {
    this.prevButton = null;
    this.nextButton = null;
    this.img = null;
    this.imgArr = imgArr;
    this.index = 0;
  }
  
//start slider with 2 methods of binding this
  start(elId) {
    let el = document.querySelector(`#${elId}`);
    el.innerHTML = `<div id="slider1" class="slider-wrapper">
      <button class="button prevButton">&lt;</button>
      <img src="https://img.memecdn.com/click-all-buttons_o_1460213.jpg" alt="click right button to get images" class="default-img"/>
      <button class="button nextButton">&gt;</button>
    </div>`;
    this.prevButton = el.querySelector('.prevButton');
    this.nextButton = el.querySelector('.nextButton');
    this.img = el.querySelector('img');

    this.prevButton.addEventListener('click', (e) => this.showPrevImage(e));
    this.nextButton.addEventListener('click', this.showNextImage.bind(this));
    this.prevButton.disabled = true;
  };

//show previous image & disable previous button if we reached first img in array
  showPrevImage(e) {
    this.index--;
    this.img.src = this.imgArr[this.index];
    this.nextButton.disabled = false;

    if (this.index === 0) {
      this.prevButton.disabled = true;
    }
  };

  //show previous image & disable previous button if we reached last img in the array
  showNextImage(e) {
    this.index++;
    this.img.src = this.imgArr[this.index];
    this.prevButton.disabled = false;

    if (this.index === this.imgArr.length-1) {
      this.nextButton.disabled = true;
    }
  };
};