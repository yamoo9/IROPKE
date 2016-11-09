/*! album_cover.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  var hasClass, addClass, removeClass, toggleClass, radioClass;

  // 조건 확인: 사용자의 웹 브라우저가 classList를 지원하는가?
  // classList 지원 브라우저
  if ( 'classList' in Element.prototype ) {

    hasClass = function(el, check_class) {
      return el.classList.contains(check_class);
    };

    addClass = function(el, assign_class) {
      el.classList.add(assign_class);
    };

    removeClass = function(el, delete_class) {
      el.classList.remove(delete_class);
    };

    toggleClass = function(el, toggle_class) {
      el.classList.toggle(toggle_class);
    };

  }
  // classList 미지원 브라우저
  else {

    hasClass = function(el, check_class) {
      // @el          {element_node}
      // @check_class {string}
      var check_class = new RegExp('(^|\\s+)'+ check_class +'(\\s+|$)');
      return check_class.test( el.getAttribute('class') );
    };

    addClass = function(el, assign_class) {
      // 해당 클래스 속성이 이미 존재하면 함수 종료
      if ( hasClass(el, assign_class) ) { return; }
      // @el           {element_node}
      // @assign_class {string}
      var pre_class = el.getAttribute('class');
      el.setAttribute('class', pre_class + ' ' + assign_class);
    };

    // 'design a m designs d k design b ddesign c d design'.replace(/(^|\s+)design(\s+|$)/g, ' ');
    // 'design a designs d design b ddesign c design design'.match(/(^|\s+)design(\s+|$)/g);
    removeClass = function(el, delete_class) {
      if ( hasClass(el, delete_class) ) {
        var reg = new RegExp('(^|\\s+)' + delete_class + '(\\s+|$)', 'g');
        el.getAttribute('class').replace(reg, ' ');
      }
    };

    toggleClass = function(el, toggle_class) {
      // hasClass, addClass, removeClass
      if ( hasClass(el, toggle_class) ) {
        removeClass(el, toggle_class);
      } else {
        addClass(el, toggle_class);
      }
      // hasClass(el, toggle_class) ? removeClass(el, toggle_class) : addClass(el, toggle_class);
    };

  }

  radioClass = function(el, radio_class) {
    // hasClass, addClass, removeClass, toggleClass
  };

  global.hasClass    = hasClass;
  global.addClass    = addClass;
  global.removeClass = removeClass;
  global.toggleClass = toggleClass;
  global.radioClass  = radioClass;

})(this);

(function(global){
  'use strict';

  // 초기 설정(init)
  // 문서에서 다음 객체를 컨트롤
  // .album 참조
  var document         = global.document;
  var album            = document.querySelector('.album');

  // 오디오 객체 생성
  var sound = new Audio();
  sound.setAttribute('src', 'media/Eton-Messy-Presents.mp3');
  var tic = new Audio();
  tic.setAttribute('src', 'media/tic.mp3');

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

    // 효과음 재생
    tic.play();
  }
  function playDisk(evt) {
    // var name = 'playDisk';
    var pressed_shift = evt.shiftKey; // false
    if ( !pressed_shift ) {
      // console.log('event type:', evt.type, name);
      var disk = this.querySelector('.album-disk');
      // move-disk 클래스 제거
      // removeClass(disk, 'move-disk');
      // 디스크 요소에 play-disk 클래스를 추가
      addClass(disk, 'play-disk');
      // 오디오 재생
      sound.play();
    }
  }
  function stopDisk(evt) {
    // var name = 'stopDisk';
    var pressed_shift = evt.shiftKey; // true
    if ( pressed_shift ) {
      // console.log('event type:', evt.type, name, pressed_shift);

      // 디스크 객체를 찾아
      var disk = this.querySelector('.album-disk');
      removeClass(disk, 'play-disk');
      addClass(disk, 'stop-disk');

      // 오디오 사운드 일시 정지
      sound.pause();
    }
  }

})(this);