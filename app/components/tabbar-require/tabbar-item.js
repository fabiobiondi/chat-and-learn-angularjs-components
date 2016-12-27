(function() {
  'use strict';

  angular.module('app')
    .component('tabbarRequiredItem', {
      bindings: {
        item: '<',
        active: '<'
      },
      require: {
        home: '^home'
      },
      templateUrl: 'app/components/tabbar-require/tabbar-item.html',
      controller: function () {

        this.itemClickHandler = function () {
          // directly invoke 'home' controller methods
          this.home.updateMap(this.item);
        };

        this.itemDeleteHandler = function (event) {
          event.stopPropagation();
          // directly invoke 'home' controller methods
          this.home.deleteCountry(this.item);
        };

      }
    });

})();