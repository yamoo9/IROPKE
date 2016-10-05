/**
 * --------------------------------
 * trim() 메소드를 대체하는 헬퍼함수
 * ----------------------------- */
/** @function trim */
function trim(str) {
  return trimRight(trimLeft(str));
}
/** @function trimLeft */
function trimLeft(str) {
  return str.replace(/^\s+/,'');
}
/** @function trimRight */
function trimRight(str) {
  return str.replace(/\s+$/,'');
}