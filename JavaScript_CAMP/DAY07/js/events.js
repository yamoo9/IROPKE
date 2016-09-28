/*! events.js © yamoo9.net, 2016 */

(function(global){
  'use strict';

  var print_area           = null;
  var demo_nav             = null;
  var demo_nav_links       = null;
  var demo_nav_remove_btns = null;

  function initialization() {

    // DOM 요소를 선택
    print_area           = document.querySelector('#print-select-link-content');
    demo_nav             = document.querySelector('.demo-nav');
    demo_nav_links       = demo_nav.querySelectorAll('a');
    demo_nav_remove_btns = demo_nav.querySelectorAll('.remove-item');

    // .demo-nav 요소 내부의 <a> 요소를 클릭할 때,
    for(var l=demo_nav_links.length, link; --l;) {
      link = demo_nav_links[l];
      link.onclick = printContent;
    }
    // .selected 클래스 속성을 추가 한다.
    // 단, 각 <a> 요소는 선택된 상태가 고유해야 한다.

    // .demo-nav 요소 내부의 <button> 요소를 클릭할 때,
    // 선택된 <button>을 포함한 목록 항목(List Item)을 제거한다.
  }

  function printContent() {
    var _link = this;
    // 클릭된 <a> 요소가 포함하는 텍스트 노드 값을 가져와서 변수에 참조
    // #print-select-link-content 요소의 콘텐츠 값이
    // 선택된 <a> 요소의 콘텐츠 값으로 출력되도록 한다.
    var _content = _link.firstChild.nodeValue;
    print_area.firstChild.nodeValue = _content;
    // 선택된 <a> 요소 선택된 상태를 시각적으로 표시하도록 설정한다.
    var _changed_class = _link.getAttribute('class') + ' selected';
    _link.setAttribute('class', _changed_class);
    // Legacy Prevent Default Action
    return false;
  }

  window.onload = initialization;

})(this);