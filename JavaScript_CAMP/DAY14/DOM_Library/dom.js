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

  var doc   = global.document;
  var slice = Array.prototype.slice;

  // 생성자 함수 (Constructor)
  var dom = function(params, context) {
    // 엄격모드(strict)에서 new를 강제화하는 패턴
    if (!this) { return new dom(params, context); }

    // 생성된 인스턴스 객체 참조 변수
    var instance = this;

    // context 객체 설정
    var current_context = null;
    // Element Node를 전달 받았을 때
    if ( context && context.nodeType ) {
      current_context = context;
    }
    // String을 전달 받았을 때
    else if (typeof context === 'string') {
      current_context = doc.querySelector(context);
    } else {
      current_context = doc;
    }

    // 1. `params` 값이 빈 문자열이거나, 아무런 값을 전달 받지 못했을 때
    if ( !params || (typeof params === 'string' && dom.trim(params) === '' ) ) {
      instance.length = 0;
      return instance;
    }

    // 2. 단일 요소 노드를 전달 받았을 때
    if ( typeof params === 'object' && params.nodeName ) {
      instance.length = 1;
      instance[0] = params;
      return instance;
    }

    // 3. HTML 문자열을 전달 받았을 때
    // <tag> 감지 정규표현식: /^\s*<(\w+|!)[^>]*>/
    var check_tag = /^\s*<(\w+|!)[^>]*>/;
    if ( typeof params === 'string' && check_tag.test(params) ) {
      // 실제 문서가 아니고 문서의 조각(가상 문서)를 생성한 다음에
      var frag_doc = current_context.createDocumentFragment();
      var temp = current_context.createElement('div');
      frag_doc.appendChild(temp);
      temp = frag_doc.querySelector('div');
      // 사용자가 전달한 params (html string)를 동적으로 생성하여
      // 가상 문서에 붙인 후, instance 객체의 멤버로 할당
      temp.innerHTML = params;
      dom.each( dom.makeArray(temp.children) , function(index, item) {
        instance[index] = item;
      });
      instance.length = temp.children.length;
      temp.parentNode.removeChild(temp);
      return instance;
    }


    // 4. 배열을 전달 받았을 때
    // 4. CSS 선택자 문자열을 전달 받았을 때
    if ( dom.isArray(params) ) {
      dom.each(params, function(index, item) {
        instance[index] = item;
      });
      instance.length = params.length;
    } else {
      var collection = current_context.querySelectorAll(params);
      for (var i=0, l=collection.length; i<l; i++) {
        instance[i] = collection[i];
      }
      instance.length = l;
    }

    return instance;

  };

  // 프로토타입 객체
  dom.fn = dom.prototype;

  // 유틸리티(클래스, Static) 메소드
  // 유틸리티를 확장하는 메소드
  // 믹스인 패턴 (객체 합성 패턴)
  dom.include = function(obj, extend_obj) {
    for ( var prop in extend_obj ) {
      if ( extend_obj.hasOwnProperty(prop) ) {
        obj[prop] = extend_obj[prop];
      }
    }
  };

  dom.include(dom, {
    'isArray': function(o) {
      return o instanceof Array;
    },
    'makeArray': function(o) {
      return slice.call(o, 0);
    },
    'trim': function(string) {
      return string.replace(/^\s+/,'').replace(/\s+$/,'');
    },
    'each': function(obj, callback) {
      // obj 데이터 유형이 배열(Array)인 경우,
      // function(index, item) {}
      if ( dom.isArray(obj) && obj.length ) {
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
    }
  });

  // 인스턴스 메소드
  dom.fn.each = function(callback) {

  };

  // dom 생성자 함수 전역에 공개
  global.dom = dom;

})(this);