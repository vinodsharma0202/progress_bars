/**
 * @author Vinod Kumar
 * The purpose of this class is to test various increament decreament cases if progressbars
 */
module('Arithmatic Operation Test Cases', {
    teardown: function () {
        $('#resultDiv').remove();
    }
});

test("verifies that progress bar 1 counter increament properly", function() {
	reset_Allinput();
	doUpdate("#progress1",50);
    equal($("#progress1").data('counterValue'), 50);
});

test("verifies that progress bar 2 counter increament properly", function() {
	reset_Allinput();
	var a = doUpdate("#progress2",150);
    equal($("#progress2").data('counterValue'), 150);
});

test("verifies that progress bar 3 counter increament properly", function() {
	reset_Allinput();
	doUpdate("#progress3",250);
    equal($("#progress3").data('counterValue'), 250);
});

test("verifies that progress bar 2 counter increament and decreament properly", function() {
	reset_Allinput();
	doUpdate("#progress2",-200);
	doUpdate("#progress2",100);
    equal($("#progress2").data('counterValue'), 100);
});


test("verifies that progress bar 3 counter increament and decreament properly", function() {
	reset_Allinput();
	doUpdate("#progress3",-500);
	doUpdate("#progress3",25);
    equal($("#progress3").data('counterValue'), 25);
});

test("verifies that progress bar 2 counter decreament properly", function() {
	reset_Allinput();
	doUpdate("#progress2",0);
	doUpdate("#progress2",-100);
    equal($("#progress2").data('counterValue'), 0);
});

test("verifies that progress bar 1 shows correct value %", function() {
	reset_Allinput();
	doUpdate("#progress1",-100);
	doUpdate("#progress1",50);
    equal($("#progress1_Count").text(), "50%");
});

test("verifies that progress bar 3 shows correct value %", function() {
	reset_Allinput();
	doUpdate("#progress3",-500);
	doUpdate("#progress3",500);
    equal($("#progress3_Count").text(), "500%");
});

function reset_Allinput () {
	doUpdate("#progress1",0);
	doUpdate("#progress2",0);
	doUpdate("#progress3",0);
}