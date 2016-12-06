angular.module('myApp', [])
  .controller('appCtrl', function($scope) {
    $scope.score = 0;
    $scope.total = 0;
    $scope.answer = false;
    $scope.display = "You've answered" + $scope.score + "/" + $scope.total + "correctly!";
  })
  .controller('buttonCtrl', function($scope) {
    $scope.isDisabled = false;
    $scope.choose = function() {
      alert('This works!');
      $scope.isDisabled = true;
    }
  })
  // .factory('levelUp', function($scope.answer, $scope.score, $scope.total) {
  //     var addToScore = function() {
  //       if ($scope.answer === true) {
  //         $scope.score++;
  //         $scope.total++;
  //         return $scope.display;
  //       } else {
  //         $scope.total++;
  //         return $scope.display;
  //       }
  //   };

  //   return {
  //     levelUp: levelUp
  //   };
  // });
