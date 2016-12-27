(function() {
  'use strict';

  angular.module('app')
    .component('tabbarRequireItem', {
      bindings: {
        item: '<',
        active: '<'
      },
      require: {
        home: '^home'
      },
      templateUrl: 'app/components/tabbar-require/tabbar-item.html',
      controller: function TabBarRequireItemController() {

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