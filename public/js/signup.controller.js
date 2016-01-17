(function(angular) {
    'use strict';

    angular
        .module('app')
        .controller('SignupCtrl', SignupCtrl);

    SignupCtrl.$inject = ['$scope', '$location', 'Users'];

    function SignupCtrl($scope, $location, Users) {
        $scope.button = 'Зарегистрироваться';
        $scope.user = {};
        $scope.save = function () {
            if ($scope.userForm.$valid){
                Users.signup($scope.user);
                $location.path('/');
            }
        }
    }
})(window.angular);
