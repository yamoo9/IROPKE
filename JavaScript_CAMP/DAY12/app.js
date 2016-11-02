(function(global, $){
  'use strict';

  // var global = window;
  var document = global.document;

  // DOM Lv 0 (Legacy DOM)

  // [HTMLCollection]

  // document.links
  // href 속성을 가진 요소들 수집

  // 미션! 수집된 콜렉션에서 특정 요소를 골라내어
  // 새로운 배열로 반환하는 함수를 작성한다면?
  function filterElement(collection, el_name) {
    // 매개변수에 할당되는 전달인자의 값: 유효성 검사
    if ( !collection || !collection.length ) {
      throw new Error('error');
    }
    if ( !el_name || typeof el_name !== 'string' ) {
      throw new Error('error');
    }
    var item, i=0, l=collection.length, filtered_list = [];
    for ( ; i<l; i++) {
      item = collection[i];
      if ( item.localName === el_name ) {
        filtered_list.push(item);
      }
    }
    return filtered_list;
  }

  // document.anchors
  // name 속성을 가진 요소들 수집

  // document.images
  // <img> 요소들 수집

  // --------------------------------------------------------------------------------

  // document.layers, document.all

  // DOM Lv 1
  // document.getElementById()
  // document.getElementsByTagName()
  // document.getElementsByName()

  // --------------------------------------------------------------------------------
  // DOM Lv 2

  // Event Model
  // W3C Standard Event Model
  // .addEventListener(type, hanlder, capture)
  // .removeEventListener(type, hanlder, capture)

  // MS Non Standard Event Model
  // .attachEvent('on'+type, hanlder)
  // .dettachEvent('on'+type, hanlder)

  // --------------------------------------------------------------------------------
  // DOM Lv 3
  // --------------------------------------------------------------------------------
  // DOM Lv 4
  // --------------------------------------------------------------------------------
  // .querySelector();    // node 반환
  // .querySelectorAll(); // nodeList 반환

  // ----------------------------------------------------

  // 미션 DOM Lv4에 등장한 CSS 선택자로 문서 객체를 찾는 것을 도와주는 헬퍼 함수

  // jQuery 예와 비교하면: jQuery('.report')

  // var html = document.documentElement;
  var html = $.query('html');
  // var head = document.head;
  var head = $.query('head');
  // var body = document.body;
  var body = $.query('body');
  var html_children = $.queryAll('html > *');

  console.log('html:', html);
  console.log('head:', head);
  console.log('body:', body);
  console.log('html_children:', html_children);

})(this, this.DOM_Helper);