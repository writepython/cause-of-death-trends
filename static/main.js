var deathApp = angular.module('deathApp', []);

deathApp.controller('DeathCtrl', function($scope) {
    $scope.deathData = [[ [1999, 199083], [2000, 192539], [2001, 184436], [2002, 179108], [2003, 170227], [2004, 156501], [2005, 150667], [2006, 141196], [2007, 132720], [2008, 133742], [2009, 125259], [2010, 121883] ]];
});

deathApp.directive('chart', function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {
            var deathData = scope[attrs.ngModel];
            $.plot(elem, data, {});
            elem.show();
        }
    };
});
