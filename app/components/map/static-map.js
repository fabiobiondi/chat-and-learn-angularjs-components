(function () {
  angular.module('app')

    // Component Version
    .component('staticMap',  {
      bindings: {
        coords: ' @'
      },
      template: '<img ng-if="$ctrl.coords" src="https://maps.googleapis.com/maps/api/staticmap?center={{$ctrl.coords}}&zoom=4&size=200x100">',
      controller: function () {
        this.$onChanges = function(changes) {
          console.log (changes.coords.currentValue)
        }
      }

    })

    // Directive version
    .directive('staticMapDirective', function () {
      return {
        scope: {
          coords: '@'
        },
        template: '<img src="https://maps.googleapis.com/maps/api/staticmap?center={{coords}}&zoom=4&size=200x100">',
        link: function (scope) {
          scope.$watch('coords', function (val) {
            console.log (val)
          })
        }
      }
    })

})();