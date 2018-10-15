window.onload = () => {

var username;
var btnRanked = document.getElementById('btnRanked');
var tbxName = document.getElementById('fname');

function showRanked() {
	username = tbxName.value;
	alert(username);
}

btnRanked.onclick = showRanked;	
};