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

  window.onload = init;
  // window.onresize = detectionResize;

  /** @function initialization */
  function init() {
    // 현재 로드된 후에 사용자 기기의 폭을 감지하여
    // 어떤 디바이스인지 식별하여 처리
    // 1. 문자열 값으로 어떤 기기인지 반환하는 함수
    var device_id = printDetectionDeviceId();
    // 2. 반환된 함수를 <html> 요소의 class 속성에 설정하는 함수
    assignClass('html', device_id);
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
    if ( device_w < bp.sm ) { device_id = 'xs'; }
    else if ( device_w < bp.md ) { device_id = 'sm'; }
    else if ( device_w < bp.lg ) { device_id = 'md'; }
    else if ( device_w < bp.xl ) { device_id = 'lg'; }
    else { device_id = 'xl'; }
    return device_id;
  }

  /** @function assignClass */
  function assignClass(target_el, class_name) {
    console.log('class_name:', class_name);
  }


  // function detectionResize() {
  //   console.log('detect width:', window.innerWidth);
  // }

})(this);