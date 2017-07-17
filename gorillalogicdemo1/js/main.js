progressBar = {

	completedPercentage: 0,
	
	init: function(){

		this.attachEventHandlers();
		this.calculateUserProgress();

	},

	attachEventHandlers: function(){

		var popOverContainer = $(".pop-over-container"),
			that = this;

		//Show pop over when clicking on .progress-bar links
		$(".progress-bar").on("click", function(e){
			e.preventDefault();
			popOverContainer.removeClass("hide");
			that.animateProgressBar();
		});

		//Hide pop over when clicking on the X
		popOverContainer.find(".close").on("click", function(){
			popOverContainer.addClass("hide");
			that.resetProgressBar();
		})

	},

	calculateUserProgress: function(){

		//In a real app the target and current values would be requested from back end
		var userTargetValue = 125,
			userCurrentValue = 56,
			userRemainingValue;


		userRemainingValue = userTargetValue - userCurrentValue;

		this.completedPercentage = userCurrentValue * 100 / userTargetValue;

		$(".target-value").html(userTargetValue);
		$(".remaining-value").html(userRemainingValue);
		$(".progress-value").html(userCurrentValue);

	},

	animateProgressBar: function(){

		$(".filled-portion").animate({
			width: this.completedPercentage + "%"
		}, 3000);
	},

	resetProgressBar: function(){
		$(".filled-portion").css("width", 0);
	}

}

progressBar.init();
