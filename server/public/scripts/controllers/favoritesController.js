myApp.controller("favoritesController", ["$scope", '$http', function($scope, $http) {
  console.log("favorite controller working");




    $scope.favPets = [];

    $scope.getFavorites = function(){

    $http.get('/getAnimal').then(function(response) {
    $scope.favPets = response.data;

    })};

    angular.element(document).ready($scope.getFavorites);

    $scope.favCount = "";




    $scope.petFavCount = function(){

    $http.get('/getFavCount').then(function(response) {
    $scope.favCount = response.data;
    console.log($scope.favCount);



    })};

    angular.element(document).ready($scope.petFavCount);






$scope.deletePet = function(petID){

    $http.delete('/deletePet/' + petID).then(function(){
    console.log('delete went through');

    $scope.getFavorites();
    $scope.petFavCount();
  })};
}]);
