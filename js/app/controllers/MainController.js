function MainController(DataService) {

  ctrl = this;
  ctrl.people = [];

  DataService.getPeople()
    .then(function(result){
      ctrl.people = result.data;
    });

  ctrl.addContact = function () {
    var newContact = {
      name: ctrl.newName,
      address: ctrl.newAddress,
      city: ctrl.newCity,
      state: ctrl.newState,
      zip: ctrl.newZip
    };
    DataService.postPeople(ctrl.newName, ctrl.newAddress, ctrl.newCity, ctrl.newState, ctrl.newZip)
    .then(function(data){
      ctrl.people.push(newContact);
      ctrl.newName = '';
      ctrl.newAddress = '';
      ctrl.newCity = '';
      ctrl.newState = '';
      ctrl.newZip = '';
    });
  };

};

angular
    .module('app')
    .controller('MainController', MainController);
