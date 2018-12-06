$(document).ready(function() {
    var width = $(window).width();
	  var height = $(window).height();
	  var randPosX = Math.floor((Math.random()*width));
	  var randPosY = Math.floor((Math.random()*height));
	  

	  $('.testPic1').css('left', randPosX);
	  $('.testPic1').css('top', randPosY);

    
});

  