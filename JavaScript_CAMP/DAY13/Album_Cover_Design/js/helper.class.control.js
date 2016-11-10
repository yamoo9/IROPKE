/*! helper.class.control.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  var hasClass, addClass, removeClass, toggleClass, radioClass;

  // 조건 확인: 사용자의 웹 브라우저가 classList를 지원하는가?
  // classList 지원 브라우저
  if ( 'classList' in Element.prototype ) {

    hasClass = function(el, check_class) {
      return el.classList.contains(check_class);
    };

    addClass = function(el, assign_class) {
      el.classList.add(assign_class);
    };

    removeClass = function(el, delete_class) {
      el.classList.remove(delete_class);
    };

    toggleClass = function(el, toggle_class) {
      el.classList.toggle(toggle_class);
    };

  }

  // classList 미지원 브라우저
  else {

    hasClass = function(el, check_class) {
      var check_class = new RegExp('(^|\\s+)'+ check_class +'(\\s+|$)');
      return check_class.test( el.getAttribute('class') );
    };

    addClass = function(el, assign_class) {
      if ( hasClass(el, assign_class) ) { return; }
      var pre_class = el.getAttribute('class');
      el.setAttribute('class', pre_class + ' ' + assign_class);
    };

    removeClass = function(el, delete_class) {
      if ( hasClass(el, delete_class) ) {
        var reg = new RegExp('(^|\\s+)' + delete_class + '(\\s+|$)', 'g');
        el.getAttribute('class').replace(reg, ' ');
      }
    };

    toggleClass = function(el, toggle_class) {
      hasClass(el, toggle_class) ? removeClass(el, toggle_class) : addClass(el, toggle_class);
    };

  }

  // 이전에 radio_class 전달인자에 해당하는 클래스를 가진 요소
  var pre_active_el = null;

  radioClass = function(el, radio_class) {
    pre_active_el && removeClass(pre_active_el, radio_class);
    addClass( (pre_active_el = el), radio_class );
  };

  global.hasClass    = hasClass;
  global.addClass    = addClass;
  global.removeClass = removeClass;
  global.toggleClass = toggleClass;
  global.radioClass  = radioClass;

})(this);