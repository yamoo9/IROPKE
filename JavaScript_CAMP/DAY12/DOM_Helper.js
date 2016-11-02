/*! DOM_Helper.js © yamoo9.net, 2016 */
(function(gobal, $){
  'use strict';

  // 모듈 라이브러리 객체
  // $ === window.DOM_Helper;

  ////////////////
  // 유틸리티 모듈 //
  ////////////////

  // 비공개
  var toString = Object.prototype.toString;
  var _isDataType = function(data) {
    return toString.call(data).slice(8,-1).toLowerCase();
  };
  // 공개
  $.isNumber = function(data) {
    return _isDataType(data) === 'number';
  };
  $.isString = function(data) {
    return _isDataType(data) === 'string';
  };
  $.isBoolean = function(data) {
    return _isDataType(data) === 'boolean';
  };
  $.isFunction = function(data) {
    return _isDataType(data) === 'function';
  };
  $.isArray = function(data) {
    return _isDataType(data) === 'array';
  };
  $.isObject = function(data) {
    return _isDataType(data) === 'object';
  };

  // 함수를 실행할 때 마다, Object.keys 지원 여부를 물어보는 경우
  // $.isEmptyObject = function(obj) {
  //     // 객체인가?
  //     if ( !$.isObject(obj) ) {
  //       throw new Error('전달인자는 객체 유형이어야 합니다.');
  //     }
  //     if ( Object.keys ) {
  //       // ES 5 (IE 9+)
  //       return Object.keys(obj).length === 0;
  //     } else {
  //       // 속성이 없는 객체인가?
  //       // 속성의 개수를 기억하는 변수
  //       var props_count = 0;
  //       // ES 3 (IE 8-)
  //       // 순환 처리
  //       for (var prop in obj) {
  //         // 속성이 있다면 props_count를 증가 시킨다.
  //         // ※ 객체 자신이 가진 속성만을 골라내야 하기에
  //         // for ~ in문을 사용할 경우는 반드시~!
  //         // hasOwnProperty()를 사용하여야 한다.
  //         if ( obj.hasOwnProperty(prop) ) {
  //           props_count++;
  //         }
  //       }
  //       return props_count === 0;
  //     }
  //   };

  // --------------------------------------------------------------

  // IIFE 패턴을 사용하여 코드 분기를 1회만 수행하는 경우
  // $.isEmptyObject = (function(){
  //   if (Object.keys) {
  //     return function(obj) {
  //       return Object.keys(obj).length === 0;
  //     };
  //   } else {
  //     return function(obj) {
  //       var _props = 0;
  //       for ( var prop in obj ) {
  //         if ( obj.hasOwnProperty(prop) ) {
  //           _props++;
  //         }
  //       }
  //       return _props === 0;
  //     }
  //   }
  // })();

  // --------------------------------------------------------------

  // ES5 Shim Library를 사용한 경우
  if ( !Object.keys ) {
    Object.keys = function(obj) {
      var props = [];
      for ( var prop in obj ) {
        if ( obj.hasOwnProperty(prop) ) {
          props.push(prop);
        }
      }
      return props;
    }
  }

  $.isEmptyObject = function(obj) {
    return Object.keys(obj).length === 0;
  };


  // 문서객체 [선택]
  $.query = function(selector) {
    if (typeof selector !== 'string') {
      throw new Error('전달인자는 문자열이어야 합니다.');
    }
    return document.querySelector(selector);
  };
  $.queryAll = function(selector) {
    return document.querySelectorAll(selector);
  };


})(this, (this.DOM_Helper = this.DOM_Helper || {}) );
