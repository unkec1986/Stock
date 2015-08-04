'use strict';

angular.module('stockDogApp').directive('stkSignColor', function () {
    return {
        restrict: 'A',
        link: function postLink($scope, $element, $attrs) {
            // [1] Use $observe to watch expression for changes
            $attrs.$observe('stkSignColor', function (newValue) {
                var newSign = parseFloat(newValue);
                // [2] Set element's style.color value depending on sign
                if (newSign > 0) {
                    $element[0].style.color = 'Green';
                } else {
                    $element[0].style.color = 'Red';
                }
            });
        }
    };
});
