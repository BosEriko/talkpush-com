/* Scroll To Bottom End */
var botScrollFunction		= function(){window.scrollTo(0,document.body.scrollHeight)}
window.botOnReceive			= function(){botScrollFunction()}
window.botOnSend				= function(){botScrollFunction()}
/* Scroll To Bottom End */

$(function(){
	/* Data Text Margin Start */
	var botBodyMargin = function(){
		$("body").css({
			"margin-bottom" : $(".crb#talkpush-bot #tp_body").outerHeight()
		})
	}
	/* Data Text Margin End */

	/* Text Input Width Start */
	var botTextInputMargin = function(){
		$(".crb#talkpush-bot .tp_body").css("padding","0 " + ($(document).width() > 800 ? ($(document).width()-800)/2 : 0) + "px")
	}
	/* Text Input Width End */

	/* Feedback Placement Start */
	var botFeedbackMargin = function(){
		$(".crb#talkpush-bot .tp_typingFeedbackContent").css({
			"left"		: ($(document).width() > 800 ? ($(document).width()-800)/2 : 0) + "px",
			"bottom"	: $(".crb#talkpush-bot #tp_body").outerHeight() + "px"
		})
	}
	/* Feedback Placement End */

	/* Wait for page to load Start */
	$(window).bind("load", function(){
		setTimeout(function(){
			botBodyMargin()
			botTextInputMargin()
			botFeedbackMargin()
			document.getElementById('tp_typingFeedback').classList.add('active')
		},2000)
		setTimeout(function(){
			tp_dataText.insertAdjacentHTML('beforeend', tp_Chat("left", "https://i.imgur.com/iIQ7VMC.png", "Hi there! My name is Stanley and I'm here to find out if we have a suitable position for you. To start this conversation, please say hello!", ""))
			document.getElementById('tp_typingFeedback').classList.remove('active')
		},5000)
	})
	/* Wait for page to load End */
})
