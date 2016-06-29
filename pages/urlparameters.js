function $_GET(key) {
	var s = window.location.search;
	s = s.match(new RegExp(key + '=([^&=]+)'));
	return s ? s[1] : false;
}

alert( $_GET('test') );