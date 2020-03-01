$(function() {
	initCourseSlider();
});

function initCourseSlider() {
	var owl = $('#course-slider');
	owl.owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		responsive: {
			600: {
				items: 3
			},
			0: {
				items: 1
			},
		}
	});
}