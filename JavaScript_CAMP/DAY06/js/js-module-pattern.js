/*! JavaScript Module Pattern © yamoo9.net, 2016 */

// 전역 (Global Scope)
var $ = function(selector){
  return document.querySelector(selector);
};

// 외부의 충돌에서 보호하는 방법을 사용하여 코드를 작성하는 습관을 가지는 것이 좋다.
// 모듈 패턴 (IIFE)

// Team A
(function(global, $, ng){
  'use strict';
  // global === window {} Object
  // $      === jQuery() Function
  // ng     === angular {} Object
  $('body').addClass('this-is-body-element');

})( this, this.jQuery, this.angular );


// Team B
(function(exports, jq){
  'use strict';

  jq('body').removeClass('this-is-body-element').addClass('changed-body-class-attribute');

})(this, this.jQuery);

// ---------------------------------------------------
// 모듈 패턴 내부에서 공개되는 것과 비공개되는 것을 제작

// 미션
// 객체를 생성한다.
// 객체의 멤버를 설정한다.
// 객체의 메소드가 접근 가능한 비공개 변수(함수)가 존재할 수 있다.
// 모듈 패턴을 활용하여 객체를 반환하는 모듈을 구성해본다.

// Model 객체 생성
// 사용자가 데이터를 초기화/리셋/추가/제거(개별,모두)/가져오기 등이 가능한 객체

// // 패턴 1
// (function(global){
//   'use strict';
//   // 지역에 객체를 생성
//   var _modelManager = {};
//   // 전역에 노출 패턴
//   global.modelManager = _modelManager;
// })(this);

// // 패턴 2
// var modelManager = (function(){
//   'use strict';
//   return {};
// })();

// // 패턴 3
// (function(global, md){
//   'use strict';
//   // md === 전역의 modelManager

// })(this, (this.modelManager = this.modelManager || {}) );

(function(exports){
  'use strict';

  // 외부에 노출되지 않는 공간(영역)
  // 비공개 데이터 설정
  var _data = [];

  // 비공개 메소드
  var _set = function(value) {
    // 유효성 검증
    if ( !value ) { throw new Error('값을 설정해야 합니다.'); }
    _data.push(value);
    // return undefined; // 암묵적으로 함수는 undefined를 반환
  };

  // 외부에 노출한 객체(모듈)
  exports.modelManager = {
    'init': function(data) {
      if ( !Array.isArray(data) ) { throw new Error('초기화할 데이터는 배열이어야 합니다.'); }
      _data = data;
    },
    'reset': function() {
      _data = [];
    },
    'get': function() {
      return _data;
    },
    // 'set': _set,
    'remove': function(index) {
      // 모델 데이터에서 해당 인덱스의 원소를 제거 한다.
    }
  };

})(this);