/*! events.js © yamoo9.net, 2016 */

(function(global){
  'use strict';

  // 모듈 내에서 공통으로 사용될 변수 선언
  var print_area           = null;
  var demo_nav             = null;
  var demo_nav_links       = null;
  var demo_nav_remove_btns = null;

  // 모듈 초기화 수행 함수 정의
  function initialization() {

    // DOM 요소를 선택
    print_area           = document.querySelector('#print-select-link-content');
    demo_nav             = document.querySelector('.demo-nav');
    demo_nav_links       = demo_nav.querySelectorAll('a');
    demo_nav_remove_btns = demo_nav.querySelectorAll('.remove-item');

    // .demo-nav 요소 내부의 <a> 요소에 클릭 이벤트 바인딩
    for( var l=demo_nav_links.length, link; (link = demo_nav_links[--l]); ) {
      link.onclick = printContent;
    }

    // .demo-nav 요소 내부의 <button> 요소를 클릭할 때,
    // 선택된 <button>을 포함한 목록 항목(List Item)을 제거한다.
  }

  // 이벤트 핸들러 printContent 정의
  function printContent() {
    var _link = this;

    printAssignContent(_link);
    assignClass(_link);

    // .selected 클래스 속성을 추가 한다.
    // 단, 각 <a> 요소는 선택된 상태가 고유해야 한다.

    // 오래 전에 사용되던 브라우저 기본 동작 차단 방법
    return false;
  }

  function printAssignContent(_link) {
    // 클릭된 <a> 요소가 포함하는 텍스트 노드 값을 가져와서 변수에 참조
    var _content = _link.firstChild.nodeValue;
    // #print-select-link-content 요소의 콘텐츠 값이
    // 선택된 <a> 요소의 콘텐츠 값으로 출력되도록 한다.
    print_area.firstChild.nodeValue = _content;
  }

  function assignClass(_link) {
    // 선택된 <a> 요소 선택된 상태를 시각적으로 표시하도록 설정한다.
    var _has_selected_class = checkSelectedClass(_link);
    // console.log('_has_selected_class:', _has_selected_class); // false
    if( _has_selected_class ) { return; }
    var _pre_class = _link.getAttribute('class');
    _pre_class = _pre_class || '';
    var _changed_class = _pre_class + ' selected';
    _link.setAttribute( 'class', _changed_class.trim() );
  }

  function checkSelectedClass(_link) {
    // return selected 클래스가 있다? 없다?;
    var _classes = _link.getAttribute('class');
    _classes = !_classes ? [] : _classes.split(' ');
    var i=0, l=_classes.length;
    for (; i<l; i++) {
      if ( _classes[i] === 'selected' ) {
        return true;
      }
    }
    return false;
  }

  // 이벤트 발생 감지 시, 모듈 초기화 함수 실행
  window.onload = initialization;

})(this);