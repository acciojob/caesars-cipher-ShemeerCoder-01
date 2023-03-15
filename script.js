// Your Script here.
var str = "";
function ROT13(value) {
	var size = value.length;
	for (var i = 0; i < size; i++) {
			if(value.charAt(i) >= 'A' && value.charAt(i) <= 'Z'){
			var dis = value.charAt(i) - 'A';
			var char =(char)( (dis + 13) % 26 ) + value.charAt(i);
			str += char;
		}
		
	}
	return str;
	
}
