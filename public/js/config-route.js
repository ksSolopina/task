(function(angular){
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider){

        $routeProvider

        .when('/signup', {
            templateUrl: '/templates/signup.html',
            controller:'SignupCtrl'
        })
        .when('/login', {
            templateUrl: '/templates/login.html',
            controller:'LoginCtrl'
        })
        .when('/categories', {
            templateUrl: '/templates/categories.html',
            controller:'CategoriesCtrl',
            resolve:{
                "check":function(Users, $location){
                    if(Users.checkPermission()){

                    }else{
                        $location.path('/');
                        alert("Пожалуйста, зарегистрируйтесь или зайдите в свой аккаунт");
                    }
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
})(window.angular);
