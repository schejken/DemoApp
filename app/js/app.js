'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            })
            .when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            }
        )
    });
