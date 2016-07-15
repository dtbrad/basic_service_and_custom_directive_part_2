function DataService($http) {

  this.getPeople = function() {
    return $http.get('http://localhost:3000/people');
  }

  this.postPeople = function(name, address, city, state, zip) {
    return $http.post('http://localhost:3000/people', {name: name, address: address, city: city, state: state, zip: zip } )
  }

}

angular
    .module('app')
    .service('DataService', DataService);
