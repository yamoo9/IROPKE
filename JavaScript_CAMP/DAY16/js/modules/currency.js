/*! currency.js © yamoo9.net, 2016 */
'use strict';

let currency = (n=1000, sign='원', position='after')=> {
  // 1. 전달인자 숫자/문자 → 배열화
  n = (n+'').split('');

  // 2. 배열 데이터 순환
  for (let i = n.length - 3; i>0; i-=3 ) {
    // 3. 끝에서 3번째 자리마다 앞에 콤마(,) 삽입
    n.splice(i, 0, ',');
  }
  // 4. 배열 → 문자화 후에 결과 반환
  let result_currency = n.join('');
  return position==='after' ?
    result_currency + sign :
    sign + result_currency;
};

// 모듈 공개(외부로 노출)
module.exports = currency;
