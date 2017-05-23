$(function() {

	function heightDetect() {
    	$(".main-head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
    	heightDetect();
	});

	$(".toggle-mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top-mnu ul a").click(function() {
		$(".top-mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top-text").css("opacity", "1");
	}).append("<span>");

	$(".toggle-mnu").click(function() {
		if ($(".top-mnu").is(":visible")) {
			$(".top-text").css("opacity", "1");
			$(".top-mnu").fadeOut(600);
			$(".top-mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").css("opacity", ".1");
			$(".top-mnu").fadeIn(600);
			$(".top-mnu li a").addClass("fadeInUp animated");
		};
	});

    $(function(){
        $("form").validate();
    });


    $("#accordion").accordion({
        heightStyle: "content"
    });
    $("#accordion2").accordion({
        heightStyle: "content"
    });

    $( "#select-size" ).selectmenu();
    $( "#select-size1" ).selectmenu({
        position: { my : "left bottom-30", at: "left bottom-30" }
    });

    $( "#select-size2" ).selectmenu();

    $( "#select-size3" ).selectmenu();

    $( "#select-size4" ).selectmenu();


    $("#login").click(function() {
        $("#login-popup").fadeIn(300);
    });
    $("#login1").click(function() {
        $("#login-popup").fadeIn(300);
    });
    $("#login-close").click(function() {
        $("#login-popup").fadeOut(300);
    });


	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	var imagePosition = $("#ring").position();
	var titlePosition = $("#title").position();
	var calculate = {
		enabled: true,
		timeout: true
	};
	if ($(window).width() > 768) {
		$(".main-head").mousemove(function(e){
			var $ring = $('#ring');
			var $title = $('#header-text');
			var $mainHead = $('#main-head');
		    var pageX = e.pageX - ($(window).width() / 2);
		    var pageY = e.pageY - ($(window).height() / 2);
		    var newvalueX = width * pageX * -1 - 25;
		    var newvalueY = height * pageY * -1 - 50;


	    	var newRingValueX = 570 + width * 3 * pageX * 1.1;
	    	var newRingValueY = 84 + height * 3 * pageY * 1.1;
	    	var newTitleValueX = 0 + width * 3 * pageX * -1;
	    	var newTitleValueY = 0 + height * 3 * pageY * -1;

            if(calculate.enabled){
                var oldValueY = +$mainHead.css("background-position-y").slice(0, -2);
                if((newvalueY - oldValueY) > 1) {
                    newvalueY = oldValueY + 1;
                }
                if((newvalueY - oldValueY) < -1) {
                    newvalueY = oldValueY - 1;
                }
                var oldValueX = +$mainHead.css("background-position-x").slice(0, -2);
                if((newvalueX - oldValueX) > 1) {
                    newvalueX = oldValueX + 1;
                }
                if((newvalueX - oldValueX) < -1) {
                    newvalueX = oldValueX - 1;
                }

                var oldRingValueY = +$ring.css("top").slice(0, -2);
                if((newRingValueY - oldRingValueY) > 2) {
                    newRingValueY = oldRingValueY + 2;
                }
                if((newRingValueY - oldRingValueY) < -2) {
                    newRingValueY = oldRingValueY - 2;
                }
                var oldRingValueX = +$ring.css("left").slice(0, -2);
                if((newRingValueX - oldRingValueX) > 2) {
                    newRingValueX = oldRingValueX + 2;
                }
                if((newRingValueX - oldRingValueX) < -2) {
                    newRingValueX = oldRingValueX - 2;
                }
                var oldTitleValueY = +$title.css("top").slice(0, -2);
                if((newTitleValueY - oldTitleValueY) > 2) {
                    newTitleValueY = oldTitleValueY + 2;
                }
                if((newTitleValueY - oldTitleValueY) < -2) {
                    newTitleValueY = oldTitleValueY - 2;
                }
                var oldTitleValueX = +$title.css("left").slice(0, -2);
                if((newTitleValueX - oldTitleValueX) > 2) {
                    newTitleValueX = oldTitleValueX + 2;
                }
                if((newTitleValueX - oldTitleValueX) < -2) {
                    newTitleValueX = oldTitleValueX - 2;
                }
                if(calculate.timeout){
                    setTimeout(function(){
                        calculate.enabled = false
					}, 1500);
                    calculate.timeout = false;
                }
            }

            $mainHead.css("background-position", newvalueX+"px  "+newvalueY+"px");
            $ring.css("top", newRingValueY+"px");
            $ring.css("left", newRingValueX+"px");
            $title.css("top", newTitleValueY+"px");
            $title.css("left", newTitleValueX+"px");

	});

    }});