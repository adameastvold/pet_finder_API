myApp.controller("pigController", ["$scope", '$http', function($scope, $http) {
    console.log("pig controller working");
    $scope.quote = "pigs can fly";

    var key = 'd8407e0642d9c9aeac96a6ce132aa656';
    var baseURL = 'http://api.petfinder.com/';

    $scope.getRandomPet = function() {
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=pig';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                console.log(response.data);
                $scope.animal = response.data.petfinder.pet;
            });
    };


    $scope.favoritePet = function(animalName, animalDescription, animalPhoto, animalID) {

        var animal = {
            name: animalName,
            description: animalDescription.substring(0, 101),
            photo: animalPhoto,
            pet_id: animalID
        };
        console.log("this is your animal your animal object:", animal);

        $http.post('/postAnimal', animal)
        .then(function(response) {
        console.log("post success response: ", response);

      });

    };

    $scope.favCount = "";

    $scope.petFavCount = function(){

    $http.get('/getFavCount').then(function(response) {
    $scope.favCount = response.data;
    console.log($scope.favCount)



    })};

    angular.element(document).ready($scope.petFavCount);

}]);
