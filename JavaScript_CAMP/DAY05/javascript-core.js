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

//////////////////
// Legacy Event //
//////////////////
function init() {
  // 문서에 존재하는 DOM 버튼 객체를 선택해 변수에 할당
  var demo_btn = document.querySelector('.demo-btn');
  // 변수 demo_btn에 참조된 문서 버튼 객체를 콘솔에 기록
  // console.log('demo_btn:', demo_btn);
  // 참조된 버튼 객체를 사용자가 클릭하면 이벤트 발생 (연결된 핸들러 실행)
  // 비교 0. ------------------------------------------------------------------------
  demo_btn.onclick = function(evt) {                  // 이벤트 속성에 함수 값(Literal) 참조
    console.log(evt.type, this); // this === demo_btn
  };
  // 비교 1. ------------------------------------------------------------------------
  // demo_btn.ondblclick = doubleClickEventHandler;   // 이벤트 발생 시에 함수를 실행
  // 비교 2. ------------------------------------------------------------------------
  // demo_btn.ondblclick = doubleClickEventHandler(); // 함수를 바로 실행
  // 비교 3. ------------------------------------------------------------------------
  demo_btn.onmouseenter = function() { // 익명 함수를 이벤트 속성에 참조
    // 이벤트 속성에 연결된 함수 내부의 this는 누구를 가리키나?
    console.log(this); // this === <button>

    // 이벤트 핸들러(익명함수) 내부에서 실행되는 함수는
    // 별도의 컨텍스트 객체가 명시되어 있지 않다면
    // 암묵적으로 전역 객체를 컨텍스트 객체로 참조한다.
    // 비교 3-1.
    // mouseEventHandler(); // 함수 실행 // this === window {}
    // 비교 3-2.
    // .call()은 Function.prototype 객체의 메소드 (메소드 빌려쓰기 디자인 패턴)
    mouseEventHandler.call(this); // 함수 실행 // this === ????
  };
  demo_btn.onmouseleave = function() {
    mouseEventHandler();
  };
}
// 이미지를 포함한 모든 리소스가 다운로드된 후에 init() 실행
var win = window; // this
win.onload = init;

function mouseEventHandler() {
  console.log(this); // this === demo_btn
};

function doubleClickEventHandler(evt) {
  console.log(evt.type, this); // this === demo_btn
};

/////////////////////////////
// this 컨텍스트 참조 변수 비교 //
/////////////////////////////
function callMe() {
   console.log(this);
}

// 전역에서 실행 (암묵적으로 window 객체가 실행한 것처럼 동작)
callMe();

// 이벤트 속성에 callMe 할당(참조)
document.body.onclick = callMe;

// 메소드 빌려쓰기 패턴으로 컨텍스트 객체를 교체한 다음 실행
callMe.call( document.querySelector('button') );