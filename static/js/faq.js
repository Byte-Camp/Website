function searchSite(){
	var input = document.getElementById('text-input').value;
	if (input){
		//Unary constraints
		if(/(^|\s)(contact|call|e-?mail|talk\sto)(\s|$)/mig.test(input)) // if input has variant of contact
			window.location.href = "about_us.html#who";

		//Binary constraints
		else if(/(^|\s)reg(ist|\s|$)/igm.test(input)){ // if input has variant of register
			if(/(^|\s)can(not|'t|t)\s/igm.test(input))
				$('#collapse112').collapse('toggle');
			else{
				if (input.split(' ').length < 3)
					window.location.href = "calendar/calendar_2017.html";
				else {
					//couldnt find the search
					//store question in db
				}
			}
		}
		else if(/(^|\s)(camp|program)(s|\s|$)/igm.test(input)){ // if input has variant of camp or program
			if(/(^|\s)what(\s|$)/igm.test(input))
				$('#collapse121').collapse('toggle');
			else{
				if (input.split(' ').length < 3)
					window.location.href = "camps.html#programs";
				else {
					//couldnt find the search
					//store question in db
				}
			}
		}
		//N-ary constraints -- might not be needed but perhaps for "Other" faqs (more specific)
			//...todo	
	}
}

function emailQuestion(){
	var q = $("#faq-input").val();
	$.ajax({
	    type: "POST",
	    url: "../static/php/faq_utils.php",
	    data: { question: q },
	    async: false,
	    success: function(data){
	        alert("Thank you for your question. You will be contacted shortly with a response.");
	        window.location.href='faq.html';
	    }
	});
}