/*! JavaScript Core © yamoo9.net, 2016 */

/* ---------------------------------------------------------
 * 자바스크립트 데이터 유형
 * 1. 원시형 데이터 (복사, pass to value)
 *   1.1 숫자(Number)
 *   1.2 문자(String)
 *   1.3 불리언(Boolean)
 *   1.4 undefined
 *   1.5 null
 * 2. 자료형 데이터 (참조, pass to reference)
 *   2.1 함수(Function)
 *   2.2 배열(Array)
 *   2.3 객체(Object)
 * ---------------------------------------------------------
 * 자바스크립트 데이터 유형 확인
 * 1. [키워드 연산자] typeof
 *   1.1 약점
 *     null, [] => 'object'
 * 2. [키워드 연산자] instanceof
 *   2.1 약점
 *     원시 데이터 유형에 한해서 리터럴(Literal) 표현식을 사용할 경우,
 *     제대로 확인을 해주지 못한다.
 * 3. [속성] constructor
 *   3.1 약점
 *     객체가 아닌 유형은 판별할 수 없다.
 * 4. [사용자 정의 헬퍼 함수] isType()
 *   4.1 핵심 구현 방법
 *     Function 객체의 능력 중에 .call()
 *     객체의 메소드(Method)를 빌려쓰기 패턴
 *     정확한 데이터 유형을 판별
 */


// JS 데이터 유형은 변수에 값을 복사/참조할 경우
// new 생성자함수() 방법보다는 객체 리터럴 표현식을 사용하는 것을 권장.
// var 키워드를 한 번만 사용하는 패턴 -> `var` singleton pattern
var num    = 21,
    _num   = new Number(num),
    str    = '이롭게 에이전시',
    boo    = false,
    fnc    = function() {},
    arr    = [num, str, boo, fnc],
    obj    = { 'name': str, 'live': !boo, getName: fnc },
    isType = function(data) {
      return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
    };

// JS 타입 체크
// ※ with문은 사용하지 않는 것이 좋다. (성능에 안 좋은 영향을 미침)
with(console) {
  log('%c---------------------------------------------------', 'color: #b8b8b8');
  log('num:', typeof num);
  log('str:', typeof str);
  log('boo:', typeof boo);
  log('fnc:', typeof fnc);
  log('* arr:', typeof arr);
  log('obj:', typeof obj);
  // 객체가 아닌 데이터 유형 체크
  log('* null:', typeof null);
  log('undefined:', typeof undefined);
  log('%c---------------------------------------------------', 'color: #b8b8b8');
  log('arr instanceof Array:', arr instanceof Array);
  log('* num instanceof Number:', num instanceof Number);
  log('_num instanceof Number:', _num instanceof Number);
  log('%c---------------------------------------------------', 'color: #b8b8b8');
  log('num.constructor === Number:', num.constructor === Number);
  log('str.constructor === String:', str.constructor === String);
  log('boo.constructor === Boolean:', boo.constructor === Boolean);
  log('fnc.constructor === Function:', fnc.constructor === Function);
  log('arr.constructor === Array:', arr.constructor === Array);
  log('obj.constructor === Object:', obj.constructor === Object);
  // ※ 객체가 아닌 데이터 유형에서는 .constructor 속성을 사용할 수 없다.
  // log('(null).constructor === Object:', (null).constructor === null);
  // log('(undefined).constructor === Object:', (undefined).constructor === undefined);
  log('%c---------------------------------------------------', 'color: #b8b8b8');
  log("isType(num) === 'number':",          isType(num) === 'number');
  log("isType(str) === 'string':",          isType(str) === 'string');
  log("isType(boo) === 'boolean':",         isType(boo) === 'boolean');
  log("isType(fnc) === 'function':",        isType(fnc) === 'function');
  log("isType(arr) === 'array':",           isType(arr) === 'array');
  log("isType(obj) === 'object':",          isType(obj) === 'object');
  log("isType(null) === 'null':",           isType(null) === 'null');
  log("isType(undefined) === 'undefined':", isType(undefined) === 'undefined');
}


/**
 * --------------------------------
 * 자바스크립트 제어문 - 조건 처리 구문
 * Sass 구문과 비교
 * @if 조건 { ... }
 * ----------------------------- */
var condition = true; // true? false?
// false로 형 변환이 이루어지는 데이터 값
// 0
// ''
// null
// undefined
// void 0

console.log('%c---------------------------------------------------', 'color: #b8b8b8');

if ( condition ) {
  console.log('%cthis is true statement.', 'color: green');
} else {
  console.log('%cthis is false statement.', 'color: red');
}

console.log('%c---------------------------------------------------', 'color: #b8b8b8');

// 특정 기능을 지원하는 브라우저와 아닌 브라우저 감지
var feature = !!window.localStorage;      // 지원: true, 미지원: false
feature = 'geolocation' in window.navigator; // 지원: true, 미지원: false

if (feature) {
  // localStorage 사용
  // console.info('localStorage 사용 가능');
  console.info('geolocation 사용 가능');
} else {
  // cookie 사용
  // console.info('cookie 사용');
  console.info('geolocation 사용 불가');
}

console.log('%c---------------------------------------------------', 'color: #b8b8b8');

// 조건 2개 이상, 조건이 만족되지 않은 경우에 처리되는 if 구문 작성
// 배열 데이터를 생성해서 요일을 갈무리한다.
var days = '일 월 화 수 목 금 토'.split(' ');
// console.log(days);
// var today = // 오늘 요일 받아온다. // 0, 1, 2, 3, 4, 5, 6
var today = (new Date()).getDay();
// var today = 7;
var showDayMessage = function(n) {
  return '오늘은 ' + days[n] + '요일입니다. :-)';
};
// console.log('오늘은 ', today);
// 오늘 요일이 무슨 요일인지 콘솔에 기록해보세요. 예) '수요일'
// if      ( today === 0 ) { console.log( showDayMessage(0) ); }
// else if ( today === 1 ) { console.log( showDayMessage(1) ); }
// else if ( today === 2 ) { console.log( showDayMessage(2) ); }
// else if ( today === 3 ) { console.log( showDayMessage(3) ); }
// else if ( today === 4 ) { console.log( showDayMessage(4) ); }
// else if ( today === 5 ) { console.log( showDayMessage(5) ); }
// else if ( today === 6 ) { console.log( showDayMessage(6) ); }
// else {}

// 다중 삼항 조건식
// today === 0 ? console.log( showDayMessage(0) ) :
//   today === 1 ? console.log( showDayMessage(1) ) :
//     today === 2 ? console.log( showDayMessage(2) ) :
//       today === 3 ? console.log( showDayMessage(3) ) :
//         today === 4 ? console.log( showDayMessage(4) ) :
//           today === 5 ? console.log( showDayMessage(5) ) :
//             today === 6 ? console.log( showDayMessage(6) ) : console.log('장난 하냐?');

// switch ~ case, break, default 문으로 변경
// switch(today) {
//   case 0:
//     console.log( showDayMessage(0) );
//   break;
//   case 1:
//     console.log( showDayMessage(1) );
//   break;
//   case 2:
//     console.log( showDayMessage(2) );
//   break;
//   case 3:
//     console.log( showDayMessage(3) );
//   break;
//   case 4:
//     console.log( showDayMessage(4) );
//   break;
//   case 5:
//     console.log( showDayMessage(5) );
//   break;
//   case 6:
//     console.log( showDayMessage(6) );
//   break;
//   default:
//     console.log( '장난 하냐?' );
// }


// switch 구문을 사용하여 평일과 주말에 따라 처리되는 코드문 작성
switch(today) {
  case 0:
  case 6:
    console.log('오늘은 쉬는 날~');
  break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('오늘은 출근 일~');
}

console.log('%c---------------------------------------------------', 'color: #b8b8b8');
// for 구문을 통해 성능 체크
var check_arr = new Array(1000);

// ECMAScript 3rd Edition
console.time('for문');
for ( var i=0, l=check_arr.length; i<l; i+=1 ) {
  if ( i === l - 1 ) {
    console.log(i);
  }
}
console.timeEnd('for문');


// ECMAScript 6th Edition => ECMAScript 2015
console.time('for ~ of문');
for ( let m of check_arr ) {

}
console.timeEnd('for ~ of문');

