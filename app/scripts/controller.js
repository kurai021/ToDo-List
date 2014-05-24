angular.module('TODO-list', [])

.controller('mainController', ['$scope', function($scope) {
    
    var show = false;
    
    $scope.showbutton = function(){
        show = true;
    }

    $scope.hidebutton = function(){
        show = false;
    }

    $scope.showtasks = function(){
        return show;
    }
}]);