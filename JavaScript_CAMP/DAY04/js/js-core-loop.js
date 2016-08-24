/*! js-core-loop.js © yamoo9.net, 2016 */

// if (조건 === 참) {
//    // 1회 실행
// }

// while
// while (조건 === 참) {
//    // 반복 실행
// }
// while(조건 === 참) {
//   // 코드 반복
// }

// do ~ while
// do {
//   // 코드 반복
// } while(조건 === 참);

// -----------------------------------

// DOM 스크립팅
// 반복 구문을 사용하여 DOM 객체 탐색 헬퍼 함수
// 문서객체모델의 Node에 대해 이해하고 있어야 한다.

// -----------------------------------
// 미션, IE 8+
// -----------------------------------
// 문서에서 .gnb ul 요소를 선택한 후,
// .gnb ul의 첫번째 자식 요소를 찾는다.
// 찾은 요소의 다음 인접한 형제 요소를
// 변수 gnb_2nd_child에 참조한다.

// 헬퍼 함수
// function nextEl(node) {
//   do { node = node.nextSibling; }
//   while( node && node.nodeType !== 1 );
//   return node;
// }

// function firstEl(node) {
//   return node.children[0];
// }
// function lastEl(node) {
//   var l=node.children.length;
//   return node.children[ l - 1 ];
// }

// 초기화 함수
function init() {
  // 내부에 미션 코드 작성
  // 단 그 노드의 유형은 요소노드(ELEMENT_NODE)여야 한다.
  // 찾은 첫번째 자식 요소노드의 인접한 다음 요소노드를 찾아
  // 변수 gnb_2nd_child에 참조한다.
  // 참조된 변수 gnb_2nd_child를 콘솔에 로그한다.
  // var gnb = document.querySelector('.gnb');
  // console.log(gnb);
  // var gnb_ul = gnb.querySelector('ul');
  // console.log(gnb_ul);
  // 첫번째 자식 노드를 찾아야 한다.
  // console.log(gnb_ul.firstChild.nodeType); // 3 출력: 결과는 #text 텍스트 노드이다.
  // 반복 확인(검증)이 요구된다. => 반복문 사용
  // 요소노드의 유형(1)이 나올 때까지... 반복
  // var first_child_el = nextEl( gnb_ul.firstChild ); // node
  // 최신 브라우저 IE 9+ 에서는 아래와 같은 방법을 사용할 수 있다.
  // var first_child_el = gnb_ul.firstElementChild; // element_node
  // console.log(first_child_el.nodeType); // #text, 3

  // do { first_child_el = first_child_el.nextSibling; } // 3, 8, 1
  // while( first_child_el && first_child_el.nodeType !== 1 );
  // console.log(first_child_el);

  // --------------------------------------------------------------------------------

  // .gnb a 모두 수집한 다음
  // 수집된 각 <a>요소노드를 클릭하면
  // 콘솔에 수집될 당시의 인덱스 (for문의 l 값) 로그한다.
  // var gnb_links = document.querySelectorAll('.gnb a');
  //
  // function printIndex(index) {
  //   console.log(this, index);
  //   return false; // [Legacy] Prevent Default Behavior
  // }
  // for ( var l = --gnb_links.length; gnb_links[l]; l-- ) {
  //   // JavaScript Closure
  //   // 함수 다시!!
  //   var link = gnb_links[l];
  //   gnb_links[l].onclick = (function(index){
  //     return printIndex.bind(link, index);
  //   })(l);
  // }

  // --------------------------------------------------------------------------------

  function isType(data) {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  }

  var data = [{'name': 'A'}, {'name': 'B'}, {'name': 'C'}, null, true, [], {'name': 'D'}];
  // data 배열을 순환하여 객체 유형만 선별한 새로운 new_data를 출력하시오.
  // for(var _data, new_data=[], i=0, l=data.length; i<l; i++) {
  //   _data = data[i];
  //   if ( isType(_data) === 'array' ) { break; } // for문 종료
  //   if ( isType(_data) !== 'object' ) {
  //     // 조건이 참일 경우, for문의 다음 구문을 점프하여 다시 반복 구문을 돌리는 수행
  //     continue;
  //   }
  //   new_data.push(_data);
  // }

  // console.log(new_data);

  // --------------------------------------------------------------------------------
  // Array.prototype.map 사용
  var new_data_using_map = data.map(function(item, index) {
    // console.log( isType(item) === 'object', index );
    if ( isType(item) !== 'object' ) {
      // break;
    }
    return item;
  });

  // console.log(new_data_using_map);

  // --------------------------------------------------------------------------------
  // for~of 문 사용
  new_data_using_map = [];
  for ( let item of data ) {
    isType(item) === 'object' && new_data_using_map.push(item);
  }
  // console.log(new_data_using_map);

  // --------------------------------------------------------------------------------
  // for~in 문 사용

  var apple_device = {
    'maker': 'Apple',
    'location': 'US'
  };

  var mouse = Object.create(apple_device); // 상속

  mouse.constructor = apple_device;
  mouse['name'] = 'Magic Mouse';
  mouse['use'] = true;

  // console.log(mouse.constructor);

  // 객체 데이터 유형의 속성을 순환하여 처리하는 경우
  // console.log(mouse.length);
  for ( var property in mouse ) {
    // 능력을 상속하게 하는 부모의 속성까지 거슬러 올라가지 않도록...
    if ( mouse.hasOwnProperty(property) ) {
      // console.log('property:', property);
      // console.log('value:', mouse[property]); // ???
    }
  }

  // --------------------------------------------------------------------------------
  // 자바스크립트 함수
  // 일급 객체(First Class Object)
  // 왜? 일급 객체일까요?
  // 함수 데이터 유형을 함수 인자로 전달 가능
  // 함수에 함수 데이터 유형을 반환 가능
  // 클로저....

  // fn1(); // 성공
  // fn2(); // 오류 (Hoist 개념 정리)

  // 함수 선언 ()
  function fn1() {}
  // 함수 표현식 (Expression): 무명, 익명 함수
  var fn2 = function() {}; // 함수 리터럴

  var adios = null; // 전역 변수

  function globalScopeFn2() {
     var adios = '아디오스'; // 지역 변수
     function inFn(__adios__) {
       var inFn_adios = '인~ 아디오스';
       // var adios; // undefined
       console.log('inFn() 안:', __adios__); // '아디오스'
       // console.log('inFn() 안:', adios); // '아디오스'
       // 자바스크립트 호이스트 현상 발생
       var adios = '아웃~ 아디오스'; // 실행 중에 데이터 값이 복사
     }
     inFn(adios);
     console.log('함수 안:', adios); // '아디오스'
  }

  globalScopeFn2(); //

  console.log('전역:', adios); // null

  // --------------------------------------------------------------------------------
  // 호이스트 현상: 영역 상단으로 끌어 올려짐
  // function 선언문은 몸체가 전부 끌어 올려진다.
  // var 키워드로 정의된 변수 이름만 끌어 올려진다.
  // ※ ECMAScript 2015 버전에서는 let, class 정의된 것은 호이스트 되지 않는다.
  // function understandHoist() {
  //   goKingdom();
  //   var king = '왕';
  //   var goKingdom = function() {};
  //   awayKingdom();
  //   function awayKingdom() {}
  // }


  // 호이스트 된 결과 코드
  function understandHoist() {
    // ------------------------
    // 영역 상단으로 끌어 올려진다.
    // ------------------------
    function awayKingdom() {}
    var king;      // undefined
    var goKingdom; // undefined
    // ------------------------
    goKingdom(); // 실행 오류 (함수가 아니기 때문!!!)
    king = '왕';
    goKingdom = function() {}; // 함수 값이 할당되는 것은 이 시점...
    awayKingdom();
  }

  understandHoist();

  // --------------------------------------------------------------------------------
  // 테스트
  // --------------------------------------------------------------------------------
  // var result = test(momo);
  // var momo = 'molmote modian';
  // function test(m) {
  //   if ( momo || m ) {
  //     var momo = 'super cyan';
  //   }
  //   return momo;
  // }

  // console.log(result); // ?????

  // --------------------------------------------------------------------------------
  // 테스트 결과
  // --------------------------------------------------------------------------------
  function test(m) {
    // m === undefined
    var momo; // undefined
    if ( momo || m ) {
      momo = 'super cyan';
    }
    return momo;
  }
  var result, momo;
  result = test(momo);
  momo = 'molmote modian';

  console.log(result); // undefined

  // -----------------------------------------------------------------------
  // function 내부에서만 접근 가능한 변수(집합 객체: Array like Object) -> arguments
  // -----------------------------------------------------------------------
  function sum() {
     var result=0, l = arguments.length; // 7
     while( arguments[--l] ) {
        result += arguments[l];
     }
     return result;
  }

  sum(3, 201, 3, 4, -90, 201, 393);

}

// 문서객체모델이 완성된 이후에 코드를 실행
window.addEventListener('DOMContentLoaded', init);