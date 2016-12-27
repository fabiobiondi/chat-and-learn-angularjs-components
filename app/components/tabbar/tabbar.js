(function() {
  'use strict';

  angular.module('demoApp')
    .component('tabbar', {
      bindings: {
        items: '<',
        active: '<',
        onItemClick: '&'
      },
      templateUrl: 'app/components/tabbar/tabbar.html',
      controller: function () {
        this.itemClickHandler = function (item) {
          this.onItemClick({ $item: item})
        }
      }
    });

})();