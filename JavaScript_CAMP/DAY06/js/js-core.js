/*! JavaScript Core © yamoo9.net, 2016 */

// 지난 시간에 공부한 내용
// this 컨텍스트 참조 변수
// 함수 일급 객체
// 함수를 함수의 전달인자로 설정
// 함수를 함수를 통해 반환

// parentScopeFn 영역
function parentScopeFn() {

  // 상위 스코프와 구별되는 별도의 독립적인 공간이 형성
  var in_parentScope_var = 9;

  // 반환 값: 함수 데이터 유형
  // Closure 함수
  return function(n) {
    // n 전달인자의 초기 값 설정
    n = n || 1;
    return in_parentScope_var * n;
  };

}

var global_var = parentScopeFn();
// console.log(typeof global_var); // 'function'
// console.log( global_var(9) );
// console.log( global_var(20) );
// console.log( global_var(12) );
// console.log( global_var(-102) );

// 접근이 불가능!
// console.log( in_parentScope_var );

// --------------------------------------------------------------
// geolocation
// 지도 서비스를 수행할 수 있도록 도와주는 네이티브 API

// // var support_geo = Boolean(this.navigator.geolocation);
// var support_geo = !!this.navigator.geolocation;

// // console.log('geolocation 지원 여부:', support_geo);

// if ( support_geo ) {
//   console.log('지도 서비스를 사용할 수 있습니다.');
// } else {
//   console.info('지도 서비스를 사용할 수 없습니다.');
// }

// ----------------------------------------------------
// [미션]
// geolocation 객체를 사용자의 웹 브라우저가 지원하는지,
// getGeo() 함수를 매번 수행하더라도 1회만 확인하고자 한다.
// [힌트]
// 함수가 함수를 반환할 수 있는 자바스크립트 함수의 특징을 이용.

// function getGeo() {
//   var support_geo = !!this.navigator.geolocation;
//   if ( support_geo ) {
//     console.log('지도 서비스를 사용할 수 있습니다.');
//   } else {
//     console.info('지도 서비스를 사용할 수 없습니다.');
//   }
// }

// 함수를 실행할 때 마다 조건문을 통해
// 사용자의 웹 브라우저가 기능을 지원하는지 확인해야 한다.
// getGeo();
// getGeo();

// ----------------------------------------------------
// 미션 풀이
// getGeo() 함수를 사용하기 위한 체크 함수 정의 (조건 1회 체크)
function checkGeo() {
  var geo = window.navigator.geolocation;
  var _getGeo = null;
  if ( geo ) {
    _getGeo = function(success, error) {
      return geo.getCurrentPosition(success, error);
    };
  } else {
    console.info('지도 서비스를 사용할 수 없습니다.');
  }
  return _getGeo;
}
// checkGeo() 함수에서 반환된 _getGeo 함수를 전역 변수 getGeo에 참조한다.
var getGeo = checkGeo();

// getGeo() 함수 사용 예
getGeo(function(position){
  console.log(position);
});