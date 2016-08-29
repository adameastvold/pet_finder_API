myApp.controller("favoritesController", ["$scope", '$http', function($scope, $http) {
  console.log("favorite controller working");


    $scope.favPets = [];

    $scope.getFavorites = function(){
        $http.get('/getAnimal').then(function(response) {
        $scope.favPets = response.data;
    console.log('these are your pets sent to the fav page', $scope.favPets);

      //  Below was my attempt to begin the filtering function on the favorites page
      //
      // var tempArray = $scope.favPets;
      // var veryTempArray = [];
      //
      // tempArray.forEach(){
      //   if (favPets.pet_type == dogs){
      //     $scope.getFavorites
      //   }
      // }

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
