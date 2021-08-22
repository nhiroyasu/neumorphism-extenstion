// 色のRGB値は0~255で考える
export default class Color {
  _r = 0;
  set R(value) {
    if (value <= 255) {
      this._r = value;
    }
  }
  get R() {
    return this._r;
  }
  get sR() {
    return this._r / 255;
  }

  _g = 0;
  set G(value) {
    if (value <= 255) {
      this._g = value;
    }
  }
  get G() {
    return this._g;
  }
  get sG() {
    return this._g / 255;
  }

  _b = 0;
  set B(value) {
    if (value <= 255) {
      this._b = value;
    }
  }
  get B() {
    return this._b;
  }
  get sB() {
    return this._b / 255;
  }

  // 色相(Hue)
  get H() {
    const diff = this.MaxsRGB - this.MinsRGB;
    let h = 0;

    switch (this.MinsRGB) {
      case this.MaxsRGB:
        h = 0;
        break;

      case this.sR:
        h = 60 * ((this.sB - this.sG) / diff) + 180;
        break;

      case this.sG:
        h = 60 * ((this.sR - this.sB) / diff) + 300;
        break;

      case this.sB:
        h = 60 * ((this.sG - this.sR) / diff) + 60;
        break;
    }

    return h;
  }

  // 彩度(Saturation)
  get S() {
    const diff = this.MaxsRGB - this.MinsRGB;
    const s = diff / (1 - Math.abs(this.MaxsRGB + this.MinsRGB - 1));
    return s;
  }

  // 輝度(Lightness)
  get L() {
    const l = (this.MaxsRGB + this.MinsRGB) / 2;
    return l;
  }

  get MaxsRGB() {
    return Math.max(this.sR, this.sG, this.sB);
  }

  get MinsRGB() {
    return Math.min(this.sR, this.sG, this.sB);
  }

  /**
   * constructor
   * @param {Number} r 赤の0~255
   * @param {Number} g 青の0~255
   * @param {Number} b 緑の0~255
   */
  constructor(r, g, b) {
    this.R = r;
    this.G = g;
    this.B = b;
  }

}
