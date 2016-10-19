/** @function isType() 데이터 유형을 체크하여 정확한 값을 반환하는 함수 */
function isType(data) {
  return Object.prototype.toString.call(data).toLowerCase().slice(8,-1);
}
/** @function isWindow() window {} 객체인지 검증하는 함수 */
function isWindow(obj) { return isType(obj) === 'window'; }
/** @function isDocument() document {} 객체인지 검증하는 함수 */
function isDocument(obj) { return isType(obj) === 'htmldocument'; }
/** @function isElementNode() 문서 요소 객체인지 검증하는 함수 */
function isElementNode(node) { return node.nodeType === document.ELEMENT_NODE; }

(function(global){

  // window 객체가 로드된 시점에서 함수를 처리
  // 전달인자 데이터 유형 검증
  function _validateEvent(el, type, handler) {
    var _el_type = isType(el);
    // window {} => 'window'
    // document {} => 'htmldocument'
    // el 전달인자가 없거나 / window, document, element_node 가 아닌 경우 조건은 참
    if( !el || !isElementNode(el) && !isWindow(el) && !isDocument(el) ) {
      throw new Error('el는 요소노드 또는 window, document를 전달해야 합니다.');
    }
    if( !type || typeof type !== 'string' ) { throw new Error('type은 문자열을 전달해야 합니다.'); }
    if( !handler || typeof handler !== 'function' ) { throw new Error('handler는 함수를 전달해야 합니다.'); }
  }

  var addEvent = (function(){
    var _addEvent; // undefined

    // W3C 표준을 준수(지원)하는가?
    if ( window.addEventListener ) {
      _addEvent = function(el, type, handler, capture) {
        // capture는 옵션, 초기 값은 false
        capture = capture || false;
        // 검증
        _validateEvent(el, type, handler);
        el.addEventListener(type, handler, capture);
      };
    }
    // MS 비표준을 지원하는가?
    else if ( window.attachEvent ) {
      _addEvent = function(el, type, handler) {
        // 검증
        _validateEvent(el, type, handler);
        el.attachEvent('on'+type, handler);
      };
    }
    // 진보 이벤트 모델을 지원하지 않는가?
    else {
      _addEvent = function(el, type, handler) {
        // 검증
        _validateEvent(el, type, handler);
        el['on'+type] = handler;
      };
    }

    return _addEvent;
  })();

  var removeEvent = (function(){
    var _removeEvent; // undefined

    // W3C 표준을 준수(지원)하는가?
    if ( window.removeEventListener ) {
      _removeEvent = function(el, type, handler, capture) {
        // capture는 옵션, 초기 값은 false
        capture = capture || false;
        // 검증
        _validateEvent(el, type, handler);
        el.removeEventListener(type, handler, capture);
      };
    }
    // MS 비표준을 지원하는가?
    else if ( window.detachEvent ) {
      _removeEvent = function(el, type, handler) {
        // 검증
        _validateEvent(el, type, handler);
        el.detachEvent('on'+type, handler);
      };
    }
    // 진보 이벤트 모델을 지원하지 않는가?
    else {
      _removeEvent = function(el, type, handler) {
        // 검증
        _validateEvent(el, type, handler);
        el['on'+type] = null;
      };
    }

    return _removeEvent;
  })();

  // console.log('in _validateEvent:', typeof _validateEvent);
  // console.log('in addEvent:', typeof addEvent);
  // console.log('in removeEvent:', typeof removeEvent);

  global.addEvent = addEvent;
  global.removeEvent = removeEvent;

})(this);

