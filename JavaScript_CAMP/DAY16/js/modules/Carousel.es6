// ES6 Class 문법을 사용하여 클래스 정의
let toString = Object.prototype.toString;

class Carousel {

  consturctor(selector, options) {
    this.el = document.querySelector(selector);
  }
  static type(data) {
    return toString.call(data).slice(8,-1).toLowerCase();
  }
  settingControls() {

  }
  activeContent() {

  }
  nextContent() {

  }
  prevContent(){

  }
}

export default Carousel;
