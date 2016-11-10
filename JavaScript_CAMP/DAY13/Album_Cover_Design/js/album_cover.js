/*! album_cover.js © yamoo9.net, 2016 */
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
      // stop-disk 클래스 제거
      removeClass(disk, 'stop-disk');
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