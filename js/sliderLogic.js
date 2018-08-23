class SliderLogic {
    constructor() {
        this._imgArr = [];
        this.index = 0;
        this._dataService = new SliderDataService();
    }

    getCurrentImgUrl() {
        return this._imgArr[this.index];
    }

    canMovePrev() {
        let weAreOnTheLeftBorder = this.index === 0;
        return !weAreOnTheLeftBorder;
    }

    canMoveNext() {
        let weAreOnTheRighttBorder = this.index === this._imgArr.length - 1;
        return !weAreOnTheRighttBorder;
    }

    activatePrevImg() {
        if (this.canMovePrev()) {
            this.index--;
        }
    }

    activateNextImg() {
        if (this.canMoveNext()) {
            this.index++;
        }
    }

    init(callback) {
        this._dataService.initializeUrls((urls) => {
            this._imgArr = urls;
            callback();
        });
    }
}