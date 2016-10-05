###### 이롭게 에이전시 교육

# DAY08

### 이벤트 제어 미션

```
`window` 객체의 `load`, `resize` 이벤트 속성에 연결할 함수를 작성하시오.
해당 함수는 로드 시 또는 리사이즈 이벤트 발생 시, 사전에 설정된 폭(`width`)의
값의 변경 유무에 따라 변동이 발생할 경우 1회만 `root` 요소의 `class` 속성 값을 변경합니다.
다시 변동이 발생하게 되면 해당 폭을 식별하는 `class` 속성 값을 적용합니다.
```

`lib/utils.js`

```js
/**
 * --------------------------------
 * trim() 메소드를 대체하는 헬퍼함수
 * ----------------------------- */
/** @function trim */
function trim(str) {
  return trimRight(trimLeft(str));
}
/** @function trimLeft */
function trimLeft(str) {
  return str.replace(/^\s+/,'');
}
/** @function trimRight */
function trimRight(str) {
  return str.replace(/\s+$/,'');
}
```


`lib/dom.js`

```js
/** @function query */
function query(selector) {
  return document.querySelector(selector);
}

/** @function hasClass */
function hasClass(target_el, class_name) {
  var _classes = target_el.getAttribute('class').split(' ');
  for ( var i=0, l=_classes.length; i<l; i++ ) {
    if( _classes[i] === class_name) {
      return true;
    }
  }
  return false;
}

/** @function assignClass */
function assignClass(target_el, class_name) {
  if ( !target_el || target_el.nodeType !== 1 ) { throw new Error('전달인자 유형을 올바르게 확인해주세요.'); }
  // 이미 class_name 이름 값을 target_el 소유하고 있다면 함수 종료
  if ( !hasClass( target_el, class_name ) ) {
    var _org_class_name = target_el.getAttribute('class') || '';
    target_el.setAttribute('class', trim(_org_class_name + ' ' + class_name) );
  }
}

/** @functino removeClass */
function removeClass(target_el, class_name) {
  if ( !class_name ) { target_el.setAttribute('class', ''); }
  var _class = target_el.getAttribute('class');
  _class = _class.replace(class_name, ''); // 'name '
  target_el.setAttribute( 'class', trim(_class) );
}

/** @function getWindowWidth */
function getWindowWidth() {
  // innerWidth IE 9+
  return window.innerWidth || document.body.clientWidth;
}
```

`rwd-event-control.js`

```js
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
  /** @type {ELEMENT_NODE} <html> 문서 객체 참조 */
  var root_el = null;

  // 로드 이벤트 발생 시, 애플리케이션 초기화
  global.onload = init;

  /** @function initialization */
  function init() {
    // 현재 로드된 후에 사용자 기기의 폭을 감지하여
    // 어떤 디바이스인지 식별하여 처리
    root_el = query('html');
    // 1. 문자열 값으로 어떤 기기인지 반환하는 함수
    var device_id = printDetectionDeviceId();
    // 2. 반환된 함수를 <html> 요소의 class 속성에 설정하는 함수
    assignClass( root_el , device_id); // Selector
    // 3. 사용자의 설정에 따라 창 크기가 변경되면 detectionResize 함수 실행
    this.onresize = detectionResize;
    // 4. detectionResize 함수 객체의 memory_class 속성 값에 device_id 값을 복사
    detectionResize.memory_class = device_id;
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
  /** @function detectionResize */
  function detectionResize() {
    var device_id = printDetectionDeviceId();
    // 비교된 값이 동일하다면 함수를 종료해 불필요한 업무를 수행하지 않도록 설정한다.
    if ( device_id === detectionResize.memory_class ) { return; }
    // 기억된 클래스 속성 값을 제거 한다.
    removeClass( root_el , detectionResize.memory_class);
    // 변경된 새 클래스 속성을 <html> 요소의 클래스 속성 값으로 할당한다.
    assignClass( root_el, device_id);
    // 변경된 새 클래스 속성 값을 기억한다.
    detectionResize.memory_class = device_id;
  }
  // 메모이제이션 패턴
  // 함수 또한 객체이기 때문에 속성을 가질 수 있다.
  // 초기 값 설정
  detectionResize.memory_class = null;

})(this);
```

