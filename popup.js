window.onload = () => {

var username, role;
var btnRanked = document.getElementById('btnRanked');
var btnClassic = document.getElementById('btnClassic');
var tbxName = document.getElementById('fname');
var lbxChooseRole = document.getElementById('lbxChooseRole');
var firstPage = document.getElementById('First Page');

function getUserInfo() {
	username = tbxName.value;
	role = lbxChooseRole.options[lbxChooseRole.selectedIndex].value;
}

function showRanked() {
	getUserInfo();
	
	if (role == 'Role')
		return;
	
	alert(role);
}

function showClassic() {
	getUserInfo();
	
	if (role == 'Role')
		return;
	
	alert(role);
}

// Add first page events
btnRanked.onclick = showRanked;	
btnClassic.onclick = showClassic;	
};