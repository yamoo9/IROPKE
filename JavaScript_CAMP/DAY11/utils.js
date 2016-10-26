/** @function validate */
function validate(condition, message) {
  if ( condition ) { throw new Error( message || '오류가 발생했습니다. :(' ); }
}