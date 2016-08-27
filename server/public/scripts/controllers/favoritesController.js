myApp.controller("favoritesController", ["$scope", '$http', function($scope, $http) {
  console.log("favorite controller working");




    $scope.favPets = []

    $http.get('/getAnimal').then(function(response) {
    $scope.favPets = response.data;






  });
}]);
