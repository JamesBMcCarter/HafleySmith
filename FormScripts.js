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
			}else if($(window).width()<969){
				$("#main").css("max-width", 645);
			}else if($(window).width()<1294){
				$("#main").css("max-width", 969);
			}else if($(window).width()<1620){
				$("#main").css("max-width", 1294);
			}else{
				$("#main").css("max-width", 1620);
		}
		$(window).resize(function () {
			if($(window).width()<645){
				$("#main").css("max-width", 320);
			}else if($(window).width()<969){
				$("#main").css("max-width", 645);
			}else if($(window).width()<1294){
				$("#main").css("max-width", 969);
			}else if($(window).width()<1620){
				$("#main").css("max-width", 1294);
			}else{
				$("#main").css("max-width", 1620);
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
			for(i=0;i<thinningsArray.length;i++){
				thinningsString = thinningsString + "^" + thinningsArray[i].text;
				
			}
			if (thinningsArray.length == 0){
				return "none";
			}
			return thinningsString;
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
				+checkTB($("#interval").val())
				+collectThinnings()
			return runOutput;
		} //end save string format
		//END toString function
		
		//START RUN FUNCTION
		$("#run").click(function(){ //start run button
			var outputString = toStringOutput();
			ca = outputString.split('^');
			var resultsWindow = window.open("", "_blank", "width=660,height=400");
			resultsWindow.document.write("<title>Results</title><style>td{padding:2px;} #labels td{border-bottom:1px solid;} #end td{border-top:1px solid;}</style><div style='text-align:center'><p><h2>NCSU PLANTATION MANAGEMENT SIMULATOR</h2></p><h2>YIELD TABLE ("+ca[0]+")</h2><p></p></div>"+
			"<table style='text-align:center;margin-left:auto;margin-right:auto;'><tr><td>SITE INDEX<br>(BASE AGE "+ca[9]+")</td><td>PLANTING DENSITY<br>(STEMS/ACRE)</td><td>PERCENT PLANTING<br>SURVIVAL</td><td>INITIAL SURVIVAL<br>(STEMS/ACRE)</td></tr><tr><td>"+ca[10]+"</td><td>"+ca[2]+"</td><td>"+ca[5]+"</td><td>595</td></tr></table>"+
			"<table style='text-align:center;margin-left:auto;margin-right:auto;'>"+
			"<tr><td></td><td>DOM</td><td></td><td>AVE</td><td>AVE</td><td colspan='2'>BASAL AREA</td><td colspan='2'>TOTAL VOLUME</td><td colspan='2'>PINE</td></tr>"+
			"<tr><td>AGE</td><td>HGT</td><td>TPA</td><td>DIA</td><td>HGT</td><td>PINE</td><td>HDWD</td><td>PINE</td><td>HDWD</td><td>MAI</td><td>PAI</td></tr>"+
			"<tr id='labels'><td>(yrs)</td><td>(ft)</td><td></td><td>(in)</td><td>(ft)</td><td colspan='2'>(sq ft)</td><td colspan='2'>(cu ft - ib)</td><td></td><td></td></tr>"+
			"<tr><td>11</td><td>22</td><td>33</td><td>44</td><td>55</td><td>66</td><td>77</td><td>88</td><td>99</td><td>1010</td><td>1111</td></tr>"+
			"<tr id='end'><td></td><td></td><td></td><td></td><td></td><td colspan='2'></td><td colspan='2'></td><td></td><td></td></tr></table><p style='text-align:center'>NOTE: HEIGHT/AGE CURVE - <span style='text-transform:uppercase'>"+ca[11]+"</span></p>"
			);
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
			if(checkSaveName($("#saveName").val())===true){
				owError($("#saveName").val());
			}else{
				localStorage.setItem($("#saveName").val(), toStringOutput());
				$("#saveName").val("");
				$("#saveDialog").dialog("close");
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
			for(i=0;i<localStorage.length;i++){
				$('#loadDialog-Select').append("<option value='"+i+"'>"+localStorage.key(i)+"</option>");
			}
			$("#loadDialog").dialog('open');
		});//end load dialog opener function
		//END LOAD FUNCTIONS
		
		//START LOCALSTORAGE HANDLERS
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
		//END LOCALSTORAGE HANDLERS
		
		//START RESET
		function reset(){ //start reset form
			$("#loblollyPine").prop('checked', true);
			$("#whitePine").prop('checked', false);
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
			$("#heightAgeSelect").val("piedmont/upland");
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
			checkEnabledFF();
			checkEnabledThinning();
		} //end reset form
		
		//clear disabled textboxes
		$("select").change(function() { //start clear disabled textboxes
			if($("input[type='text']").is(':disabled')){
				$("input:disabled").val("");
			}
		}); //end clear disabled textboxes
		//end clear disabled function
		
		$("#reset").click(function(){ //start reset button
			reset();
		}); //end reset button
		//END RESET
	});