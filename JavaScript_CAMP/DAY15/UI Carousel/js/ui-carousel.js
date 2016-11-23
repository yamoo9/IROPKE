/*! ui-carousel.js © yamoo9.net, 2016 */

// 애니메이션 헬퍼 함수
(function(global){
  'use strict';
  global.playAnimation = function (callback, ms) {
    return global.setInterval(callback, ms);
  };
  global.stopAnimation = function (id) {
    global.clearInterval(id);
  };
})(this);

// TODO:
// 0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
// 1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
// 2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
// 3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
// 4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
// 5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
// 6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
// 7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )

(function(global){
  'use strict';

  // 참조 변수
  var doc = global.document;

  // 초기 변수
  var active_index        = 0;
  var automation_duration = 500;
  var using_animation     = true;
  var interval_id         = 0;
  var widget, tablist, tabs, prev_btn, next_btn, tabpanel_wrapper;

  // 컴포넌트 초기화(Component Initialization)
  var init = function() {
    // 캐러셀 컴포넌트 객체 참조
    referenceCarouselControls();
    // 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
    settingTabpanelWidth();
    // 이벤트 바인딩(Binding Events)
    bindEvents();
    // 자동으로 애니메이션 설정
    using_animation && playCarousel();
  };

  // 핸들러 및 함수 정의(Define Event Handlers & Functions)
  var referenceCarouselControls = function() {
    widget           = doc.querySelector('.ui-carousel');
    tablist          = widget.querySelector('.ui-carousel-tablist');
    tabs             = tablist.querySelectorAll('.ui-carousel-tab');
    prev_btn         = widget.querySelector('.ui-carousel-prev-button');
    next_btn         = widget.querySelector('.ui-carousel-next-button');
    tabpanel_wrapper = widget.querySelector('.ui-carousel-tabpanel-wrapper');
  };
  var settingTabpanelWidth = function() {
    var tabpanels = tabpanel_wrapper.children;
    for ( var tabpanel, i=0, l=tabpanels.length; i<l; i++ ) {
      tabpanel = tabpanels[i];
      tabpanel.style.width = widget.clientWidth + 'px';
    }
    tabpanel_wrapper.style.width = tabpanels[0].clientWidth * l + 'px';
  };
  var resizeCarouselSize = function() {
    widget.style.height = tabpanel_wrapper.children[0].clientHeight + 'px';
    settingTabpanelWidth();
    activeTab.call(tabs[active_index], active_index);
  };
  var bindEvents = function() {
    // 문서 준비 마무리 & 리사이즈 이벤트 바인딩
    global.addEventListener('DOMContentLoaded', resizeCarouselSize);
    global.addEventListener('resize', resizeCarouselSize);
    // 캐러셀 컴포넌트 마우스 이벤트 바인딩
    widget.addEventListener('mouseenter', stopCarousel);
    widget.addEventListener('mouseleave', playCarousel);
    // 탭 이벤트 바인딩
    for(var tab, i=0, l=tabs.length; i<l; i++) {
      tab         = tabs[i];
      tab.idx     = i;
      tab.onclick = activeTab.bind(tab, tab.idx);
      tab.onfocus = stopCarousel;
    }
    // 버튼 이벤트 바인딩
    prev_btn.onclick = prevActiveTab;
    next_btn.onclick = nextActiveTab;
    // prev_btn.onfocus = stopCarousel;
    // next_btn.onfocus = stopCarousel;
  };
  var activeTab = function(idx, e) {
    // 이벤트 객체가 전달된 경우에만 기본 동작 차단
    if (e) { e.preventDefault(); }
    var distance_x = widget.clientWidth * idx * -1;
    tabpanel_wrapper.style.left = distance_x + 'px';
    updateIndicator(this);
  };
  var updateIndicator = function(activate_tab) {
    var parent          = activate_tab.parentNode;
    var parent_siblings = parent.parentNode.children;
    for ( var sibling, i=0, l=parent_siblings.length; i<l; i++ ) {
      sibling = parent_siblings[i];
      if(sibling.classList.contains('active')) {
        sibling.classList.remove('active');
        break;
      }
    }
    parent.classList.add('active');
    active_index = activate_tab.idx;
  };
  var prevActiveTab = function() {
    active_index = --active_index < 0 ? (tabpanel_wrapper.children.length - 1) : active_index;
    activeTab.call(tabs[active_index], active_index);
  };
  var nextActiveTab = function() {
    active_index = ++active_index % tabpanel_wrapper.children.length;
    activeTab.call(tabs[active_index], active_index);
  };
  var playCarousel = function() {
    interval_id = global.playAnimation( nextActiveTab, automation_duration );
  };
  var stopCarousel = function() {
    global.stopAnimation(interval_id);
  };

  // 컴포넌트 실행(Excute Component)
  init();

})(this);


// --------------------------------------------------------------------------------

// DOMContentLoaded, resize 이벤트에 따른
// 캐러셀 컴포넌트 높이 자동 변경 처리 스크립트
(function(global){
  'use strict';

  // -------------------------------------------------------------------------
  // 문서 객체 참조

  var doc         = global.document;
  var carousel    = doc.querySelector('.ui-carousel');
  var tab_wrapper = carousel.querySelector('.ui-carousel-tabpanel-wrapper');

  // -------------------------------------------------------------------------
  // 이벤트 핸들러

  /** @function resizeCarouselHeight() 캐러셀 컴포넌트 높이를 변경하는 함수 */
  var resizeCarouselHeight = function() {
    var tab_panel = tab_wrapper.querySelector('.ui-carousel-tabpanel');
    carousel.style.height = tab_panel.clientHeight + 'px';
  };

  // -------------------------------------------------------------------------
  // 이벤트 핸들링

  global.addEventListener('DOMContentLoaded', resizeCarouselHeight);
  global.addEventListener('resize', resizeCarouselHeight);

}) // (this);
