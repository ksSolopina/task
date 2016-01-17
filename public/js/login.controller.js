(function(angular) {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$location', 'Users'];

    function LoginCtrl($scope, $location, Users) {
        $scope.button = 'Войти';
        $scope.user = {};
        $scope.login= function () {

            if ($scope.userForm.$valid){
                Users.login($scope.user);
                $location.path('/');
            }
        }
    }
})(window.angular);
