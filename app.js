(function(){
	jQuery(document).on("ready", function(){
		
		var circle = jQuery(".circle");
		var body = jQuery(".body");
		var time;

		function startTimer(){
			circle.show(4000);
			body.removeClass("done");
			time = window.setTimeout(function(){
				circle.hide(5000);
				body.addClass("done");
			}, 1000 * 60 * 2);
		}

		body.on("click", function(){
			startTimer();
		});

		startTimer();
	});
})();
  