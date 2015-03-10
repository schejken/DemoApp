'use strict';

eventsApp.directive('mySample', function(){
    return {
        restrict: 'E',
        template: '<input type="Text" ng-model="sampleData"/> {{sampleData}} <br/>',
        //To isolate a scope to this directive only
        scope: {

        }
    }
});