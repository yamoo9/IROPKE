/*! toggleGrid.js © yamoo9.net, 2016 */
(function(global){
  'use strict';
  document.onkeydown = function(event) {
    if( event.shiftKey && event.keyCode === 71 ) {
      document.body.classList.toggle('show-grid');
    }
  };
})(this);