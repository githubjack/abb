
$(function(){
	var jCards = '';
	$('.jobTable .jobTitle a').each(function (index) {
		var jobTitle = $(this).html(),
		jobLink = $(this).attr('href'),
		jobLocation = $(this).parent().next('.jobLocation').html();
		jCards += '<a href="' + jobLink + '">';
		jCards += '<div class="job-card">';
		jCards += '<h1>' + jobTitle + '</h1>';
		jCards += '<h2>' + jobLocation + '</h2>';
		jCards += '<div class="applylinks">Aplicar<img src="imgs/saber-mas-arrow.png" alt="" /></div>';
		jCards += '</div>';
		jCards += '</a>';
	});
	if ($(('.jobTable .jobTitle a')).length) {
		$('.jobTable').replaceWith('<div class="section bg-lightgray"><div class="container"><div class="job-cards row">' + jCards + '</div></div></div>');
	} else {
		var noJobsMessage = 'There are currently no jobs available';
		$('.jobTable').replaceWith('<div class="section bg-lightgray"><div class="container"><p class="text-center">' + noJobsMessage + '</p></div></div>');
	}
});


// START OF ALL INTERACTIVE FUNCTIONS
$(function(){
	//AUTOMATIC EXPLORE CARD TITLES, IMGS AND LINKS
	//Switch your your navigation
	$('#headernavigation li').not('.active').each(function(index, el) {

		var page_title = $('a', this).text(); 
		var page_link = $('a', this).attr('href'); 
		var slider_img = $('#inner-slideshow img').eq(index).attr('src'); 

		console.log(slider_img);
		console.log('index is = ' + index);

		$('.explore-card').eq(index).find('h1').html(page_title);
		$('.explore-card').eq(index).find('a').attr('href', page_link);
		$('.explore-card').eq(index).find('img').attr('src', slider_img);

		if (index > 1) {
			return false;
		}
	});


	$('#inner-slideshow > p').children().prependTo('#inner-slideshow');
	$('#inner-slideshow > p').remove();
	$('#outer-slideshow').flexslider({
		selector: "#inner-slideshow > img",
		initDelay: 0,
		animationSpeed: 1100, 
		slideshowSpeed: 4500,
		animation: "fade",
		start: function(slider){
		        // $('#inner-slideshow').removeClass('loading');
		    }
		});


		// Get height dynamically from the slideshow
		function wrapElements(){
			$('.strapline').wrap( "<div class='straplineWrapper'></div>" );
		}

		function setInitialHeight(){
			var slideShowHeight = $('#outer-slideshow img').height();
			$( ".straplineWrapper" ).css({
				height: slideShowHeight
			})
		}

		function updateContentHeight(){
			$( window ).resize(function() {
				var slideShowHeight = $('#outer-slideshow img').height();
				$( ".straplineWrapper" ).css({
					height: slideShowHeight
				})
			});
		}

		//wrapElements();
		//setInitialHeight();
		//updateContentHeight();



		$(function(){
	//MOBILE NAV
	var mobile_nav = function(menu_container,mobile_nav) {

	//Insert neccesary html
	$(menu_container).append('<div id="rect1" /><div id="rect2" /><div id="rect3" />');
	$('<div id="mobile_back"></div>').insertBefore($(menu_container).parent());
	
	//Assign vatiables
	var animating = false,
	toCloseIcon = true,
	list_item = mobile_nav + ' li';
	back = '#mobile_back';

	//Click event
	$(menu_container + ', ' + back + ',' + mobile_nav).click(function(){
		console.log(animating);
		if (!$(mobile_nav).hasClass('nav-open') && !animating) {
			animating = true;
			$(menu_container).addClass('animate');
			var t_delay = 300;
			$(back).fadeIn();
			$(list_item).each(function(){
				$(this).delay(t_delay).fadeIn(500);
				t_delay += 50;
			});
			$('#topbar h5').fadeIn();
			$(list_item + ', ' + menu_container).promise().done(function(){
				animating = false;
			});
			$(mobile_nav).addClass('nav-open');
		} else if(!animating) {
			animating = true;
			$(menu_container).removeClass('animate');
			$(list_item).fadeOut();
			$(back).fadeOut();
			$(list_item +', ' + back + ', ' + menu_container).promise().done(function(){
				animating = false;
			});
			$(mobile_nav).removeClass('nav-open');
			$('#topbar h5').fadeOut();
		}
	});
	
}
mobile_nav('.Menu', 'ul#mobilenavigation');
});




	// DROP DOWN MENU - WE DONT UNCOMMENT UNLESS NECESSARY
	// DROP DOWN MENU - WE DONT UNCOMMENT UNLESS NECESSARY

	// $(function(){
	// 	$("#inner-topnavigation, #inner-navigation, #inner-bottomnavigation").addClass("dropdown");
	//     $("ul.dropdown li").hover(function(){
	//         $(this).addClass("hover");
	//         $('ul:first',this).css('display', 'block');
	//     }, function(){
	//         $(this).removeClass("hover");
	//         $('ul:first',this).css('display', 'none');
	//     	});
	//     $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
	// });

	// TAB SYSTEM
	var tabNav = $('ul#tabnav'),
	tabNavButtons = $('ul#tabnav li'),
	tabContent = $('div#tabs > div');

	$(tabNavButtons[0]).attr('id','active');
	$(tabContent[0]).show();

	tabNav.on('click','li',function(e){
		e.preventDefault();
		curTab = $(this),
		target = curTab.children().attr('href');

		curTab.stop().attr('id','active')
		.siblings('li')
		.removeAttr('id');

		$('div#'+target).stop().show('slow')
		.siblings('div')
		.stop()
		.hide('slow');
	});

		// PROFILE BOX GRID
		$('.boxgrid.captionfull').hover(function(){
			$(".cover", this).stop().animate({
				bottom:'0px'
			},{queue:false,duration:160});

		}, function() {
			$(".cover", this).stop().animate({
				bottom:'-100%'
			},{queue:false,duration:160});
		});

		// FAQS ACCORDIAN
		var expander = $('.expand'),
		collapser = $('.collapse');

		expander.click(function(){
			$(this).next('.collapse').slideToggle(250)
			.siblings('.collapse')
			.slideUp(250);

			$(this).toggleClass('open')
			.siblings(expander)
			.removeClass('open');
		});
	});



// This is the tracking code. Now in the Global.js
document.write(unescape("%3Cscript type='text/javascript' src='/jobs/styleapps/trackingcode.js' %3E%3C/script%3E"));

function preventDefaultAction(e) {
	var Browser = {
		Version: function() {
			var version = 999; // we assume a sane browser
			if(navigator.appVersion.indexOf("MSIE") != -1) {
				// bah, IE again, lets downgrade version number
				version = parseFloat(navigator.appVersion.split("MSIE")[1]);}
				return version;
			}
		}
	// If IE
	if (Browser.Version() !== 999) {
		event.returnValue = false;
	}
	// Firefox, Safari, Opera
	else {
		e.preventDefault();
		return false;
	}
}
function stringToBool(input) {
	if(input == "true"){ return true;  }
	else if(input == "false"){ return false; }
}

var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
var firstTracker;
var secondTracker;
setTimeout('startGA();', 1000);
function startGA() {
	if (typeof(_gat) == 'object') {
		firstTracker = _gat._getTracker("UA-7391736-1");
		firstTracker._trackPageview();
		secondTracker = _gat._getTracker("UA-4658834-1"); 
		secondTracker._setDomainName("none"); 
		secondTracker._setAllowLinker(true);
		secondTracker._trackPageview();
	}
}

