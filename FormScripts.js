$(document).ready(function(){
	//START PAGE INITIALIZATION
	checkEnabledFF();
	checkEnabledThinning();
	$("body").ready(function(){ //start reset form
		$("#loblollyPine").prop('checked', true);
		$("#whitePine").prop('checked', false);
		$("#icDropDown").val("0");
		$('#tpaTB').val("700");
		$("#ageTB").val("");
		$("#sizeTB").val("");
		$("#survTB").val("85");
		$("#hwDropDown").val("0");
		$("#totalBATB").val("");
		$("#atAgeTB").val("");
		$("#BA25").prop('checked', true);
		$("#BA50").prop('checked', false);
		$("#siteIndexValue").val("65");
		$("#heightAgeSelect").val("piedmont/upland");
		$("#enableFusiform").prop('checked', false);
		$("#infection").val("");
		$("#ffatAgeTB").val("");
		$("#hazardRating").val("");
		$("#enableThinnings").prop('checked', false);
		$("#outputVariable").text("HTML");
		$("#start").val("5");
		$("#end").val("35");
		$("#interval").val("5");
		$("#thinningContainer-select").html("<select name='selectList' id='selectList' multiple></select>");
		thinningsCounter = 0;
	});//END default settings
	//END PAGE INITIALIZATION
	
	//START FORM SIZE SNAPPING
	if($(window).width()<645){
			$("#main").css("max-width", 320);
			$("#btContainer").css("top", 0);
		}else if($(window).width()<969){
			$("#main").css("max-width", 645);
			$("#btContainer").css("top", 6);
		}else if($(window).width()<1294){
			$("#main").css("max-width", 969);
			$("#btContainer").css("top", 6);
		}else if($(window).width()<1620){
			$("#main").css("max-width", 969);
			$("#btContainer").css("top", 6);
		}else{
			$("#main").css("max-width", 969);
			$("#btContainer").css("top", 6);
	}
	$(window).resize(function () {
		if($(window).width()<645){
			$("#main").css("max-width", 320);
			$("#btContainer").css("top", 0);
		}else if($(window).width()<969){
			$("#main").css("max-width", 645);
			$("#btContainer").css("top", 6);
		}else if($(window).width()<1294){
			$("#main").css("max-width", 969);
			$("#btContainer").css("top", 6);
		}else if($(window).width()<1620){
			$("#main").css("max-width", 969);
			$("#btContainer").css("top", 6);
		}else{
			$("#main").css("max-width", 969);
			$("#btContainer").css("top", 6);
		}
	});
	//END FORM SIZE SNAPPING
	
	//START INITIAL CONDITIONS FUNCTIONS
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
	
	function selectChecks(){
		if($('#icDropDown').val() == 0){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").attr("disabled", "disabled");
			$("#sizeTB").attr("disabled", "disabled");
			$("#icVariable").text("Size");
			$("#survTB").removeAttr("disabled");
		}else if($('#icDropDown').val() == 1){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").removeAttr("disabled");
			$("#sizeTB").attr("disabled", "disabled");
			$("#icVariable").text("Size");
			$("#survTB").attr("disabled", "disabled");
		}else if($('#icDropDown').val() == 2){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").removeAttr("disabled");
			$("#icVariable").text("BA");
			$("#sizeTB").removeAttr("disabled");
			$("#survTB").attr("disabled", "disabled");
		}else if($('#icDropDown').val() == 3){
			$("#tpaTB").removeAttr("disabled");
			$("#ageTB").removeAttr("disabled");
			$("#icVariable").text("Dq");
			$("#sizeTB").removeAttr("disabled");
			$("#survTB").attr("disabled", "disabled");
		}else if($('#hwDropDown').val() == 0){
			$("#totalBATB").attr("disabled", "disabled");
			$("#atAgeTB").attr("disabled", "disabled");
		}else if($('#hwDropDown').val() == 1){
			$("#totalBATB").removeAttr("disabled");
			$("#atAgeTB").removeAttr("disabled");
		}else{
			alert("error");
		}
	}

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
	//END INITIALCONDITIONS FUNCTIONS
	
	//START SITE INDEX FUNCTIONS
	$("#siCollapse").click(function(){ //siteIndex collapse animation
		$("#siteIndex").slideToggle("slow");
	}); //end of siteIndex collapse animation
	//END SITEINDEX FUNCTIONS
	
	//START FUSIFORM FUNCTIONS
	$("#ffCollapse").click(function(){ //fusiform collapse animation
		$("#fusiform").slideToggle("slow");
	}); //end of fusiform collapse animation
	
	function checkEnabledFF (){ //enables and disables fusiform
		if($("#enableFusiform").is(':checked')==false){
			$("#infection").attr("disabled", "disabled");
			$("#ffatAgeTB").attr("disabled", "disabled");
			$("#hazardRating").attr("disabled", "disabled");
		}else{
			$("#infection").removeAttr("disabled");
			$("#ffatAgeTB").removeAttr("disabled");
			$("#hazardRating").removeAttr("disabled");
		}
	}
	
	$("#enableFusiform").click(function(){ //click event for fusiform enable
		checkEnabledFF();
	});
	//END FUSIFORM FUNCTIONS
	
	//START THINNINGS FUNCTIONS
	$("#thinningsCollapse").click(function(){ //thinnings collapse animation
		$("#thinnings").slideToggle("slow");
	}); //end of thinnings collapse animation
	
	function checkEnabledThinning (){ //enables or disables thinnings section
		if($("#enableThinnings").is(':checked')==false){
			$("#selectList").attr("disabled", "disabled");
			$("#addThinning").css("pointer-events","none");
			$("#delThinning").css("pointer-events","none");
			$("#addThinning").css("background-color","grey");
			$("#delThinning").css("background-color","grey");
		}else{
			$("#selectList").removeAttr("disabled");
			$("#addThinning").css("pointer-events","auto");
			$("#delThinning").css("pointer-events","auto");
			$("#addThinning").css("background-color","#CC0000");
			$("#delThinning").css("background-color","#CC0000");
		}
	}
	
	$("#enableThinnings").click(function(){ //click event for thinning enable
		checkEnabledThinning();
	});
	
	function collectThinnings() { //start thinning save collection
		var thinningsArray = document.getElementById("selectList").options;
		thinningsString = "";
		if (thinningsArray.length == 0){
			return "";
		}else{
			for(i=0;i<thinningsArray.length;i++){
				thinningsString = thinningsString + "^" + thinningsArray[i].text;
			}
			return thinningsString;
		}
	} //end thinning save collection
	
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
		if(checkThinningTB() == false){
			$('#selectList').append("<option value='"+thinningsCounter+"'>"+$('#thinAtAge').val()+" - "+$('#dialogSelect option:selected').text()+" - "+$('#leaveTB').val()+"</option>");
			$("#thinningDialog").dialog("close");
			$('#thinAtAge').val("");
			$('#dialogSelect').val("0");
			$('#leaveTB').val("");
		}else{
			alert("Please fill out the boxes with marked borders.");
		}
	});//end of OK button function

	$('#dialogCancel').click(function(){ //Cancel button function
		$("#thinningDialog").dialog("close");
	});//end of Cancel button function

	$('#delThinning').click(function(){ //Delete button function
		$('#selectList option:selected').each(function(){
			$(this).remove();
		});
	});//end of Delete button function
	//END THINNING FUNCTIONS
	
	//START OUTPUTTYPE FUNCTIONS
	$("#otCollapse").click(function(){
		$("#outputtype").slideToggle("slow");
	});
	//END OUTPUTTYPE FUNCTIONS
	
	//START TOSTRING FUNCTION
	var runOutput = ""; //output string
	var thinningsString = ""; //output string for thinnings collection
	
	function checkTB(e) { //start checks textbox values before running **unfinished**
		if(e == ''){
			return "";
		}else{
			return e;
		}
	} //end checks textbox values before running
	
	function toStringOutput() { //start save string format
		thinningsString = "";
		runOutput = $("input[name='species']:checked").val()+"^"
			+$("#icDropDown").val()+"^"
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
			+checkTB($("#interval").val()) + ""
			+collectThinnings()
		return runOutput;
	} //end save string format
	//END toString function

	//START RUN FUNCTION
	function createArray(length) { //creates multidimensional array.
		var arr = new Array(length || 0),
			i = length;

		if (arguments.length > 1) {
			var args = Array.prototype.slice.call(arguments, 1);
			while(i--) arr[length-1 - i] = createArray.apply(this, args);
		}

		return arr;
	}
	
	function outputThinningsArray(outputStringArray){
		osa = outputStringArray;
		index = osa.length - 21;
		tArray = createArray(index, 3);
		if(osa.length >= 22){
			y = 0;
			for(x=21;x<21+index;x++){
				ta = osa[x].split(" - ");
				tArray[y] = ta
				y++;
			}
			tArray.sort(sortFunction);

			function sortFunction(a, b) {
				if (parseInt(a[0]) === parseInt(b[0])) {
					return 0;
				}
				else {
					return (parseInt(a[0]) < parseInt(b[0])) ? -1 : 1;
				}
			}
			return tArray;
		}else{
			return "none";
		}
	}
	
	function checkOutputThinnings(thinningsArray, outputArray, age, enabled){
		arrayString = "<tr><td>"+outputArray[age][0]+"</td><td>"+outputArray[age][1]+"</td><td>"+outputArray[age][2]+"</td><td>"+outputArray[age][3]+"</td><td>"+outputArray[age][4]+"</td><td>"+outputArray[age][5]+"</td><td>"+outputArray[age][6]+"</td><td>"+outputArray[age][7]+"</td><td>"+outputArray[age][8]+"</td><td>"+outputArray[age][9]+"</td><td>"+outputArray[age][10]+"</td></tr>";
			if(thinningsArray != "none" && enabled == 'true'){
				for(x=0;x<thinningsArray.length;x++){
					if(thinningsArray[x][0] < outputArray[0][0] && outputArray[age][0] == outputArray[0][0]){
						arrayString = "<tr><td>"+thinningsArray[x][0]+"</td><td colspan='6'>"+(outputArray[age][2] - thinningsArray[x][2])+" Trees Removed</td><td></td><td>-0</td><td></td><td></td></tr>" + arrayString;
					}else if(thinningsArray[x][0] == outputArray[age][0]){
						arrayString = arrayString + "<tr><td>"+thinningsArray[x][0]+"</td><td colspan='6'>"+(outputArray[age][2] - thinningsArray[x][2])+" Trees Removed</td><td></td><td>-0</td><td></td><td></td></tr>";
					}else if(thinningsArray[x][0] > outputArray[outputArray.length - 1][0] && age == (outputArray.length - 1)){
						arrayString = arrayString + "<tr><td>"+thinningsArray[x][0]+"</td><td colspan='6'>Thinning Error</td><td></td><td>-0</td><td></td><td></td></tr>";
					}else if(thinningsArray[x][0] > outputArray[age][0] && thinningsArray[x][0] < outputArray[(age+1)][0]){
						arrayString = arrayString + "<tr><td>"+thinningsArray[x][0]+"</td><td colspan='6'>"+(outputArray[age][2] - thinningsArray[x][2])+" Trees Removed</td><td></td><td>-0</td><td></td><td></td></tr>";
					}else{
					
					}
				}
				return arrayString;
			}else{
				return arrayString;
			}
	}
	
	function insertOutputData(outputArray, arrayHeight, ouputData){
		/* You can probably do this function a couple different ways.
		The best option I can think of is to fill in the other 10
		columns after the program fills in the ages in the first column 
		for each row.
		*/
	}
	
	function createTableRows(outputString){ //creates html string for output
		var ca = outputString.split('^');
		var ta = outputThinningsArray(ca);
		if(((ca[19]-ca[18])%ca[20])==0){
				var remainderVar = 1;
			}else{
				var remainderVar = 2;
			}
		var arrayHeight = parseInt((ca[19]-ca[18])/ca[20])+remainderVar;
		var arrayStart = parseInt(ca[18] - ca[20]);
		outputArray = createArray(arrayHeight, 11);
		for(var x=0, length = arrayHeight;x<length;x++){
			if(remainderVar == 2 && x == (length-1)){	
				outputArray[x][0] = parseInt(ca[19]);
			}else{
				outputArray[x][0] = arrayStart + parseInt(ca[20]);
			}
			arrayStart = arrayStart + parseInt(ca[20]);
			//for(var y=1;y<11;y++){
			//	outputArray[x][y] = 0; //This creates a place holder for the rest of the table columns
			//}
		}
		//insertOutputData(outputArray, arrayHeight, outputData);
		arrayString = "";
		for(var x=0;x<arrayHeight;x++){
			age = x;
			arrayString = arrayString + checkOutputThinnings(ta, outputArray, age, ca[16]);
		}
		return arrayString;
	}
	
	$("#run").click(function(){ //start run button
		if(checkRequired()==false){
			var outputString = toStringOutput();
			ca = outputString.split('^');
			matrixArray = createTableRows(outputString);
			var resultsWindow = window.open("", "_blank", "width=660,height=400");
			resultsWindow.document.write("<title>Results</title><style>td{padding:2px;} #labels td{border-bottom:1px solid;} #end td{border-top:1px solid;}</style><div style='text-align:center'><p><h2>NCSU Plantation Management Simulator</h2></p><h2>Yield Table ("+ca[0]+")</h2><p></p></div>"+
			"<table style='text-align:center;margin-left:auto;margin-right:auto;'><tr><td>Site Index<br>(Base Age "+ca[9]+")</td><td>Planting Density<br>(Stems/Acre)</td><td>Percent Planting<br>Survival</td><td>Initial Survival<br>(Stems/Acre)</td></tr><tr><td>"+ca[10]+"</td><td>"+ca[2]+"</td><td>"+ca[5]+"</td><td>"+Math.round(ca[2]*(ca[5]/100))+"</td></tr></table>"+
			"<table style='text-align:center;margin-left:auto;margin-right:auto;'>"+
			"<tr><td></td><td>DOM</td><td></td><td>Ave</td><td>Ave</td><td colspan='2'>Basal Area</td><td colspan='2'>Total Volume</td><td colspan='2'>Pine</td></tr>"+
			"<tr><td>Age</td><td>Hgt</td><td>TPA</td><td>Dia</td><td>Hgt</td><td>Pine</td><td>Hdwd</td><td>Pine</td><td>Hdwd</td><td>MAI</td><td>PAI</td></tr>"+
			"<tr id='labels'><td>(yrs)</td><td>(ft)</td><td></td><td>(in)</td><td>(ft)</td><td colspan='2'>(sq ft)</td><td colspan='2'>(cu ft - ib)</td><td></td><td></td></tr>"+
			matrixArray+
			"<tr id='end'><td></td><td></td><td></td><td></td><td></td><td colspan='2'></td><td colspan='2'></td><td></td><td></td></tr></table><p style='text-align:center'>NOTE: Height/Age Curve - <span>"+ca[11]+"</span></p>"
			);
		}else{
			alert("Please fill out the boxes with marked borders.");
		}
	}); // end run button
	//END RUN FUNCTION
	
	//START SAVE FUNCTIONS
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
		if(checkSaveTB() == false){
			if(checkSaveName($("#saveName").val())==true){
				owError($("#saveName").val());
			}else{
				localStorage.setItem($("#saveName").val(), toStringOutput());
				if(checkSave() == true){
					localStorage.setItem('saves', $('#saveName').val());
				}else{
					localStorage.setItem('saves', localStorage.getItem('saves') + "," + $("#saveName").val());
				}
				$("#saveName").val("");
				$("#saveDialog").dialog("close");
			}
		}else{
			alert("Please fill out the box with the marked border.")
		}
	});//end of Save button function
	
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
	
	$("#save").click(function(){
		$("#saveDialog").dialog('open');
	});
	//END SAVE FUNCTIONS
	
	//START LOAD FUNCTIONS
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
			if(ca[0] == 'Loblolly'){
				$("#loblollyPine").prop('checked', true);
				$("#whitePine").prop('checked', false);
			}else{
				$("#loblollyPine").prop('checked', false);
				$("#whitePine").prop('checked', true);
			}
			$("#icDropDown").val(ca[1]);
			$('#tpaTB').val(ca[2]);
			$("#ageTB").val(ca[3]);
			$("#sizeTB").val(ca[4]);
			$("#survTB").val(ca[5]);
			$("#hwDropDown").val(ca[6]);
			$("#totalBATB").val(ca[7]);
			$("#atAgeTB").val(ca[8]);
			if(ca[9] == 25){
				$("#BA25").prop('checked', true);
				$("#BA50").prop('checked', false);
			}else{
				$("#BA25").prop('checked', false);
				$("#BA50").prop('checked', true);
			}
			$("#siteIndexValue").val(ca[10]);
			$("#heightAgeSelect").val(ca[11]);
			if(ca[12] == true){
				$("#enableFusiform").prop('checked', true);
			}else{
				$("#enableFusiform").prop('checked', false);
			}
			$("#infection").val(ca[13]);
			$("#ffatAgeTB").val(ca[14]);
			$("#hazardRating").val(ca[15]);
			if(ca[16] == true){
				$("#enableThinnings").prop('checked', true);
			}else{
				$("#enableThinnings").prop('checked', false);
			}
			$("#outputVariable").text(ca[17]);
			$("#start").val(ca[18]);
			$("#end").val(ca[19]);
			$("#interval").val(ca[20]);
			loadThinnings(ca);
			checkEnabledFF();
			checkEnabledThinning();
			resetLoadSelect();
			thinningsCounter = 0;
			selectChecks();
			$("#loadDialog").dialog("close");
		}else{
			saves = localStorage.getItem('saves');
			listItem = $("#loadDialog-Select option:selected").text()+',';
			if(saves.indexOf(listItem) == -1){
				localStorage.setItem('saves', saves.replace($("#loadDialog-Select option:selected").text(), ''));
			}else{
				localStorage.setItem('saves', saves.replace(listItem, ''));
			}
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
		saveArray = localStorage.getItem('saves').split(',');
		for(x=0;x<saveArray.length;x++){
			localStorage.removeItem(saveArray[x]);
		}
		localStorage.removeItem('saves');
		resetLoadSelect();
		$("#clearDialog").dialog("close");
	}); //end clear saves dialog yes button
	$("#clearDialog-No").click(function(){ //start clear saves dialog no button
		$("#clearDialog").dialog("close");
	}); //end clear saves dialog no button
	//END ckear function
	
	function loadThinnings(ca){//start load thinnings function
		if(ca[21]!="none"){
			for(i=21;i<ca.length;i++){
				$('#selectList').append("<option value='"+thinningsCounter+"'>"+ca[i]+"</option>");
				thinningsCounter++;
			}
		}
	}//end load thinnings function
	
	function resetLoadSelect(){//start load dialog reset
		$("#selectCell").html("<select id='loadDialog-Select' size='3'></select>")
	}//end load dialog reset
	
	$("#load").click(function(){//start load dialog opener function
		if(localStorage.getItem('saves') != null){
			saveArray = localStorage.getItem('saves').split(',');
			for(i=0;i<saveArray.length;i++){
				$('#loadDialog-Select').append("<option value='"+i+"'>"+saveArray[i]+"</option>");
			}
		}
		$("#loadDialog").dialog('open');
	});//end load dialog opener function
	//END LOAD FUNCTIONS
	
	//START LOCALSTORAGE HANDLERS
	function getSave(cname) { //start getting local save information
		return localStorage.getItem(cname);
	} //end getting local save information
	function checkSave() { //start check for local save
		if (localStorage.getItem('saves') == null) {
			return true;
		}else{
			return false;
		}
	} //end check for local save
	
	function checkSaveName(name){ //start check save
		if(localStorage.getItem('saves') != null){
			var strg = localStorage.getItem('saves').split(',');
			for(i=0;i<strg.length;i++){
				if(strg[i] == name){
					return true;
				}else{
					return false;
				}
			}
		}
	} //end check save
	//END LOCALSTORAGE HANDLERS
	
	//START RESET
	function reset(){ //start reset form
		$("#loblollyPine").prop('checked', true);
		$("#whitePine").prop('checked', false);
		$("#icDropDown").val("0");
		$('#tpaTB').val("700");
		$("#ageTB").val("");
		$("#sizeTB").val("");
		$("#survTB").val("85");
		$("#hwDropDown").val("0");
		$("#totalBATB").val("");
		$("#atAgeTB").val("");
		$("#BA25").prop('checked', true);
		$("#BA50").prop('checked', false);
		$("#siteIndexValue").val("65");
		$("#heightAgeSelect").val("piedmont/upland");
		$("#enableFusiform").prop('checked', false);
		$("#infection").val("");
		$("#ffatAgeTB").val("");
		$("#hazardRating").val("");
		$("#enableThinnings").prop('checked', false);
		$("#outputVariable").text("HTML");
		$("#start").val("5");
		$("#end").val("35");
		$("#interval").val("5");
		$("#thinningContainer-select").html("<select name='selectList' id='selectList' multiple></select>");
		thinningsCounter = 0;
		$("#tpaTB").removeAttr("disabled");
		$("#ageTB").attr("disabled", "disabled");
		$("#sizeTB").attr("disabled", "disabled");
		$("#icVariable").text("Size");
		$("#survTB").removeAttr("disabled");
		$("#totalBATB").attr("disabled", "disabled");
		$("#atAgeTB").attr("disabled", "disabled");
		checkEnabledFF();
		$("#main input:text").each(function(){
			$(this).css("border-color", "initial");
		});
		checkEnabledThinning();
	} //end reset form
	
	//START TEXT BOX HANDLERS
	$("select").change(function() { //start clear disabled textboxes
		if($("input[type='text']").is(':disabled')){
			$("input:disabled").val("");
			$("input:disabled").css("border-color", "initial");
		}
	}); //end clear disabled textboxes
	
	$("input:text").click(function(){
		$(this).css("border-color", "initial");
	});
	
	$("input[pattern='[0-9]*']").keydown(function (e) { //start text validation
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			 // Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) ||
			 // Allow: Ctrl+C
			(e.keyCode == 67 && e.ctrlKey === true) ||
			 // Allow: Ctrl+X
			(e.keyCode == 88 && e.ctrlKey === true) ||
			 // Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	}); //end text validation
	
	function checkRequired(){ //start checkRequired text boxes
		var result = false;
		$("#main input:text").filter(":enabled").each(function(){
			if($(this).val()==''){
				$(this).css("border-color", "#CC0000");
				result = true;
			}
		});
		return result;
	}//end checkRequired
	
	function checkThinningTB(){ //start checkRequired text boxes
		var result = false;
		$("#thinningDialog input:text").filter(":enabled").each(function(){
			if($(this).val()==''){
				$(this).css("border-color", "#CC0000");
				result = true;
			}
		});
		return result;
	}//end checkRequired
	
	function checkSaveTB(){ //start checkRequired text boxes
		var result = false;
		$("#saveDialog input:text").filter(":enabled").each(function(){
			if($(this).val()==''){
				$(this).css("border-color", "#CC0000");
				result = true;
			}
		});
		return result;
	}//end checkRequired
	//END TEXT BOX HANDLERS
	
	$("#reset").click(function(){ //start reset button
		reset();
	}); //end reset button
	//END RESET
	$("#help").click(function(){ //start reset button
	}); //end reset button
	
	$("#config").click(function(){ //start config button
		$("#configDialog").dialog('open');
	}); //end config button
	
	$("#configDialog-Save").click(function(){ //start config button
		settings = $("#geolocation").is(':checked');
		localStorage.setItem("userConfigSettings", settings);
		$("#configDialog").dialog('close');
	}); //end config button
	
	$("#configDialog-Cancel").click(function(){ //start config button
		$("#configDialog").dialog('close');
	}); //end config button
	
	$("body").ready(function(){
		$("#configDialog").dialog({ //Dialog initialization
				modal:true,
				draggable:false,
				resizeable:false,
				position:{ my: "center center", at: "center center", of: "#main" },
				show: 'blind',
				hide: 'blind',
				width: 300,
				autoOpen:false,
		}); //end of Dialog initialization
	});
});