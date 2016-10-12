/*! event.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  function actionOne() {
    console.log('Action 1');
  }
  function actionTwo() {
    console.log('Action 2');
  }

  function init() {
    // 기존 이벤트 추가/제거
    var body = document.querySelector('body');
    // body.onmouseover; // null 초기 값

    // 과거 방식의 이벤트 연결에서는 이벤트 속성에 하나의 핸들러(함수)만 연결된다.
    // body.onmouseover = function() {
    //   console.log('mouse over 2');
    // };

    // 2개의 액션을 하나의 이벤트 속성에서 처리하기 위해서는
    // 별도로 함수 표현식(익명, 무명 함수)을 사용해야 한다.
    // 또는 2개의 액션을 수행하는 함수를 정의한 후 이벤트 속성에 연결해야 한다.
    body.onmouseover = function() {
      actionOne();
      actionTwo();
    };
  }

  function init2() {
    console.log('초기화 2');
  }

  window.onload = function() {
    init();
    init2();
  };

})(this);