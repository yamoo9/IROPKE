/*! JavaScript Core © yamoo9.net, 2016 */

// 지난 시간에 공부했던 것
// 호이스트란?
// 스코프(영역) 내에서 var, function 키워드로 정의된 것들을
// 영역의 최상단으로 끌어올리는 현상을 말한다.
// var VS function 차이점
// 스코프 체이닝이란?

// 함수 정의하는 방법
// 함수 선언식 function 함수이름() {}
// 함수 표현식 var 함수이름 = function() {};

// this 키워드 컨텍스트 객체를 참조하는 변수
// 함수 내부의 this는 함수 내부에 중첩된 형태에서 실행될 경우
// 설계 상의 오류를 가지고 있다.


// 현재 console.log() 코드가 실행된 콘텍스트가 Window Object(Global Scope)이기 때문
// window 객체는 누가 생성(Constructor)했나?
// console.log( this ); // this === window {} 객체
// console.log( this.constructor ); // this.constructor === Window() 생성자 함수

// 전역에 함수를 정의
// 전역에 정의된 함수이기 때문에 아래 코드와 동일
// window.showMeThisContextObject = function() {};
function showMeThisContextObject() {
  console.log('this:', this);
}

// console.log( window.showMeThisContextObject === showMeThisContextObject );

// showMeThisContextObject(); // this === window {}
// showMeThisContextObject.call(document.documentElement); // this === ????

// document.onmouseenter = showMeThisContextObject; // this === document {}
// document.onmouseenter = showMeThisContextObject.bind(document.head); // this === window {}

// Legacy Event
function init() {
  // 문서에 존재하는 DOM 버튼 객체를 선택해 변수에 할당
  var demo_btn = document.querySelector('.demo-btn');
  // 변수 demo_btn에 참조된 문서 버튼 객체를 콘솔에 기록
  console.log('demo_btn:', demo_btn);
}
// 이미지를 포함한 모든 리소스가 다운로드된 후에 init() 실행
var win = window; // this
win.onload = init;

// Modern Event