document.getElementById('form').addEventListener("submit", function(event){
	event.preventDefault();
	var username = document.getElementById("username").value;
	var userpwd = document.getElementById("userpwd").value;
	
	/*var xhr = new XMLHttpRequest();
	xhr.onreadystatechnage = function() { 

        if (this.readyState == 4 && this.status == 200) { 

            	document.getElementById('resco').innerHTML = '<span>' + xhr.responseText + '</span>'; 
				//document.getElementById('resco').style.font-color = "red";
				document.getElementById('connexion').style.display = 'none';

        }

    };
	xhr.open('POST', '../htbin/login.py',true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("username="+username+"&userpwd="+userpwd);*/
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('resco').innerHTML = '<span>' + xhttp.responseText + '</span>';
			document.getElementById('resco').style.color = 'red';
		
		}
	};
	xhttp.open('POST', '../htbin/login.py',true);
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.send("username="+username+"&userpwd="+userpwd);
}, true);
