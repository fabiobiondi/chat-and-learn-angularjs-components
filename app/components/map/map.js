(function () {
  angular.module('app')

    .component('map', {
      restrict: 'E',
      bindings: {
        coords: '<',
      },
      template: '<div class="map"></div>',
      controller: function($element) {
        var el = $element.children()[0];
        var map = new google.maps.Map(el, { zoom: 5});

        // OnChange hook
        this.$onChanges = function (changes) {
          // Check if coords is undefined
          if(!angular.isUndefined(changes.coords)) {
            var coords = changes.coords.currentValue;
            // extract coords from string
            var lat = coords.split(',')[0];
            var lng = coords.split(',')[1];
            // move map
            map.setCenter({
              lat: parseInt(lat),
              lng: parseInt(lng)
            })
          }
        }


      }
    })

})();