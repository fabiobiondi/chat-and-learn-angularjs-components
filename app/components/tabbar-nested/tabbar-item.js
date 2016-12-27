(function() {
  'use strict';

  angular.module('demoApp')
    .component('tabbarNestedItem', {
      bindings: {
        item: '<',
        active: '<',
        onItemClick: '&',
        onItemDelete: '&'
      },
      templateUrl: 'app/components/tabbar-nested/tabbar-item.html',
      controller: function () {
        this.itemClickHandler = function () {
          this.onItemClick({ $item: this.item });
        };

        this.itemDeleteHandler = function (event) {
          event.stopPropagation();
          this.onItemDelete({ $item: this.item });
        };

      }
    });

})();