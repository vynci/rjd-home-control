app.controller('SettingsCtrl', function($scope, socket, $window, $rootScope, $ionicPopup) {
	$scope.ipAddress = {
		value : '',
		portNo:''
	};

	$scope.$on("$ionicView.enter", function(event, data){
	   // handle event
	   var x = JSON.parse( window.localStorage.getItem( 'ipAddress' ));
	   $scope.ipAddress.value = x;
	   var y = JSON.parse( window.localStorage.getItem( 'portNo' ));
	   $scope.ipAddress.portNo = y;
	});

	$scope.updateIp = function(){
		window.localStorage.setItem( 'ipAddress', JSON.stringify($scope.ipAddress.value) );
		window.localStorage.setItem( 'portNo', JSON.stringify($scope.ipAddress.portNo));
		$window.location.reload(true);
	}

	socket.on('connect', function () {
		var alertPopup = $ionicPopup.alert({
	     title: 'Status',
	     template: 'Connection to server is up!'
	   });
		
	$rootScope.rpiStatus = true;  
	});
})