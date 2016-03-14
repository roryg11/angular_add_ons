var passionPlanner = angular.module('passionPlanner', ['ngRoute']);

passionPlanner.controller('passionPlannerCntrl', function($scope){
  $scope.goals = [
    {
    name: "Learn Harder Backend Concepts",
    description: "Using Rails, figure out how to do complex data storage",
    due_date: new Date("01/30/2016"),
    completed: false
    },
    {
      name: "Learn React",
      description: "Learn the concepts of react and apply them",
      due_date: new Date("02/15/2016"),
      completed: false
    },
    {
      name: "Learn Angular 2",
      description: "Learn the concepts of Angular and apply them",
      due_date: new Date("02/28/2016"),
      completed: false
    }
  ];

  $scope.addGoal = function (){
    $scope.goals.push({ name: "Learn D3", description: "Learn how to visualize Data", due_date: new Date("03/15/2016"), completed: false});
    console.log("goal added");
  };


});
