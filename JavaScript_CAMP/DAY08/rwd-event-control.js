(function(global){
  'use strict';

  // 중단점(Breakpoint) 설계
  // xs     0 - 599
  // sm   600 - 1023
  // md  1024 - 1439
  // lg  1440 - 1919
  // xl  1920 - ∞

  /** @type {Object} Breakpoint {} */
  var bp = {
    // 'xs': 0
    'sm': 600,
    'md': 1024,
    'lg': 1440,
    'xl': 1920
  };

  global.onload = init;

  /** @function initialization */
  function init() {
    // 현재 로드된 후에 사용자 기기의 폭을 감지하여
    // 어떤 디바이스인지 식별하여 처리
    // 1. 문자열 값으로 어떤 기기인지 반환하는 함수
    var device_id = printDetectionDeviceId();
    // 2. 반환된 함수를 <html> 요소의 class 속성에 설정하는 함수
    assignClass('html', device_id); // Selector
    // 3. 사용자의 설정에 따라 창 크기가 변경되면 detectionResize 함수 실행
    this.onresize = detectionResize;
    // 4. detectionResize 함수 객체의 memory_class 속성 값에 device_id 값을 복사
    detectionResize.memory_class = device_id;
  }

  function query(selector) {
    return document.querySelector(selector);
  }

  /** @function getWindowWidth */
  function getWindowWidth() {
    // innerWidth IE 9+
    return global.innerWidth || document.body.clientWidth;
  }

  /** @function printDetectionDeviceId */
  function printDetectionDeviceId() {
    var device_w  = getWindowWidth(),
        device_id = null;
    if      ( device_w < bp.sm ) { device_id = 'xs'; }
    else if ( device_w < bp.md ) { device_id = 'sm'; }
    else if ( device_w < bp.lg ) { device_id = 'md'; }
    else if ( device_w < bp.xl ) { device_id = 'lg'; }
    else                         { device_id = 'xl'; }
    return device_id;
  }

  /** @function assignClass */
  function assignClass(target_el, class_name) {
    if (
      // 전달인자 없거나(undefined), null
      !target_el ||
      // DOM 요소가 아닌 경우, 문자열이 아닌 경우
      ( target_el.nodeType !== 1 && typeof target_el !== 'string' )
    ) { throw new Error('전달인자 유형을 올바르게 확인해주세요.'); }
    if ( typeof target_el === 'string' ) {
      target_el = query(target_el);
    }
    // 이미 class_name 이름 값을 target_el 소유하고 있다면 함수 종료
    if ( !hasClass( query('html'), class_name ) ) {
      var _org_class_name = target_el.getAttribute('class') || '';
      target_el.setAttribute('class', (_org_class_name + ' ' + class_name).trim() );
    }
  }

  function hasClass(target_el, class_name) {
    var _classes = target_el.getAttribute('class').split(' ');
    for ( var i=0, l=_classes.length; i<l; i++ ) {
      if( _classes[i] === class_name) {
        return true;
      }
    }
    return false;
  }

  function removeClass(target_el, class_name) {
    if ( !class_name ) { target_el.setAttribute('class', ''); }
    var _class = target_el.getAttribute('class');
    _class = _class.replace(class_name, '');
    target_el.setAttribute('class', _class);
  }

  function detectionResize() {
    var device_id = printDetectionDeviceId();
    // 비교 device_id <-> detectionResize.memory_class 값을 비교
    // 비교한 값이 달라진다면 기존 클래스 속성 제거 (기억)
    // 새롭게 변경된 기기의 폭에 따른 식별자를 새 클래스 속성으로 추가
    // console.log('device_id:', device_id);
    // console.log('detectionResize.memory_class:', detectionResize.memory_class);
    // console.log(device_id === detectionResize.memory_class);
    if ( device_id === detectionResize.memory_class ) {
      return; // 함수 종료
    }
    // 기억된 클래스 속성 값을 제거 한다.
    removeClass( query('html') , detectionResize.memory_class);
    // 변경된 새 클래스 속성을 <html> 요소의 클래스 속성 값으로 할당한다.
    assignClass('html', device_id);
    // 변경된 새 클래스 속성 값을 기억한다.
    detectionResize.memory_class = device_id;
  }
  // 메모이제이션 패턴
  // 함수 또한 객체이기 때문에 속성을 가질 수 있다.
  // 초기 값 설정
  detectionResize.memory_class = null;

})(this);