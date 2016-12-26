app.factory('socket', function (socketFactory) {
	return socketFactory({
		prefix: 'foo~',
		ioSocket: io.connect('http://' + JSON.parse( window.localStorage.getItem( 'ipAddress' )) + ":" + JSON.parse( window.localStorage.getItem('portNo')))
	});
});
