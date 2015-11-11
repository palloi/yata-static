var yata = (function() {
  'use strict';

  function init() {
    yata.general.init();
  }


  return {
    init: init
  };

}());

var mk = yata;

$(document).ready(function(){
  'use strict';
  mk.init();
});
