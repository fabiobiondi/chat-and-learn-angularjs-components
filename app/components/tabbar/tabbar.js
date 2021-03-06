(function() {
  'use strict';

  angular.module('app')
    .component('tabbar', {
      bindings: {
        items: '<',
        active: '<',
        onItemClick: '&'
      },
      templateUrl: 'app/components/tabbar/tabbar.html',
      controller: function TabBarController () {
        this.itemClickHandler = function (item) {
          this.onItemClick({ $item: item})
        }
      }
    });

})();