'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope){
        $scope.saveEvent = function (event, newEventForm) {
            if(newEventForm.$valid){
                alert(event.name);
            }
        };
        $scope.cancelEdit = function () {
            windows.location = "/EventDetails.html";
        }
    }
);