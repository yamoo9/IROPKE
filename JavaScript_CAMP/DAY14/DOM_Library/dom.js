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

    // context 객체 설정
    var current_context = null;
    // Element Node를 전달 받았을 때
    if ( context && context.nodeType ) {
      current_context = context;
    }
    // String을 전달 받았을 때
    else if (typeof doc === 'string') {
      current_context = doc.querySelector(context);
    } else {
      current_context = doc;
    }

    // 1. `params` 값이 빈 문자열이거나, 아무런 값을 전달 받지 못했을 때
    // dom(), dom(''), dom('     ')
    if ( !params || (typeof params === 'string' && dom.trim(params) === '' ) ) {
      console.log(!params);
      this.length = 0;
      return this;
    }

    // 2. 단일 요소 노드를 전달 받았을 때

    // 3. CSS 선택자 문자열을 전달 받았을 때
    if ( typeof params === 'string' ) {
      var collection = current_context.querySelectorAll(params);
      for (var i=0, l=collection.length; i<l; i++) {
        this[i] = collection[i];
      }
      this.length = l;
    }

    // 4. 배열을 전달 받았을 때

    // 5. HTML 문자열을 전달 받았을 때
  };

  // 프로토타입 객체
  dom.fn = dom.prototype;

  // 유틸리티(클래스, Static) 메소드

  // 양쪽의 공백을 제거합니다.
  dom.trim = function(string) {
    return string.replace(/^\s+/,'').replace(/\s+$/,'');
  };

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