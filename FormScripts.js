$(document).ready(function(){
	//START initialConditions functions
	$("#icCollapse").click(function(){ //initialConditions collapse animation
		$("#initialConditions").slideToggle("slow");
	}); //end of initialConditions collapse animation
	
	$('#icDropDown').change(function(){ //initialConditions textbox function
		if(this.value == 0){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").attr("disabled", "disabled");
			$("#sizeTB").attr("disabled", "disabled");
			$("#icVariable").text("Size");
			$("#survTB").removeAttr("disabled");
		}else if(this.value == 1){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").removeAttr("disabled");
			$("#sizeTB").attr("disabled", "disabled");
			$("#icVariable").text("Size");
			$("#survTB").attr("disabled", "disabled");
		}else if(this.value == 2){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").removeAttr("disabled");
			$("#icVariable").text("BA");
			$("#sizeTB").removeAttr("disabled");
			$("#survTB").attr("disabled", "disabled");
		}else{
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").removeAttr("disabled");
			$("#icVariable").text("Dq");
			$("#sizeTB").removeAttr("disabled");
			$("#survTB").attr("disabled", "disabled");
		}
	}); //end of initialConditions textbox function

	$("#hardwoodCollapse").click(function(){ //hardwood collapse animation
		$("#hardwood").slideToggle("slow");
	}); //end of hardwood collapse animation

	$('#hwDropDown').change(function(){//hardwood textbox function
		if(this.value == 0){
			$("#totalBATB").attr("disabled", "disabled");
			$("#atAgeTB").attr("disabled", "disabled");
		}else{
			$("#totalBATB").removeAttr("disabled");
			$("#atAgeTB").removeAttr("disabled");
		}
	}); //end of hardwood textbox function
	//END initialConditions functions
	
	//START siteIndex functions
	$("#siCollapse").click(function(){ //siteIndex collapse animation
		$("#siteIndex").slideToggle("slow");
	}); //end of siteIndex collapse animation
	//END siteIndex functions
	
	//START fusiform functions
	$("#ffCollapse").click(function(){ //fusiform collapse animation
		$("#fusiform").slideToggle("slow");
	}); //end of fusiform collapse animation
	//END fusiform functions
	
	//START thinnings functions
	$("#thinningsCollapse").click(function(){ //thinnings collapse animation
		$("#thinnings").slideToggle("slow");
	}); //end of thinnings collapse animation
	
	$("#thinningDialog").dialog({ //Dialog initialization
		modal:true,
		draggable:false,
		resizeable:false,
		position:{ my: "center center", at: "center center", of: "#main" },
		show: 'blind',
		hide: 'blind',
		width: 300,
		autoOpen:false,
	}); //end of Dialog initialization
	
	var thinningsCounter = 0; //option value counter
	
	$('#addThinning').click(function(){ //Add button function
		$("#thinningDialog").dialog("open");
	}); //end of Add button function

	$('#dialogOK').click(function(){ //OK button function
		$('#selectList').append("<option value='"+thinningsCounter+"'>"+$('#thinAtAge').val()+" - "+$('#dialogSelect option:selected').text()+" - "+$('#leaveTB').val()+"</option>");
		$("#thinningDialog").dialog("close");
		$('#thinAtAge').val("");
		$('#dialogSelect').val("1");
		$('#leaveTB').val("");
	});//end of OK button function

	$('#dialogCancel').click(function(){ //Cancel button function
		$("#thinningDialog").dialog("close");
	});//end of Cancel button function

	$('#delThinning').click(function(){ //Delete button function
		$('#selectList option:selected').each(function(){
			$(this).remove();
		});
	});//end of Delete button function
	//END thinnings functions
	
	//START outputType functions
	$("#otCollapse").click(function(){
		$("#outputtype").slideToggle("slow");
	});
	//END outputType functions
	
	//START toString function
	var runOutput = ""; //output string
	var thinningsString = ""; //output string for thinnings collection
	
	function collectThinnings() { //start thinning save collection
		var thinningsArray = document.getElementById("selectList").options;
		for(i=0;i<thinningsArray.length;i++){
			thinningsString = thinningsString + "^" + thinningsArray[i].text;
			
		}
		if (thinningsArray.length == 0){
			return "none";
		}
		return thinningsString;
	} //end thinning save collection
	
	function checkTB(e) { //start checks textbox values before running **unfinished**
		if(e == ''){
			return "";
		}else{
			return e;
		}
	} //end checks textbox values before running
	
	function toStringOutput() { //start save string format
		thinningsString = "";
		runOutput = $("#icDropDown").val()+"^"
			+checkTB($('#tpaTB').val())+"^"
			+checkTB($("#ageTB").val())+"^"
			+checkTB($("#sizeTB").val())+"^"
			+checkTB($("#survTB").val())+"^"
			+$("#hwDropDown").val()+"^"
			+checkTB($("#totalBATB").val())+"^"
			+checkTB($("#atAgeTB").val())+"^"
			+$("input[name='baseAge']:checked").val()+"^"
			+checkTB($("#siteIndexValue").val())+"^"
			+$("#heightAgeSelect").val()+"^"
			+$("#enableFusiform").is(':checked')+"^"
			+checkTB($("#infection").val())+"^"
			+checkTB($("#ffatAgeTB").val())+"^"
			+checkTB($("#hazardRating").val())+"^"
			+$("#enableThinnings").is(':checked')+"^"
			+$("#outputVariable").text()+"^"
			+checkTB($("#start").val())+"^"
			+checkTB($("#end").val())+"^"
			+checkTB($("#interval").val())
			+collectThinnings()
		return runOutput;
	} //end save string format
	
	$("#run").click(function(){ //start run button
		var outputString = toStringOutput();
		alert(outputString);
	}); // end run button
	//END toString function
	
	//START save function
	$("#saveDialog").dialog({ //Dialog initialization
		modal:true,
		draggable:false,
		resizeable:false,
		position:{ my: "center center", at: "center center", of: "#main" },
		show: 'blind',
		hide: 'blind',
		width: 300,
		dialogClass:'dialogTest',
		autoOpen:false,
	}); //end of Dialog initialization
	
	$('#saveDialog-Cancel').click(function(){ //Cancel button function
		$("#saveDialog").dialog("close");
		$("#saveName").val("");
	});//end of Cancel button function
	
	$('#saveDialog-Save').click(function(){ //Save button function
		if(checkSaveName($("#saveName").val())===true){
			owError($("#saveName").val());
		}else{
			localStorage.setItem($("#saveName").val(), toStringOutput());
			$("#saveName").val("");
			$("#saveDialog").dialog("close");
		}
	});//end of Save button function
	
	$("#save").click(function(){
		$("#saveDialog").dialog('open');
	});
	//END save function
	
	//START load function
	$("#loadDialog").dialog({ //Dialog initialization
		modal:true,
		draggable:false,
		resizeable:false,
		position:{ my: "center center", at: "center center", of: "#main" },
		show: 'blind',
		hide: 'blind',
		width: 300,
		autoOpen:false,
	}); //end of Dialog initialization
	
	$('#loadDialog-Cancel').click(function(){ //Cancel button function
		if($('#loadDialog-Cancel').html()=="Cancel"){
			resetLoadSelect();
			$("#loadDialog").dialog("close");
		}else{
			$("#clearDialog").dialog("open");
		}
	});//end of Cancel button function
	
	$('#loadDialog-Load').click(function(){ //Load button function
		if($("#loadDialog-Load").html()=="Load"){
			reset();
			var ca = getSave($("#loadDialog-Select option:selected").text()).split("^");
			$("#icDropDown").val(ca[0]);
			$('#tpaTB').val(ca[1]);
			$("#ageTB").val(ca[2]);
			$("#sizeTB").val(ca[3]);
			$("#survTB").val(ca[4]);
			$("#hwDropDown").val(ca[5]);
			$("#totalBATB").val(ca[6]);
			$("#atAgeTB").val(ca[7]);
			if(ca[8] == 25){
				$("#BA25").prop('checked', true);
				$("#BA50").prop('checked', false);
			}else{
				$("#BA25").prop('checked', false);
				$("#BA50").prop('checked', true);
			}
			$("#siteIndexValue").val(ca[9]);
			$("#heightAgeSelect").val(ca[10]);
			$("#enableFusiform").prop('checked', ca[11]);
			$("#infection").val(ca[12]);
			$("#ffatAgeTB").val(ca[13]);
			$("#hazardRating").val(ca[14]);
			$("#enableThinnings").prop('checked', ca[15]);
			$("#outputVariable").text(ca[16]);
			$("#start").val(ca[17]);
			$("#end").val(ca[18]);
			$("#interval").val(ca[19]);
			loadThinnings(ca);
			resetLoadSelect();
			$("#loadDialog").dialog("close");
		}else{
			localStorage.removeItem($("#loadDialog-Select option:selected").text());
			$("#loadDialog-Select option:selected").remove();
		}
	});//end of Load button function
	
	$("#loadDialog-Manage").click(function(){ //start manage mode toggle
		if($("#loadDialog-Manage").html()=="Manage"){
			$('#loadDialog').dialog('option', 'title', 'Manage Saves');
			$("#loadDialog-Manage").html("Done");
			$("#loadDialog-Load").html("Delete");
			$("#loadDialog-Cancel").html("Clear All");
		}else{
			$('#loadDialog').dialog('option', 'title', 'Load');
			$("#loadDialog-Manage").html("Manage");
			$("#loadDialog-Load").html("Load");
			$("#loadDialog-Cancel").html("Cancel");
		}
	}); //end manage mode toggle
	
	function loadThinnings(ca){//start load thinnings function
		if(ca[20]!="none"){
			for(i=20;i<ca.length;i++){
				$('#selectList').append("<option value='"+thinningsCounter+"'>"+ca[i]+"</option>");
				thinningsCounter++;
			}
		}
	}//end load thinnings function
	
	function resetLoadSelect(){//start load dialog reset
		$("#selectCell").html("<select id='loadDialog-Select' size='3'></select>")
	}//end load dialog reset
	
	$("#load").click(function(){//start load dialog opener function
		for(i=0;i<localStorage.length;i++){
			$('#loadDialog-Select').append("<option value='"+i+"'>"+localStorage.key(i)+"</option>");
		}
		$("#loadDialog").dialog('open');
	});//end load dialog opener function
	//END load function
	
	//START overwrite function
	$("#owDialog").dialog({ //Dialog initialization
			modal:true,
			draggable:false,
			resizeable:false,
			position:{ my: "center center", at: "center center", of: "#main" },
			show: 'blind',
			hide: 'blind',
			width: 300,
			autoOpen:false,
	}); //end of Dialog initialization
	
	function owError(name) { //start overwrite error dialog handler
		$("#owDialog").dialog('open');
		$("#saveVariable").text(name);
	} //end overwrite error dialog handler
	
	$("#owDialog-Yes").click(function(){ //start overwrite yes/no buttons
			localStorage.setItem($("#saveName").val(), toStringOutput());
			$("#saveDialog").dialog("close");
			$("#owDialog").dialog("close");
		});
		$("#owDialog-No").click(function(){
			$("#owDialog").dialog("close");
		}); //end overwrite yes/no buttons
	//END overwrite function
	
	//START clear function
	$("#clearDialog").dialog({ //Dialog initialization
			modal:true,
			draggable:false,
			resizeable:false,
			position:{ my: "center center", at: "center center", of: "#main" },
			show: 'blind',
			hide: 'blind',
			width: 300,
			autoOpen:false,
	}); //end of Dialog initialization
	
	$("#clearDialog-Yes").click(function(){ //start clear saves dialog yes button
		localStorage.clear();
		resetLoadSelect();
		$("#clearDialog").dialog("close");
	}); //end clear saves dialog yes button
	$("#clearDialog-No").click(function(){ //start clear saves dialog no button
		$("#clearDialog").dialog("close");
	}); //end clear saves dialog no button
	//END ckear function
	
	//START localStorage handlers
	function getSave(cname) { //start getting local save information
		return localStorage.getItem(cname);
	} //end getting local save information
	function checkSave(cname) { //start check for local save
		if (cname!=null) {
			return true;
		}else{
			return false;
		}
	} //end check for local save
	
	function checkSaveName(name){ //start check save
		var strg = localStorage.length
		for(i=0;i<strg;i++){
			if(localStorage.key(i) == name){
				return true;
			}else{
				return false;
			}
		}
	} //end check save
	//END localStorage handlers
	
	//START reset
	function reset(){ //start reset form
		$("#icDropDown").val("0");
		$('#tpaTB').val("");
		$("#ageTB").val("");
		$("#sizeTB").val("");
		$("#survTB").val("");
		$("#hwDropDown").val("0");
		$("#totalBATB").val("");
		$("#atAgeTB").val("");
		$("#BA25").prop('checked', true);
		$("#BA50").prop('checked', false);
		$("#siteIndexValue").val("");
		$("#heightAgeSelect").val("0");
		$("#enableFusiform").prop('checked', false);
		$("#infection").val("");
		$("#ffatAgeTB").val("");
		$("#hazardRating").val("");
		$("#enableThinnings").prop('checked', false);
		$("#outputVariable").text("HTML");
		$("#start").val("");
		$("#end").val("");
		$("#interval").val("");
		$("#thinningContainer-select").html("<select name='selectList' id='selectList' multiple></select>");
		thinningsCounter = 0;
	} //end reset form
	
	$("#reset").click(function(){ //start reset button
		reset();
	}); //end reset button
	//END reset
	
	//clear disabled textboxes
	$("select").change(function() { //start clear disabled textboxes
		if($("input[type='text']").is(':disabled')){
			$("input:disabled").val("");
		}
	}); //end clear disabled textboxes
	//end clear disabled function
});