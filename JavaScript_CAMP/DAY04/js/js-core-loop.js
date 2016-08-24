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
  var gnb_links = document.querySelectorAll('.gnb a');
  //
  function printIndex(index) {
    console.log(this, index);
    return false; // [Legacy] Prevent Default Behavior
  }
  for ( var l= --gnb_links.length; gnb_links[l]; l-- ) {
    // JavaScript Closure
    // 함수 다시!!
    var link = gnb_links[l];
    gnb_links[l].onclick = (function(index){
      return printIndex.bind(link, index);
    })(l);
  }

}

// 문서객체모델이 완성된 이후에 코드를 실행
window.addEventListener('DOMContentLoaded', init);