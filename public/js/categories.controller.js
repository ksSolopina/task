(function(angular) {
    'use strict';

    angular
        .module('app')
        .controller('CategoriesCtrl', CategoriesCtrl);


    CategoriesCtrl.$inject = ['$scope', 'Categories'];

    function CategoriesCtrl($scope, Categories) {

        var addSubCategories = function (input, id, subcategories) {

            for (var i=0; i<input.length; i++) {

                if (+input[i].id == +id) {
                  input[i].subcategories = subcategories;
                  input[i].subcategoriesIsLoaded = true;
                }
            }
        }

        Categories.setCategories().then(function() {
          $scope.categories = Categories.getCategories();
        }, null);

        $scope.showDetails = function (category) {
            if (!category.subcategoriesIsLoaded) {

                Categories.setSubcategories(category.id).then(function() {

                  var subcategories = Categories.getSubcategories();
                  addSubCategories ($scope.categories, category.id, subcategories);

                }, null);
            }
        }

        $scope.products = [];

        $scope.showProducts = function (subcategory, chkStatus) {

            if(chkStatus==true){
                Categories.setProducts(subcategory.id).then(function() {
                    var checked = Categories.getProducts();
                    for (var i=0; i<checked.length; i++) {
                        $scope.products.push(checked[i]);
                    }
                }, null);
            }
            else{
                for (var i=$scope.products.length-1; i>=0; i--) {
                    if ($scope.products[i].categoryId == subcategory.id){
                        $scope.products.splice(i,1);
                    }
                }
            }
        }

        $scope.expand = function(category) {
            category.show = !category.show;
        }

    }

})(window.angular);
