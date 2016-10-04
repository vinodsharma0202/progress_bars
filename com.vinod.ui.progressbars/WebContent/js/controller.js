/**
 * @author Vinod Kumar
 * The purpose of this class is to intialize and control scrollbars as per given requirement.
 */

$(document).ready(function() {
	$('#dialogMsg').dialog({
		width : '440px'
	});

	var g_bar1 = $("#progress1").progressbar({
		width : '380px',
		border : '2px solid #0A8F2B',
		padding : '3px'
	});
	g_bar1.data("counterValue", 0);
	$("#progress1_Count").text($("#progress1").val() +"%");

	var g_bar2 = $("#progress2").progressbar({
		width : '380px',
		border : '2px solid #0A8F2B',
		padding : '3px'
	});
	g_bar2.data("counterValue", 0);
	$("#progress2_Count").text($("#progress2").val()+"%");

	var g_bar3 = $("#progress3").progressbar({
		width : '380px',
		border : '2px solid #0A8F2B',
		padding : '3px'
	});
	$("#progress3_Count").text($("#progress3").val()+"%");
	g_bar3.data("counterValue", 0);

	$(":button").click(function(event) {
		var selected = $("#selectBar option:selected").text();
		if ($(this).prop("id") == "decButton25") {
			doUpdate(selected, -25);
		}
		if ($(this).prop("id") == "decButton10") {
			doUpdate(selected, -10);
		}
		if ($(this).prop("id") == "incButton10") {
			doUpdate(selected, 10);
		}
		if ($(this).prop("id") == "incButton25") {
			doUpdate(selected, 25);
		}
	});
});

var doUpdate = function(g_progress, incOrDec) {
	var valueAfterChange = $(g_progress).data('counterValue') + incOrDec;
	if(valueAfterChange <= 0){
		valueAfterChange = 0;
		$(g_progress).val(0);
	}else if (valueAfterChange > 100) {
		$(g_progress).val(100);
		//Considering case of IE
		$(g_progress).css('color','#FF0000');
		//Considering case of chrome and mozilla
		$(g_progress).css('background','#FF0000');
	} else {
		$(g_progress).val(valueAfterChange);
		//Considering case of IE
		$(g_progress).css('color','#0063a6');
		//Considering case of chrome and mozilla
		$(g_progress).css('background','#fff');
	}
	$(g_progress+"_Count").text(valueAfterChange+"%");
	$(g_progress).data("counterValue",valueAfterChange);
}