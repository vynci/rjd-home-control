console.log(app);

app.factory('socket', function (socketFactory) {

	return socketFactory({
		prefix: 'foo~',
		ioSocket: io.connect('http://192.168.1.7:8001')
	});
});
