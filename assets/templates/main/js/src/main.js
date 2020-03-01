console.log('https://quasi-art.ru');

window.debug = window.location.hash == '#debug';

function initContactsMap() {
  /**
   * Доступен ли Google Maps API
   */
  if (typeof window.google !== 'object' || window.google === null || typeof window.google.maps !== 'object' || window.google.maps === null) {
    return false;
  }

  var mapContainerId = '#contacts-map';
  var coords = {
    lat: 57.6127964,
    lng: 39.9135285,
  };
  var mapContainer = document.querySelector(mapContainerId);
  if (typeof mapContainer !== 'object' || mapContainer === null) {
    return false;
  }
  var lat = mapContainer.getAttribute('data-lat');
  var lng = mapContainer.getAttribute('data-lng');
  if (lat !== null && lng !== null) {
    coords.lat = parseFloat(lat);
    coords.lng = parseFloat(lng);
  }

  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    center: new google.maps.LatLng(coords.lat, coords.lng),
  };
  var map = new google.maps.Map(mapContainer, mapOptions);

  var contentString = 'Легенда';
  var image = 'assets/templates/main/images/contacts-map__marker-image.png';
  var myLatLng = new google.maps.LatLng(coords.lat, coords.lng);
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    optimized: false,
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}

function initPlacesMap() {
  if (!googleApiAvailable()) {
    return false;
  }

  var mapContainerId = '#places-map';
  var coords = {
    lat: 54.0001,
    lng: 55.0001,
  };
  var mapContainer = document.querySelector(mapContainerId);
  if (typeof mapContainer !== 'object' || mapContainer === null) {
    return false;
  }
  var lat = mapContainer.getAttribute('data-lat');
  var lng = mapContainer.getAttribute('data-lng');
  if (lat !== null && lng !== null) {
    coords.lat = parseFloat(lat);
    coords.lng = parseFloat(lng);
  }

  var mapOptions = {
    zoom: 10,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    center: new google.maps.LatLng(coords.lat, coords.lng),
  }
  var map = new google.maps.Map(mapContainer, mapOptions);

	if ('legendaPlaces' in window && typeof window.legendaPlaces == 'object' && window.legendaPlaces !== null) {
		var markers = [];
		var infowindow = new google.maps.InfoWindow();
		var avgLat = 0;
		var avgLng = 0;
		
		for (var idx in window.legendaPlaces) {
			var place = window.legendaPlaces[idx];
			avgLat += parseFloat(place.lat/window.legendaPlaces.length);
			avgLng += parseFloat(place.lng/window.legendaPlaces.length);
			var myLatLng = new google.maps.LatLng(parseFloat(place.lat), parseFloat(place.lng));
			
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				//icon: image,
				optimized: false
			});
			google.maps.event.addListener(marker, 'click', (function(marker, idx) {
				return function() {
					infowindow.setContent(window.legendaPlaces[idx].title);
					infowindow.setOptions({maxWidth: 256});
					infowindow.open(map, marker);
				};
			}) (marker, idx));
		}
		var avgPosition = new google.maps.LatLng(avgLat, avgLng);
		map.setCenter(avgPosition);
	}
}

function initPlacesControls() {
	var wrapper = $('.places-info');
	if (wrapper.length == 1) {
		$(wrapper).on('click', '[data-placesviewmode]', function(e) {
			var classActive = 'places-info__places-mode--active';
			wrapper.find('[data-placesviewmode]').removeClass(classActive);
			$(this).addClass(classActive);
			var mode = $(this).attr('data-placesviewmode');
			switch(mode) {
				case 'map':
					$('#places-list').fadeOut(100, function() {
						$('#places-map').fadeIn();
					});
					break;
				case 'list':
					$('#places-map').fadeOut(100, function() {
						$('#places-list').fadeIn();
					});
					break;
			}
		});
	}
}

function googleApiAvailable() {
	return (typeof window.google === 'object' && window.google !== null && typeof window.google.maps === 'object' && window.google.maps !== null);
}

function initInstagramSlider() {
	var owl = $('#instagram-slider');
	owl.owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
		}
	});
	$('.instagram-slider__right').click(function(e) {
	    owl.trigger('next.owl.carousel');
	});
	$('.instagram-slider__left').click(function(e) {
	    owl.trigger('prev.owl.carousel', [300]);
	});
}

function isMobile() {
	return (parseInt($(window).outerWidth()) < 600);
}

function isTablet() {
	return (parseInt($(window).outerWidth()) < 993);
}

function initElementsSameHeight(selector) {
    var windowWidth = $(window).outerWidth();
    $(selector).css('height', 'auto');
    if (!isTablet()) {
      var maxHeight = 0;
      $.each($(selector), function(idx, e) {
        maxHeight = ($(e).outerHeight() > maxHeight) ? $(e).outerHeight() : maxHeight;
      });
      $(selector).css('height', maxHeight);
    } else {
        $(selector).css('height', 'auto');
    }
}

$(function() {
	initInstagramSlider();
	initContactsMap();
	initPlacesMap();
	initPlacesControls();
	initElementsSameHeight('.index-blog-item');
});
