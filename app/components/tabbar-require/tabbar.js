(function() {
  'use strict';

  angular.module('demoApp')
    .component('tabbarRequire', {
      bindings: {
        items: '<',
        active: '<',
        onItemClick: '&',
        onItemDelete: '&'
      },
      templateUrl: 'app/components/tabbar-require/tabbar.html',
      controller: function () {
        this.itemClickHandler = function (item) {
          this.onItemClick({ $item: item });
        }

        this.itemDeleteHandler = function (item) {
          this.onItemDelete({ $item: item });
        }
      }
    });

})();