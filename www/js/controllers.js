angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope) {

})

app.controller('LightsCtrl', function($scope, socket) {

  $scope.execute = function(num){
    socket.emit('execute', num);
  }
})
