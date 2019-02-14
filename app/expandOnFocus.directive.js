"use strict";

function expandOnFocus(){
    return {
        restrict: "A",
        //"E" = element, "C" = class name, "M" = comment "A" = attribute
        //can use template, templateUrl properties, replace(wont use) and transclude(wont use)
        link: function($scope, $element, $attrs) {
            $element.on("focus", function() {
                // $element.css("transform-origin", "left");
                $element.css("transform", "scale(1.5,1.5)");

                // $element.css("-moz-transform", "scaleX(2)");
                // $element.css("-webkit-transform", "scaleY(2)");
                // $element.css("-moz-transform", "scaleY(2)");

                // $element.css("font-size", "30px");
                // $scope.$apply(function(){
                // // $scope.$ctrl.total = 20;
                // // console.log($scope.$ctrl.total)
                //     //force value change with $scope.apply
                // })
            })
            $element.on("blur", function(){
                $element.css("transform", "");

            })
            console.log($scope);
            console.log($element);
            console.log($attrs);
            //ng-app, ng-model etc are attr
            //
        }
    }
};

// click
// blur set height/width back to default
// focus double width/height

angular
    .module("app")
    .directive("expandOnFocus", expandOnFocus)