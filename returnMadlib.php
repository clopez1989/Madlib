<?
$empty=0;
		//Form Validation
		function form_validation(){
			if($_POST['celebrity_name']==""){
				echo("Celebrity Name is empty</br>");
				$empty=1;				
			}	
			if($_POST['silly_name']==""){
				echo("Silly Name is empty</br>");
				$empty=1;	
			}	
			if($_POST['location']==""){
				echo("Location Name is empty</br>");
				$empty=1;
			}			
			if($_POST['verb_ed']==""){
				echo("Verb (Past Tense) is empty</br>");
				$empty=1;
			}
			if($_POST['adjective']==""){
				echo("Adjective is empty</br>");
				$empty=1;	
			}
			if($_POST['verb_ed_2']==""){
				echo("Verb (Past Tense) is empty</br>");
				$empty=1;	
			}
			if($_POST['adjective_2']==""){
				echo("Adjective is empty</br>");
				$empty=1;	
			}
			if($_POST['food']==""){
				echo("Food is empty</br>");
				$empty=1;	
			}
			if($_POST['mode_of_transportation']==""){
				echo("Mode of transportation is empty</br>");
				$empty=1;	
			}
			if($_POST['place']==""){
				echo("Place is empty</br>");
				$empty=1;	
			}
			if($_POST['verb_ing']==""){
				echo("Verb (ing) is empty</br>");
				$empty=1;	
			}
			if($_POST['adjective_3']==""){
				echo("Adjective is empty</br>");
				$empty=1;	
			}

			if($empty==0){
				echo($_POST['celebrity_name'] . " and " . $_POST['silly_name'] . " went to " . $_POST['location'] . ". " . $_POST['celebrity_name'] . " " . $_POST['verb_ed'] . " really " . $_POST['adjective'] . ". When " . $_POST['celebrity_name'] . " " . $_POST['verb_ed_2'] . " on the bench it made a " . $_POST['adjective_2'] . " sound. " . $_POST['celebrity_name'] . " realized how hungry he/she was for " . $_POST['food'] . ". So he/she got into a " . $_POST['mode_of_transportation'] . " and drove to a nearby " . $_POST['place'] . ". Once he/she got there he realized he forgot " . $_POST['silly_name'] . " and knew he/she had to go back to " . $_POST['location'] . " because " . $_POST['verb_ing'] . " themself without " . $_POST['silly_name'] . " would be " . $_POST['adjective_3'] . ".");
			}
		}

		form_validation();

?>