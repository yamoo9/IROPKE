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
      // @el          {element_node}
      // @check_class {string}
      var check_class = new RegExp('(^|\\s+)'+ check_class +'(\\s+|$)');
      return check_class.test( el.getAttribute('class') );
    };

    addClass = function(el, assign_class) {
      // 해당 클래스 속성이 이미 존재하면 함수 종료
      if ( hasClass(el, assign_class) ) { return; }
      // @el           {element_node}
      // @assign_class {string}
      var pre_class = el.getAttribute('class');
      el.setAttribute('class', pre_class + ' ' + assign_class);
    };

    // 'design a m designs d k design b ddesign c d design'.replace(/(^|\s+)design(\s+|$)/g, ' ');
    // 'design a designs d design b ddesign c design design'.match(/(^|\s+)design(\s+|$)/g);
    removeClass = function(el, delete_class) {
      if ( hasClass(el, delete_class) ) {
        var reg = new RegExp('(^|\\s+)' + delete_class + '(\\s+|$)', 'g');
        el.getAttribute('class').replace(reg, ' ');
      }
    };

    toggleClass = function(el, toggle_class) {
      // hasClass, addClass, removeClass
      if ( hasClass(el, toggle_class) ) {
        removeClass(el, toggle_class);
      } else {
        addClass(el, toggle_class);
      }
      // hasClass(el, toggle_class) ? removeClass(el, toggle_class) : addClass(el, toggle_class);
    };

  }

  // 이전에 active 클래스를 가진 요소
  var pre_active_el = null;

  radioClass = function(el, radio_class) {
    if ( pre_active_el ) {
      removeClass(pre_active_el, radio_class);
    }
    pre_active_el = el;
    addClass(pre_active_el, radio_class);
  };

  global.hasClass    = hasClass;
  global.addClass    = addClass;
  global.removeClass = removeClass;
  global.toggleClass = toggleClass;
  global.radioClass  = radioClass;

})(this);