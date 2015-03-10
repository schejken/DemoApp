'use strict';

eventsApp.directive('eventThumbnail', function(){
   return {
       //restrict E to get an element, C for a comment, A for a attribute
       restrict: 'E',
       //removes the directive element and only shows the template html
       replace: true,
       templateUrl: '/templates/directives/eventThumbnail.html',
       //to isolate a scope to this directive
       scope: {
            event: '=event'
       }
   }
});