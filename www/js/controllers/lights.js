app.controller('LightsCtrl', function($scope, socket, $rootScope, $ionicPopup) {

	$scope.$on("$ionicView.enter", function(event, data){
		socket.emit('new-user', '');
	});

	$scope.devices = [];

	$scope.changeIndicator = function(state){
		console.log(state);
		if(state === 'on'){
			return 'custom-item-divider';
		}

		return '';
	};

	$scope.execute = function(num){
		socket.emit('execute', num);
	}

	socket.on('xyz', function(data){		
		angular.forEach($scope.devices, function(value, key) {
		  if(parseInt(data.switchNum) === value.switchNum){
		  	if(data.state === 0){
		  		value.state = 'on';
		  	}else{
		  		value.state = 'off'
		  	}
		  }	
		}, $scope.devices);
	})

	socket.on('on-connect', function (data) {
		angular.forEach(data, function(element) {
		  $scope.devices.push(element);
		});
	});

	socket.on('disconnect', function () {
		$rootScope.rpiStatus = false;  
	});

	socket.on('connect', function () {
	   $rootScope.rpiStatus  = true;  
	});
})