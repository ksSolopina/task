(function(angular) {
    'use strict';

    angular
        .module('app')
        .factory('Users', Users);

    Users.$inject = ['$http'];

    function Users($http) {

        var errorMessage = '';

        function signup(user){
            return $http.post('/signup', user).
            success(function(response) {
                console.log(response);
            }).error(function(err) {
                errorMessage = err;
        });

        }
        function login(user){
            return $http.post('/login', user).
            success(function(response) {
                $http.defaults.headers.common.sid = response.sid;
            }).error(function(err) {
                errorMessage = err;
        });

        }
        function checkPermission(){
            if ($http.defaults.headers.common.sid == null){
                return false;
            }
            else{
                return true;
            }
        }
        return {
            checkPermission : checkPermission,
                     signup : signup,
                      login : login
        }
    }
})(window.angular);
