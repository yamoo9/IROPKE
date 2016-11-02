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
  $.isEmptyObject = function(data) {
    // 속성이 없는 객체인가?
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
