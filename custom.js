/**
	* @package Emotion
	* @subpackage Emotion HTML
	* @since Emotion HTML 1.0.1
	* 
	* Template Scripts
	* Created by Toing

	Custom JS
	
	1. Revolution Slider
	2. Flexslider Fade
	3. Flexslider Slide
	4. Main Navigation
	5. Tabs (Tabbed Content)
	6. Accordion (Toggle)
	7. Twitter
	8. Carousel
	9. Isotope
	10. Prettyphoto
	11. Flickr
	-- Misc
	
**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  2. Flexslider Fade
	/* ----------------------------------------------------------- */

	$('.flexslider.fade').flexslider({
		animation: "fade",
		start: function(slider){
			jQuery('#slider').removeClass('loading');
		}
	});



	/* ----------------------------------------------------------- */
	/*  3. Flexslider Slide
	/* ----------------------------------------------------------- */
	jQuery('.flexslider.slide').flexslider({
		animation: "slide",
		start: function(slider){
			jQuery('#slider').removeClass('loading');
		}
	});



	
});