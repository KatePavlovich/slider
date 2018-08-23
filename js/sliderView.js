class Slider {
  constructor() {
    this.showPrevButton = null;
    this.showNextButton = null;
    this.img = null;

    this._logic = new SliderLogic();
  }

  start(elId) {
    //draw basic html for slider
    let el = document.querySelector(`#${elId}`);
    el.innerHTML = `<div id="slider1" class="slider-wrapper">
      <button class="button prevButton">&lt;</button>
      <img src="https://img.memecdn.com/click-all-buttons_o_1460213.jpg" alt="click right button to get images" class="default-img"/>
      <button class="button nextButton">&gt;</button>
    </div>`;

    //initialize buttons & add addEventListeners
    this.showPrevButton = el.querySelector('.prevButton');
    this.showNextButton = el.querySelector('.nextButton');
    this.img = el.querySelector('img');

    this.showPrevButton.addEventListener('click', this.onShowPrevBtnClick.bind(this));
    this.showNextButton.addEventListener('click', this.onShowNextBtnClick.bind(this));

    this.showPrevButton.disabled = true;

    //call for images in BLL
    this._logic.init(() => this.img.src = this._logic.getCurrentImgUrl());
  }

  //check for disabling buttons if in BLL it's time to disable them
  onShowPrevBtnClick(e) {
    this._logic.activatePrevImg();
    this.img.src = this._logic.getCurrentImgUrl();
    this.showNextButton.disabled = false;

    if (!this._logic.canMovePrev()) {
      this.showPrevButton.disabled = true;
    }
  }

  //check for disabling buttons if in BLL it's time to disable them
  onShowNextBtnClick(e) {
    this._logic.activateNextImg();
    this.img.src = this._logic.getCurrentImgUrl();
    this.showPrevButton.disabled = false;

    if (!this._logic.canMoveNext()) {
      this.showNextButton.disabled = true;
    }
  }
}