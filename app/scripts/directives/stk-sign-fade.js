'use strict';

angular.module('stockDogApp').directive('stkSignFade', function ($animate) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            var oldValue = null;
            // [1] Use $observe to be notified on value changes
            $attrs.$observe('stkSignFade', function (newValue) {
                if (oldValue && oldValue === newValue) {
                    return;
                }

                var oldPrice = parseFloat(oldValue);
                var newPrice = parseFloat(newValue);

                oldValue = newValue;

                // [2] Add the appropriate direction class, and then remove it
                if (oldPrice && newPrice) {
                    var direction = newPrice - oldPrice >= 0 ? 'up' : 'down';

                    $animate.addClass($element, 'change-' + direction, function () {
                        $animate.removeClass($element, 'change-' + direction);
                    });
                }
            });
        }
    };
});
