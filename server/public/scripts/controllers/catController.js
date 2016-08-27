myApp.controller("catController", ["$scope", '$http', function($scope, $http) {
    console.log("cat controller working");
    $scope.quote = "cats forever";

    var key = 'd8407e0642d9c9aeac96a6ce132aa656';
    var baseURL = 'http://api.petfinder.com/';
    $scope.breed = '';

    $scope.getRandomPet = function() {
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=cat';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                console.log(response.data);
                $scope.animal = response.data.petfinder.pet;
                // $scope.breed = $scope.animal.animal.$t;
                // $scope.getBreeds();
            }
        )
    }
}]);


// myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//     var key = 'd8407e0642d9c9aeac96a6ce132aa656';
//     var baseURL = 'http://api.petfinder.com/';
//     $scope.breed = '';
//
//     $scope.getRandomPet = function() {
//         var query = 'pet.getRandom';
//         query += '?key=' + key;
//         query += '&animal=cat';
//         query += '&output=basic';
//         query += '&format=json';
//
//         var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//         console.log(request);
//
//         $http.jsonp(request).then(
//             function(response) {
//                 console.log(response.data);
//                 $scope.animal = response.data.petfinder.pet;
//                 $scope.breed = $scope.animal.animal.$t;
//                 // $scope.getBreeds();
//             }
//         )
//     }
//
//     // $scope.getBreeds = function() {
//     //     var query = 'breed.list';
//     //     query += '?key=' + key;
//     //     query += '&animal=' + $scope.breed.toLowerCase();
//     //     query += '&format=json';
//     //
//     //     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//     //
//     //     console.log(request);
//     //
//     //     $http.jsonp(request).then(
//     //         function(response) {
//     //             console.log('breeds: ', response.data);
//     //             $scope.breeds = response.data.petfinder.breeds.breed;
//     //         }
//     //     )
// //     // }
// //
// // }]);
