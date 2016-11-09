/*! album_cover.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  var hasClass, addClass;

  // 조건 확인: 사용자의 웹 브라우저가 classList를 지원하는가?
  // classList 지원 브라우저
  if ( 'classList' in Element.prototype ) {

    hasClass = function(el, check_class) {
      return el.classList.contains(check_class);
    };

    addClass = function (el, assign_class) {
      el.classList.contains(check_class) || el.classList.add(assign_class);
    };

  }
  // classList 미지원 브라우저
  else {

    hasClass = function (el, check_class) {
      // @el          {element_node}
      // @check_class {string}
      var check_class = new RegExp('(^|\\s+)'+ check_class +'(\\s+|$)');
      return check_class.test( el.getAttribute('class') );
    };

    addClass = function (el, assign_class) {
      // 해당 클래스 속성이 이미 존재하면 함수 종료
      if ( hasClass(el, assign_class) ) { return; }
      // @el           {element_node}
      // @assign_class {string}
      var pre_class = el.getAttribute('class');
      el.setAttribute('class', pre_class + ' ' + assign_class);
    }

  }

  global.hasClass    = hasClass;
  global.addClass    = addClass;

})(this);

(function(global){
  'use strict';

  // 초기 설정(init)
  // 문서에서 다음 객체를 컨트롤
  // .album 참조
  var document         = global.document;
  var album            = document.querySelector('.album');

  // album 참조 변수에 이벤트 연결(bind event)
  album.addEventListener('mouseenter', moveDisk);
  album.addEventListener('click', playDisk);
  album.addEventListener('click', stopDisk);

  // 이벤트에 따른 함수 정의
  function moveDisk(evt) {
    // var name = 'moveDisk';
    // console.log('event type:', evt.type);
    // 사용자가 앨범에 마우스를 올리면
    // 디스크 요소에 move-disk 클래스 속성을 추가한다.
    var disk        = evt.target.querySelector('.album-disk');
    var pre_class   = disk.getAttribute('class');

    // helper function (Native)
    addClass(disk, 'move-disk');

    // classList API
    // disk.classList.add('move-disk');
  }
  function playDisk(evt) {
    // var name = 'playDisk';
    var pressed_shift = evt.shiftKey; // false
    if ( !pressed_shift ) {
      // console.log('event type:', evt.type, name);
    }
  }
  function stopDisk(evt) {
    // var name = 'stopDisk';
    var pressed_shift = evt.shiftKey; // true
    if ( pressed_shift ) {
      // console.log('event type:', evt.type, name, pressed_shift);
    }
  }

})(this);