/*! event.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  var body; // undefined

  function actionOne() {
    console.log('Action 1');
  }
  // function actionTwo() {
  //   console.log('Action 2');
  //   // W3C 표준 이벤트 제거
  //   body.removeEventListener('mouseover', actionTwo, false);
  // }

  // function init1() {
  //   console.log('초기화 1');
  // }

  function init2() {
    // console.log('초기화 2');
    body.addEventListener('mouseover', function init2Action() {
      console.log('Action 2');
      // W3C 표준 이벤트 제거
      body.removeEventListener('mouseover', init2Action, false);
    }, false);

    console.log(typeof init2Action); // undefined
  }


  function init1() {
    // 기존 이벤트 추가/제거
    body = document.querySelector('body');
    // body.onmouseover; // null 초기 값

    // 과거 방식의 이벤트 연결에서는 이벤트 속성에 하나의 핸들러(함수)만 연결된다.
    // body.onmouseover = function() {
    //   console.log('mouse over 2');
    // };

    // 2개의 액션을 하나의 이벤트 속성에서 처리하기 위해서는
    // 별도로 함수 표현식(익명, 무명 함수)을 사용해야 한다.
    // 또는 2개의 액션을 수행하는 함수를 정의한 후 이벤트 속성에 연결해야 한다.
    // body.onmouseover = function() {
    //   actionOne();
    //   actionTwo();
    // };
    body.addEventListener('mouseover', actionOne, false);
  }

  // window.onload = function() {
  //   init();
  //   init2();
  // };
  // W3C 진보 이벤트 모델
  // .addEventListener('type', handler, capture);
  global.addEventListener('load', init1, false);
  global.addEventListener('load', init2, false);

})(this);