/*! dom.js © yamoo9.net, 2016 */

// jQuery와 유사한 문서객체 모델 조작/이벤트 제어 라이브러리
// 함수형 프로그래밍 vs 클래스 프로그래밍 (ECMAScript 5th Edition)
// [다음 시간] Webpack, Babel -> ECMAScript 2015, Class Programming
// 생성자 함수(Constructor) & 프로토타입(Prototype) 객체
// 메소드 체이닝

// 사용법
// 1) CSS Selector -> dom('.coffee')
// 2) DOM Object   => dom(document)
// 3) HTML String  -> dom('<div><p></p></div>');
// 4) Function     -> DOMContentLoaded Event Callback
// 5) Plain Object -> dom {}

// dom('.latte').html() [GET]
// dom('.latte').html('<a>hi</a>') [SET]
// dom('.latte').text() [GET]
// dom('.latte').text('hi') [SET]
// dom('.latte').append('<div class="sugar"></div>');
// dom('.latte').appendTo('body').addClass();

// 모듈 패턴: IIFE
(function(global){
  'use strict';

  var doc = global.document;

  // 생성자 함수 (Constructor)
  var dom = function(params, context) {
    // this === undefined
    // // new를 사용하지 않아도 객체를 생성하는 패턴
    // // new를 강제화하는 패턴
    // if ( this.constructor !== dom ) {
    // return this || new dom(params, context);
    if (!this) {
      return new dom(params, context);
    }
    // return !this && new dom(params, context);
    // return this;
  };

  // 프로토타입 객체
  dom.fn = dom.prototype;

  // 유틸리티(클래스, Static) 메소드
  // 배열, 객체 데이터 유형을 처리합니다.
  dom.each = function(obj, callback) {
    // obj 데이터 유형이 배열(Array)인 경우,
    // function(index, item) {}
    if ( (obj instanceof Array) && obj.length ) {
      for ( var i=0, l=obj.length; i<l; i++ ) {
        var item = obj[i];
        callback.call(item, i, item);
      }
    }
    // obj 데이터 유형이 객체인 경우,
    // function(key, value) {}
    if ( typeof obj === 'object' && !('length' in obj) ) {
      for ( var prop in obj ) {
        if ( obj.hasOwnProperty(prop) ) {
          callback.call(obj, prop, obj[prop]);
        }
      }
    }
  };

  // 인스턴스 메소드
  dom.fn.each = function(callback) {

  };

  global.dom = dom;

})(this);