var app = angular.module('myApp', []);

app.service('Answer', function() {
  this.score = {
    correct: 0,
    total: 0
  };
});

app.controller('buttonCtrl', function($scope, Answer) {
  $scope.isDisabled = false;
  $scope.choose = function() {
    var decisions = document.getElementsByName('Q');
      if (decisions[1].checked === false) {
        Answer.score.total++
        $scope.isDisabled = true;
        return $scope.display = "You've answered " + Answer.score.correct + "/" + Answer.score.total + " correctly!";
      } else {
        Answer.score.correct++
        Answer.score.total++;
        $scope.isDisabled = true;
        return $scope.display = "You've answered " + Answer.score.correct + "/" + Answer.score.total + " correctly!";
      }
  }
});

