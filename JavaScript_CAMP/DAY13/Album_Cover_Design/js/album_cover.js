/*! album_cover.js © yamoo9.net, 2016 */
(function(global){
  'use strict';

  // 초기 설정(init)
  // 문서에서 다음 객체를 컨트롤
  // .album 참조
  var document = global.document;
  var album = document.querySelector('.album');

  // album 참조 변수에 이벤트 연결(bind event)
  album.addEventListener('mouseenter', moveDisk);
  album.addEventListener('click', playDisk);
  album.addEventListener('click', stopDisk);

  // 이벤트에 따른 함수 정의
  function moveDisk(evt) {
    // var name = 'moveDisk';
    // console.log('event type:', evt.type);
    // 사용자가 앨범에 마우스를 올리면.
    // 디스크 요소에 move-disk 클래스 속성을 추가한다.
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