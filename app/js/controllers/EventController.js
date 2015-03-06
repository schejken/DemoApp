/**
 * Created by cenk__000 on 2015-03-04.
 */
'use strict';

eventsApp.controller("EventController",
    function EventController($scope){

        $scope.sortorder = "name";
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2015',
            time: '11:00',
            location: {
                address: 'Google Headquaters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/profile.jpg',
            sessions: [
                {
                    name: "Directives masterclass",
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Lorem lups bla bla bla',
                    upVoteCount: '0'
                },
                {
                    name: "Scopes for fun and profit",
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Intro',
                    abstract: 'Lorem lups bla bla bla',
                    upVoteCount: '0'
                },
                {
                    name: "Well behaved controllers",
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Lorem lups bla bla bla',
                    upVoteCount: '0'
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }
);