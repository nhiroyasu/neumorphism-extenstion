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

  // 色相(Hue) 0~360
  get H() {
    const diff = this.MaxRGB - this.MinRGB;
    let h = 0;

    switch (this.MaxRGB) {
      case this.MinRGB:
        h = 0;
        break;

      case this.R:
        h = 60 * ((this.G - this.B) / diff);
        break;

      case this.G:
        h = 60 * ((this.B - this.R) / diff) + 120;
        break;

      case this.B:
        h = 60 * ((this.R - this.G) / diff) + 240;
        break;
    }

    if (h < 0) {
      h += 360;
    }

    return h;
  }

  // 彩度(Saturation) 0~100
  get S() {
    const l = (this.MaxRGB + this.MinRGB) / 2;
    if (l <= 127) {
      if (this.MaxRGB + this.MinRGB === 0) return 0;  // 0除算対策
      const s = (this.MaxRGB - this.MinRGB) / (this.MaxRGB + this.MinRGB);
      return Math.floor(s * 100);
    } else {
      const s = (this.MaxRGB - this.MinRGB) / (510 - this.MaxRGB + this.MinRGB);
      return Math.floor(s * 100);
    }
  }

  // 輝度(Lightness) 0~100
  get L() {
    const l = (this.MaxRGB + this.MinRGB) / 2;
    return Math.floor((l / 255) * 100);
  }

  get MaxsRGB() {
    return Math.max(this.sR, this.sG, this.sB);
  }

  get MinsRGB() {
    return Math.min(this.sR, this.sG, this.sB);
  }

  get MaxRGB() {
    return Math.max(this.R, this.G, this.B);
  }

  get MinRGB() {
    return Math.min(this.R, this.G, this.B);
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
