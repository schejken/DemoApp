'use strict';

eventsApp.directive('eventThumbnail', function(){
   return {
       //4 types of restricts, ways to implement a directive:
       //E = Element
       //C = Class
       //A = Attribute
       //M = Comment
       restrict: 'E',
       //removes the directive element and only shows the template html
       replace: true,
       templateUrl: '/templates/directives/eventThumbnail.html',
       //to isolate a scope to this directive
       scope: {
           //3 operators for isolated scopes to pass information
           //& binds a local scope property to a function
           //@ binds a string property
           //= binds a local scope property to the directive
            event: '=event'
       }
   }
});