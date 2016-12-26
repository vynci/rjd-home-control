app.controller('LightsCtrl', function($scope, socket, $rootScope, $ionicPopup) {

	$scope.status = '';
	// $scope.rpiStatus = false;

	$scope.execute = function(num){
		socket.emit('execute', num);
	}

	socket.on('xyz', function(data){
		console.log(data);
		if(data === 0){
			$scope.status = 'on'
		}else{
			$scope.status = 'off'
		}
	})

	socket.on('disconnect', function () {
		console.log("disconnected");
		$rootScope.rpiStatus = false;  
	});

	socket.on('connect', function () {
	   $rootScope.rpiStatus  = true;  
	});
})