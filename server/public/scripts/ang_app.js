var myApp = angular.module('myApp', ["ngRoute"]);


// ===========DROP DOWN BUTTON & SEARCH============
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
//==================================================


myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/home", {
        templateUrl: "/views/partials/home.html",
    }).
    when("/cats", {
        templateUrl: "/views/partials/animals/cats.html",
        controller: "catController"
    }).
    when("/dogs", {
        templateUrl: "/views/partials/animals/dogs.html",
        controller: "dogController"
    }).
    when("/birds", {
        templateUrl: "/views/partials/animals/birds.html",
        controller: "birdController"
    }).
    when("/horses", {
        templateUrl: "/views/partials/animals/horses.html",
        controller: "horseController"
    }).
    when("/pigs", {
        templateUrl: "/views/partials/animals/pigs.html",
        controller: "pigController"
    }).
    when("/reptiles", {
        templateUrl: "/views/partials/animals/reptiles.html",
        controller: "reptileController"
    }).
    when("/barnyard", {
        templateUrl: "/views/partials/animals/barnyard.html",
        controller: "barnyardController"
    }).
    when("/smallfurry", {
        templateUrl: "/views/partials/animals/smallfurry.html",
        controller: "smallfurryController"
    }).
    when("/favorites", {
      templateUrl: "/views/partials/favorites.html",
      controller: "favoritesController"
    }).
    // when("/fish", {
    //     templateUrl: "/views/partials/fish.html",
    //     controller: "fishController"
    // }).
    otherwise({
        redirectTo: "/home"
    });
}]);


// myApp.controller("catController", ["$scope", function($scope) {
//     console.log("cat controller working");
//     $scope.quote = "cats forever";
//
//     var key = 'd8407e0642d9c9aeac96a6ce132aa656';
//     var baseURL = 'http://api.petfinder.com/';
//     $scope.breed = '';
//
//     $scope.getRandomPet = function() {
//         var query = 'pet.getRandom';
//         query += '?key=' + key;
//         // query += '&animal=dog';
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
//                 $scope.getBreeds();
//             }
//         )
//     }
//
//
// }]);

// myApp.controller("dogController", ["$scope", function($scope) {
//     console.log("dog controller workin");
//     $scope.quote = "woof woof bishes";
//
//     var key = 'd8407e0642d9c9aeac96a6ce132aa656';
//     var baseURL = 'http://api.petfinder.com/';
//     $scope.breed = '';
//
//     $scope.getRandomPet = function() {
//         var query = 'pet.getRandom';
//         query += '?key=' + key;
//         // query += '&animal=dog';
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
//                 $scope.getBreeds();
//             }
//         )
//     }
//
//
// }]);

// myApp.controller("fishController", ["$scope", function($scope) {
//     console.log("fishes controller");
//     $scope.quote = "swim swam swum";
// }]);

//
// myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//     var key = 'your api key here';
//     var baseURL = 'http://api.petfinder.com/';
//     $scope.breed = '';
//
//     $scope.getRandomPet = function() {
//         var query = 'pet.getRandom';
//         query += '?key=' + key;
//         // query += '&animal=dog';
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
//                 $scope.getBreeds();
//             }
//         )
//     }
//
//     $scope.getBreeds = function() {
//         var query = 'breed.list';
//         query += '?key=' + key;
//         query += '&animal=' + $scope.breed.toLowerCase();
//         query += '&format=json';
//
//         var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//         console.log(request);
//
//         $http.jsonp(request).then(
//             function(response) {
//                 console.log('breeds: ', response.data);
//                 $scope.breeds = response.data.petfinder.breeds.breed;
//             }
//         )
//     }
//
// }]);
