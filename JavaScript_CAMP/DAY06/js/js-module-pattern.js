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

  jq('body').removeClass('this-is-body-element');

})(this, this.jQuery);
