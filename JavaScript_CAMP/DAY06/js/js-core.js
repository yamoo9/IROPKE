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
    // 조건이 참일 경우, 함수를 반환
    _getGeo = function(success, error) {
      return geo.getCurrentPosition(success, error);
    };
  } else {
    // 조건이 거짓일 경우, null을 반환
    console.info('지도 서비스를 사용할 수 없습니다.');
  }
  return _getGeo;
}
// checkGeo() 함수에서 반환된 _getGeo 함수를 전역 변수 getGeo에 참조한다.
var getGeo = checkGeo();

// getGeo() 함수 사용 예
getGeo(function(position){
  // 위도, 경도
  var latitude, longitude;
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  // 지도 API에 사용
  // console.log('latitude:', latitude);
  // console.log('longitude:', longitude);
});

// ----------------------------------------------------
// 객체를 반환하는 함수
// 반환된 객체는 함수 실행 이후에도 실행된 함수 컨텍스트에 접근이 가능.
// 반환된 객체는 모듈로서 사용될 수 있다.
// 모던 모듈 패턴에 자주 사용된다.


// 기본적으로 자바스크립트의 리터럴 표현식을 사용한 객체는
// 모든 멤버(속성)가 공개되어서 수정될 우려가 있다.
// 비공개 멤버가 존재하지 않는다.
var obj = {
  'name': '글로벌 객체',
  'getOwn': function() {
    console.log(this);
  }
};

// console.dir( obj );
// console.log( obj.name );
// console.log( obj.getOwn() );
// 전역에 공개된 객체 obj의 속성을 제거
// delete obj.getOwn;
// console.log( typeof obj.getOwn ); // 속성이 제거되었다.

// 비공개 멤버를 가진 객체를 구현하기 위한
// 클로저 사용 (객체 반환)
function singletonObj() {
  // 지역 변수
  // 외부에 공개되지 않은 비공개 멤버
  var _name = '글로벌 객체';
  var _count = 0;
  var _getOwn = function() {
    console.log(this);
  };
  var _countUp = function() {
    return ++_count;
  }
  // [모듈 노출 패턴] 외부에 노출되는 공개 객체
  var _obj = {
    // 'name': _name,
    // 'getOwn': _getOwn,
    // 'countUp': _countUp
  };
  return _obj;
  // return undefined;
}

// 디자인 패턴 [객체를 생성하는 패턴: 싱글톤 객체]
var obj2 = singletonObj();

console.log(obj2);

// obj2.name = '외부에서 변경을 가한 멤버';

// console.log(obj2);

// ----------------------------------------------------
// 스코프 체이닝(영역 탐색, Scope Chaining)
// 성능과 밀접한 관계

// 전역 변수, 함수 정의
// var x = 9;

// function fn() {
//   var y = -10;
//   function inFn() {
//     var z = 82;
//     console.log('inFn에서 처리:', x + y * z); // 9 + -10 * 82
//   }
//   inFn();
// }

// fn();

// console.log('전역:', x);

// ----------------------------------------------------
// 미션
// "스코프 체이닝"으로 인해 성능이 악화되는 것을 방지하려면?

// var x = 9;

// function fn(x) {
//   var y = -10;
//   function inFn(x, y) {
//     var z = 82;
//     console.log('inFn에서 처리:', x + y * z); // 9 + -10 * 82
//   }
//   inFn(x, y);
// }

// fn(x);

// console.log('전역:', x);

// ----------------------------------------------------
// IIFE 패턴
// 즉시 실행되는 함수 패턴
// 모듈 패턴
// 클로저를 활용하는 패턴

// IIFE 패턴 유형
(function(){}()); // 권장 (Yahoo 엔지니어 더글라스 크록포드 추천!!!)
(function(){})(); // 권장
+function(){}();
!function(){}();
~function(){}();

// 무명(익명) 함수: 함수의 이름이 없다.
// IIFE 패턴: 함수를 괄호()로 감싸 바로 실행시킨다.
var count = (function(setting_count) {
  var count = setting_count || 100;
  function counterInner() {
    return count--;
  }
  return counterInner;
}(30));

