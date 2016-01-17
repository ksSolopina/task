(function(angular) {
    'use strict';

    angular
        .module('app')
        .factory('Categories', Categories);

    Categories.$inject = ['$http'];

    function Categories($http) {
        var categories = [];
        var subcategories = [];
        var products = [];

        function setCategories(){
            return $http.get('/categories').then(function(response){
                categories = response.data;
            });
        }

        function getCategories(){
            return categories;
        }

        function setSubcategories(id){
            return $http.get('/categories/' + id).then(function(response){
                subcategories = response.data;
            });
        }

        function getSubcategories(){
            return subcategories;
        }

        function setProducts(id){
            return $http.get('/products/'+id).then(function(response){
                products = response.data;
            });

        }

        function getProducts(){
            return products;
        }

        return {
               setCategories : setCategories,
            setSubcategories : setSubcategories,
               getCategories : getCategories,
            getSubcategories : getSubcategories,
                 setProducts : setProducts,
                 getProducts : getProducts
        }
    }
})(window.angular);
