(function() {
  angular.module('app')
    .component('home', {
      bindings: {},
      templateUrl: 'app/views/home/home.html',
      controller: function HomeViewController() {
        this.countries = [
          { id:1,  label: 'Italy', coords: '41.29,12.57'},
          { id:2,  label: 'Japan', coords: '37.49,136.46'},
          { id:3,  label: 'USA' , coords: '37.6,-95.66'},
          { id:4,  label: 'Tunisia' , coords: '35.2,15.22'},
          { id:5,  label: 'Sudan' , coords: '15.5,33.44'}
        ];

        this.country = this.countries[0];

        this.updateMap = function (item) {
          this.country = item;
        };

        this.deleteCountry = function (item) {
          var index = this.countries.indexOf(item);
          this.countries.splice(index, 1);

          if (item.id === this.country.id) {
            this.country = null;
          }
        }
      }
    })
})()