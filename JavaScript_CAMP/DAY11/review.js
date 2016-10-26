/*! review.js © yamoo9.net, 2016 */

// 자바스크립트 사용자 정의 객체
// 사용자 정의 객체를 생성하는 방법

// 1. 객체 리터럴(Literal) -> 싱글톤(Singleton) 패턴
// var photozone = {
//   'location': '서울',
//   'use-case': '사진 촬영',
//   'photo-database': ['photos/01.jpg', 'photos/02.jpg', 'photos/03.jpg'],
//   'getPhoto': function(id){ return this['photo-database'][id]; },
//   'addPhoto': function(){  },
//   'removePhoto': function(){  }
// };
// console.log(photozone);



// 2-1. 생성자 함수(Constructor Function)
/**
 *  @constructor Photozone
 *  @param       {string}  location
 *  @param       {string}  use_case
 *  @param       {array}   database
 */
// function Photozone( location, use_case, database ) {
//   'use strict';
//   // this.location 값을 사용자가 전달하지 않을 경우 초기화 하려면?
//   // 조건 처리
//   // 1. if문
//   // if ( !location ) { location = '부평'; }
//   // 2. switch문
//   // switch(location) {
//   //   case undefined:
//   //   case null:
//   //     location = '부곡';
//   // }
//   // 3. 3항 연산자
//   // location = location ? location : '인천';
//   // location = !location ? '인천': location;
//   // 4. 논리 연산자
//   // 사용자가 전달한 데이터 유형을 정확하게 감지하여 처리하되,
//   // 오류가 발생하면 콘솔에 이를 알리고 코드를 멈춘다.
//   // 유효성 검사
//   // 오류가 발생하면 코드를 멈추고 오류 메시지를 콘솔에 띄운다.

//   // validate( '조건', '조건이 참일 경우 오류 메시지 출력(코드 멈춤)' );
//   validate(location && typeof location !== 'string', '첫번째 인자는 문자 유형이어야 합니다.');
//   validate(use_case && typeof use_case !== 'string', '두번째 인자는 문자 유형이어야 합니다.');
//   validate(database && !(database instanceof Array), '세번째 인자는 배열 유형이어야 합니다.');
//   // if ( location && typeof location !== 'string' ) {
//   //   throw new Error('`'+ location +'`은 요구되는 인자 유형이 아닙니다. 문자형 요구');
//   // }
//   // if ( use_case && typeof use_case !== 'string' ) {
//   //   throw new Error('`'+ use_case +'`은 요구되는 인자 유형이 아닙니다. 문자형 요구');
//   // }
//   // if ( database && !(database instanceof Array) ) {
//   //   throw new Error('`'+ database +'`은 요구되는 인자 유형이 아닙니다. 문자형 요구');
//   // }

//   // 생성될 객체의 속성들
//   this.location       = location || '강릉';
//   this.use_case       = use_case || '사진 촬영';
//   this.database       = database || [];
//   // 속성 중에 함수 유형 -> 메소드
//   this['getPhoto']    = function(id){ return this.database[id]; };
//   this['addPhoto']    = function(){};
//   this['removePhoto'] = function(){};

//   // this.location = location;
//   // 느슨한 모드에서 일반 함수 형태로 실행하면 해당 함수는 전역 함수처럼 동작하게 된다.
//   // 고로 this는 암묵적으로 참조하고 있는 전역 객체인 window {}를 가리키게 된다.
//   return this; // 엄격한 모드일 때의 this VS 느슨한 모드일 때의 this 비교
// }

console.log( 'Photozone === window.Photozone:', Photozone === window.Photozone );
console.log('%c------------------------------', 'color: #3d9a21');
// console.log('Photozone(): 의 this', Photozone('서울'));     // 일반 함수로 Photozone 실행
console.log('%c------------------------------', 'color: #3d9a21');
// console.log('new Photozone(): 의 this', new Photozone()); // 생성자 함수로 Photozone 실행

// 생성자 함수를 사용하여 객체 생성
// var seoul_photozon = new Photozone('서울', '연인 촬영', ['lover/01.png']);
// var iropke_photozon = new Photozone('서울', '사내 직원 문화 촬영', ['iropke/curture/01.png', 'iropke/curture/02.png']);
// var bipan_photozon = new Photozone('부천', '부천 판타스틱 영화제 촬영', ['bipan/movie/01.png', 'bipan/movie/02.png', 'bipan/movie/02.png']);

// console.log('seoul_photozon:', seoul_photozon);
// console.log('iropke_photozon:', iropke_photozon);
// console.log('bipan_photozon:', bipan_photozon);



// 2-2. 프로토타입 객체(Prototype Object)
function Photozone( location, use_case, database ) {
  'use strict';
  validate(location && typeof location !== 'string', '첫번째 인자는 문자 유형이어야 합니다.');
  validate(use_case && typeof use_case !== 'string', '두번째 인자는 문자 유형이어야 합니다.');
  validate(database && !(database instanceof Array), '세번째 인자는 배열 유형이어야 합니다.');

  // -----------------------------------------------------------------------------------------------
  // new를 강제화 하는 디자인(설계) 패턴

  // 'use strict'를 사용할 경우
  // if ( this === undefined ) { return new Photozone( location, use_case, database ) }

  // 'use strict'를 사용하지 않을 경우
  // case 1
  // if ( this === window ) { return new Photozone( location, use_case, database ); }
  // case 2
  // if ( this.constructor !== Photozone ) { return new Photozone( location, use_case, database ); }

  this.locations      = location || '강릉';
  this.use_case       = use_case || '사진 촬영';
  this.database       = database || [];
  // return this;
}

// 공통(재사용) 메소드 (프로토타입 객체에 능력을 할당)
Photozone.prototype.getPhoto    = function() {};
Photozone.prototype.addPhoto    = function() {};
Photozone.prototype.removePhoto = function() {};

// 생성자 함수를 사용하여 객체 생성
var seoul_photozon = new Photozone(
  '서울', '연인 촬영', ['lover/01.png']
);
var iropke_photozon = new Photozone(
  '서울', '사내 직원 문화 촬영', ['iropke/curture/01.png', 'iropke/curture/02.png']
);
var bipan_photozon = new Photozone(
  '부천', '부천 판타스틱 영화제 촬영', ['bipan/movie/01.png', 'bipan/movie/02.png', 'bipan/movie/02.png']
);

console.log('seoul_photozon:', seoul_photozon);
console.log('iropke_photozon:', iropke_photozon);
console.log('bipan_photozon:', bipan_photozon);

// --------------------------------------------------------------------------------
// 객체지향 자바스크립트 상속

/////////
// ES3 //
/////////

// 수퍼 클래스
var SuperClass = function(name) {
  this.name = name;
};
SuperClass.prototype = {
  'getName': function () { return this.name; },
  'setName': function(name) { this.name = name; }
};
// 서브 클래스
var SubClass = function(name, job) {
  // super 수퍼 생성자 함수 실행
  SuperClass.apply(this, arguments);
  this.job = job;
};

// 프로토타입 상속
SubClass.prototype = new SuperClass();
SubClass.prototype.constructor = SubClass;
SubClass.prototype.getJob = function() {
  return this.job;
};
