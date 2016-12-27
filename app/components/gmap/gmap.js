(function () {
  angular.module('app')
    .component('gmap',  {
      bindings: {
        coords: ' @'
      },
      template: '<img ng-if="$ctrl.coords" src="https://maps.googleapis.com/maps/api/staticmap?center={{$ctrl.coords}}&zoom=4&size=200x100">',
    })

    // Map directive version
    .directive('gmap2', function () {
      return {
        scope: {
          coords: '@'
        },
        template: '<img src="https://maps.googleapis.com/maps/api/staticmap?center={{coords}}&zoom=4&size=200x100">'
      }
    })

})()