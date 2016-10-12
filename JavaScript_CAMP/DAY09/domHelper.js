// window 객체가 로드된 시점에서 함수를 처리
var addEvent = (function(){
  var _addEvent; // undefined

  // 전달인자 데이터 유형 검증
  function _validateAddEvent(el, type, handler) {
    if( !el || el.nodeType !== 1 ) { throw new Error('el는 요소노드를 전달해야 합니다.'); }
    if( !type || typeof type !== 'string' ) { throw new Error('type은 문자열을 전달해야 합니다.'); }
    if( !handler || typeof handler !== 'function' ) { throw new Error('handler는 함수를 전달해야 합니다.'); }
  }

  // W3C 표준을 준수(지원)하는가?
  if ( window.addEventListener ) {
    _addEvent = function(el, type, handler, capture) {
      // capture는 옵션, 초기 값은 false
      capture = capture || false;
      // 검증
      _validateAddEvent(el, type, handler);
      el.addEventListener(type, handler, capture);
    };
  }
  // MS 비표준을 지원하는가?
  else if ( window.attachEvent ) {
    _addEvent = function(el, type, handler) {
      // 검증
      _validateAddEvent(el, type, handler);
      el.attachEvent('on'+type, handler);
    };
  }
  // 진보 이벤트 모델을 지원하지 않는가?
  else {
    _addEvent = function(el, type, handler) {
      // 검증
      _validateAddEvent(el, type, handler);
      el['on'+type] = handler;
    };
  }

  return _addEvent;
})();

