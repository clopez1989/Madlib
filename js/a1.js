function prepareForm() {
	var form = document.getElementsByTagName("form");

	form[0].addEventListener('submit',function(e) {
		e.preventDefault();
		var formData = "";
		//formData += "?"
		formData += 'celebrity_name=';
		formData += document.getElementById('celebrity_name').value;
		formData += '&silly_name=';
		formData += document.getElementById('silly_name').value;
		formData += '&location=';
		formData += document.getElementById('location').value;
		formData += '&verb_ed=';
		formData += document.getElementById('verb_ed').value;
		formData += '&adjective=';
		formData += document.getElementById('adjective').value;
		formData += '&verb_ed_2=';
		formData += document.getElementById('verb_ed_2').value;
		formData += '&adjective_2=';
		formData += document.getElementById('adjective_2').value;
		formData += '&food=';
		formData += document.getElementById('food').value;
		formData += '&mode_of_transportation=';
		formData += document.getElementById('mode_of_transportation').value;
		formData += '&place=';
		formData += document.getElementById('place').value;
		formData += '&verb_ing=';
		formData += document.getElementById('verb_ing').value;
		formData += '&adjective_3=';
		formData += document.getElementById('adjective_3').value;

		if(document.getElementById('celebrity_name').value==""){
			document.getElementById('celebrity_name').style.border="solid thin red";
		}
		else{
			document.getElementById('celebrity_name').style.border="2px inset";
		}
		if(document.getElementById('silly_name').value==""){
			document.getElementById('silly_name').style.border="solid thin red";
		}
		else{
			document.getElementById('silly_name').style.border="2px inset";
		}
		if(document.getElementById('location').value==""){
			document.getElementById('location').style.border="solid thin red";
		}
		else{
			document.getElementById('location').style.border="2px inset";
		}
		if(document.getElementById('verb_ed').value==""){
			document.getElementById('verb_ed').style.border="solid thin red";
		}
		else{
			document.getElementById('verb_ed').style.border="2px inset";
		}
		if(document.getElementById('adjective').value==""){
			document.getElementById('adjective').style.border="solid thin red";
		}
		else{
			document.getElementById('adjective').style.border="2px inset";
		}
		if(document.getElementById('verb_ed_2').value==""){
			document.getElementById('verb_ed_2').style.border="solid thin red";
		}
		else{
			document.getElementById('verb_ed_2').style.border="2px inset";
		}
		if(document.getElementById('adjective_2').value==""){
			document.getElementById('adjective_2').style.border="solid thin red";
		}
		else{
			document.getElementById('adjective_2').style.border="2px inset";
		}
		if(document.getElementById('food').value==""){
			document.getElementById('food').style.border="solid thin red";
		}
		else{
			document.getElementById('food').style.border="2px inset";
		}
		if(document.getElementById('mode_of_transportation').value==""){
			document.getElementById('mode_of_transportation').style.border="solid thin red";
		}
		else{
			document.getElementById('mode_of_transportation').style.border="2px inset";
		}
		if(document.getElementById('place').value==""){
			document.getElementById('place').style.border="solid thin red";
		}
		else{
			document.getElementById('place').style.border="2px inset";
		}
		if(document.getElementById('verb_ing').value==""){
			document.getElementById('verb_ing').style.border="solid thin red";
		}
		else{
			document.getElementById('verb_ing').style.border="2px inset";
		}
		if(document.getElementById('adjective_3').value==""){
			document.getElementById('adjective_3').style.border="solid thin red";
		}
		else{
			document.getElementById('adjective_3').style.border="2px inset";

		}
		//alert(formData);
		setupRequest(formData);
	});
}

function setupRequest(formData) {
	//create an instance of the object 
	var xhr = new XMLHttpRequest();
	//prepare and send your request to the server
	if(xhr) {
		//triggers when the readyState property changes
		xhr.onreadystatechange = function() {
			displayResponse(xhr);
		}
		//prepare and send your request to the server
		xhr.open("POST",'returnMadlib.php', true);
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(formData);
	}
}

//process the response from the server
function displayResponse(xhr) {
	if(xhr.readyState ==4) {
		//the request is complete; the response has arrived
		if((xhr.status == 200) || (xhr.status == 304)) {
			//alert(xhr.responseText);
			var responseParagraph = document.getElementById('response');
			responseParagraph.innerHTML = xhr.responseText;
			response=xhr.responseText;
		}
	}
}

window.onload = prepareForm;