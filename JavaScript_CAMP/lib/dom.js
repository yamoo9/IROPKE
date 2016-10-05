/** @function query */
function query(selector) {
  return document.querySelector(selector);
}

/** @function hasClass */
function hasClass(target_el, class_name) {
  var _classes = target_el.getAttribute('class').split(' ');
  for ( var i=0, l=_classes.length; i<l; i++ ) {
    if( _classes[i] === class_name) {
      return true;
    }
  }
  return false;
}

/** @function assignClass */
function assignClass(target_el, class_name) {
  if ( !target_el || target_el.nodeType !== 1 ) { throw new Error('전달인자 유형을 올바르게 확인해주세요.'); }
  // 이미 class_name 이름 값을 target_el 소유하고 있다면 함수 종료
  if ( !hasClass( target_el, class_name ) ) {
    var _org_class_name = target_el.getAttribute('class') || '';
    target_el.setAttribute('class', trim(_org_class_name + ' ' + class_name) );
  }
}

/** @function removeClass */
function removeClass(target_el, class_name) {
  if ( !class_name ) { target_el.setAttribute('class', ''); }
  var _class = target_el.getAttribute('class');
  _class = _class.replace(class_name, ''); // 'name '
  target_el.setAttribute( 'class', trim(_class) );
}

/** @function getWindowWidth */
function getWindowWidth() {
  // innerWidth IE 9+
  return window.innerWidth || document.body.clientWidth;
}