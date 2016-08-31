myApp.factory('animalFactory', ['$http', function($http) {
  console.log('animal factory up and running');

// api info (public api)
  var key = 'd8407e0642d9c9aeac96a6ce132aa656';
  var baseURL = 'http://api.petfinder.com/';
  var animal = undefined;

  var animalType = ['barnyard', 'bird', 'cat', 'dog', 'horse', 'pig', 'reptile', 'smallfurry']


//================GET FUNCTION=======================
  var getRandomPet = function(type) {  // remember to set type up
      var query = 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=' + type;
      query += '&output=basic';
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

      console.log(request);

      var promise = $http.jsonp(request).then(function(response) {
              console.log(response.data);
              animal = response.data.petfinder.pet;   // var animal used to be scoped
              return animal;
          });
          return promise;
  };






return {
  key: key,
  baseURL: baseURL,
  animal: function(){
    return animal;
  },
  getRandomPet: function(type) {
    return getRandomPet(type);
  }
};


}]);
