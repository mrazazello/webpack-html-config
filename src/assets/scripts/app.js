var linksPageFilter = $('.links-page_filter');
var pageFilter = $('.page__filter');
var mapSrcPc = $('.map__item').attr('src');

enquire.register('screen and (max-width: 576px)', {
	match: function() {
		if(pageFilter.length) {
			linksPageFilter.insertAfter(pageFilter);
		} else {
			linksPageFilter.prependTo('.page > .container:first-child');
		}

		$('.links-page__form').hide();
		$('.links-page_filter.active .links-page__form').show();

		$('.links-page_filter').on('click', '.links-page__item', function() {
			$(this).find('.links-page__form').slideToggle();
			$(this).toggleClass('active');
		});

		$('.map__item').attr('src', 'https://yandex.ru/map-widget/v1/?um=constructor%3A282e83b15aada2282043fcf7b2d60639730f86555be8bd6b5c7dc2ac80025dec&amp;source=constructor');
	},
	unmatch: function() {
		linksPageFilter.prependTo('.page__aside');
		$('.links-page_filter').off('click');
		$('.links-page_filter .links-page__form').show();

		$('.map__item').attr('src', mapSrcPc);
	},
});

svg4everybody();

$(function() {

	$('.slider-showcase__items').slick({
		slidesToShow: 1,
		prevArrow: '.slider-showcase__nav_prev',
		nextArrow: '.slider-showcase__nav_next',
		autoplay: true
	});

	$('.slider-placing__items').slick({
		slidesToShow: 2,
		prevArrow: '.slider-placing__nav_prev',
		nextArrow: '.slider-placing__nav_next',
		autoplay: true,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider-places__items').slick({
		slidesToShow: 1,
		prevArrow: '.slider-places__nav_prev',
		nextArrow: '.slider-places__nav_next',
		autoplay: true
	});

	// Фикс бага в двойном слайдере картинок
	$('.slider-images__items-thumbs').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var 
			direction,
			slideCountZeroBased = slick.slideCount - 1;
		if (nextSlide == currentSlide) {
			direction = "same";
	
		} else if (Math.abs(nextSlide - currentSlide) == 1) {
			direction = (nextSlide - currentSlide > 0) ? "right" : "left";
	
		} else {
			direction = (nextSlide - currentSlide > 0) ? "left" : "right";
		}
		if (direction == 'right') {
			$('.slick-cloned[data-slick-index="' + (nextSlide + slideCountZeroBased + 1) + '"]', $('.slider-images__items-thumbs')).addClass('slick-current-clone-animate');
		}
		if (direction == 'left') {
			$('.slick-cloned[data-slick-index="' + (nextSlide - slideCountZeroBased - 1) + '"]', $('.slider-images__items-thumbs')).addClass('slick-current-clone-animate');
		}
	});
	$('.slider-images__items-thumbs').on('afterChange', function () {
		$('.slick-current-clone-animate', $('.slider-images__items-thumbs')).removeClass('slick-current-clone-animate');
		$('.slick-current-clone-animate', $('.slider-images__items-thumbs')).removeClass('slick-current-clone-animate');
	});

	// Двойной слайдер картинок
	$('.slider-images-main__items:not(.slider-images-main__items_single)').slick({
		slidesToShow: 2,
		asNavFor: '.slider-images-thumbs__items',
		prevArrow: '.slider-images-main__nav_prev',
		nextArrow: '.slider-images-main__nav_next',
		centerMode: true,
		autoplaySpeed: 5000,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.slider-images-thumbs__items').slick({
		slidesToShow: 10,
		asNavFor: '.slider-images-main__items',
		centerMode: true,
		arrows: false,
		focusOnSelect: true,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 7
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 2
				}
			},
		]
	});

	// Одиночный слайдер картинок
	$('.slider-images-main__items_single').slick({
		slidesToShow: 2,
		prevArrow: '.slider-images-main__nav_prev',
		nextArrow: '.slider-images-main__nav_next',
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	var selector = '.slider-images-main__items .slick-slide:not(.slick-cloned)';

	// Init fancybox, skip cloned elements
	$().fancybox({
		selector : selector,
		backFocus : false,
		afterShow: function(instance, current) {
			current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
		}
	});
	
	// Custom click event on cloned elements, 
	$(document).on('click', '.slick-cloned', function(e) {
		$(selector)
			.eq(($(this).attr("data-slick-index") || 0) % $(selector).length)
			.trigger("click.fb-start", { $trigger: $(this) });

		return false;
	});

	$('.header__hamburger').on('click', function() {
		$(this).toggleClass('is-active');
		$('.header__content').toggleClass('active');
		$('html').toggleClass('lock');
	});

	$(window).on('load resize orientationchange', function() {
		var headerHeight = $('.header').outerHeight(true) + 10;
		$('.banner').css('paddingTop', headerHeight);
	});

	function responseTypeHandler(form, data) {
		if($(form).hasClass('popup-response')) {
			messageFancybox(data);
		} else if($(form).hasClass('notice-response')) {
			noticeResponse($(form), data);
		} else {
			messageFancybox(data);
		};
	}

	function messageFancybox(data) {
		$.fancybox.open(`
			<div class="message overlay">
				<div class="message__inner">
					${data.title ? `<h2 class="message__title">${data.title}</h2>` : ''}
					${data.result ? `<div class="message__content">${data.result}</div>` : ''}
				</div>
			</div>
		`, {
			touch: false,
			baseClass: 'fancybox-message',
		});
	}

	function noticeResponse(form, data) {
		var statusClass = data.status ? 'notice_success' : 'notice_danger';

		var noticeCard = $(`
			<div class="form-mailing__notice notice ${statusClass}">
				${data.result}
			</div>
		`).hide();

		form.prepend(noticeCard);
		noticeCard.show('fast');
	}

	$('.feedback').validate({
		errorPlacement: function (error, element) {
			element.attr("placeholder", error[0].outerText);
			if(element[0].id === 'file') {
				$(element).parent().addClass('file-selector_error');
			}
		},
		submitHandler: function(form) {
			$.ajax({
				url: form.action,
				type: form.method,
				data: $(form).serialize(),
				error: function(data) {
					responseTypeHandler($(form), data);
				},
				success: function(data) {
					responseTypeHandler($(form), data);
				},
			});
		}
	});

	$('.form-mailing').validate({
		errorPlacement: function (error, element) {
			element.attr("placeholder", error[0].outerText);
		},
		submitHandler: function(form) {
			$.ajax({
				url: form.action,
				type: form.method,
				data: $(form).serialize(),
				error: function(data) {
					responseTypeHandler($(form), data);
				},
				success: function(data) {
					responseTypeHandler($(form), data);
				},
			});
		}
	});

	$('.booking').validate({
		errorPlacement: function (error, element) {
			element.attr("placeholder", error[0].outerText);
		},
		submitHandler: function(form) {
			$.ajax({
				url: form.action,
				type: form.method,
				data: $(form).serialize(),
				error: function(data) {
					responseTypeHandler($(form), data);
				},
				success: function(data) {
					responseTypeHandler($(form), data);
				},
			});
		}
	});

	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
	
			reader.onload = function (e) {
				$('.file-img').attr('src', e.target.result);
				$('.feedback__file-selector').hide();
				$('.file-text').remove();
				$('.feedback__file-img-wrap').addClass('selected').append(`<p class="file-text">${input.files[0].name}</p>`);
			}
	
			reader.readAsDataURL(input.files[0]);
		}
	}
	
	$('#file').change(function(){
		readURL(this);
	});

	var timeout;
	$(window).on('resize', function(){
		clearTimeout(timeout);
		$('.header__content').removeClass('animated');
		timeout = setTimeout(function(){
			$('.header__content').addClass('animated');
		}, 100);
	});

	jQuery.extend( jQuery.fn.pickadate.defaults, {
		monthsFull: [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря' ],
		monthsShort: [ 'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек' ],
		weekdaysFull: [ 'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота' ],
		weekdaysShort: [ 'вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб' ],
		today: 'сегодня',
		clear: 'удалить',
		close: 'закрыть',
		firstDay: 1,
		format: 'd mmmm yyyy г.',
		formatSubmit: 'yyyy/mm/dd'
	});

	$('.datepicker').pickadate({
		min: new Date(),
		format: 'd.mm.yyyy'
	});

	// Счетчик
	function incrementValue(e) {
		e.preventDefault();
		var fieldName = $(e.target).data('field');
		var parent = $(e.target).closest('div');
		var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

		if (!isNaN(currentVal)) {
			parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
		} else {
			parent.find('input[name=' + fieldName + ']').val(0);
		}
	}

	function decrementValue(e) {
		e.preventDefault();
		var fieldName = $(e.target).data('field');
		var parent = $(e.target).closest('div');
		var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

		if (!isNaN(currentVal) && currentVal > 0) {
			parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
		} else {
			parent.find('input[name=' + fieldName + ']').val(0);
		}
	}

	$('.counter').on('click', '.counter__minus', function(e) {
		decrementValue(e);
	});

	$('.counter').on('click', '.counter__plus', function(e) {
		incrementValue(e);
	});
	// Счетчик. КОНЕЦ.

	var regex = /^(.+?)(\d+)$/i;
	var cloneIndex = $(".booking__row_children").length + 1;

	function clone() {
		$(this).siblings(".booking__row_children:last").clone(true)
			.insertBefore(".booking__duplicate")
			.hide()
			.fadeIn('fast')
			.find("*")
			.each(function() {
				var id = this.id || "";
				var match = id.match(regex) || [];
				if (match.length == 3) {
					this.id = match[1] + (cloneIndex);
				}
			})
			.on('click', '.booking__duplicate', clone)
		cloneIndex++;
	}

	$(".booking__duplicate").on("click", clone);

	$('.phone-mask').mask('+0 000 000 00 00');

	// Super map

	var superMap = $('.super-map__img');

	$(window).on('load', function() {
		$('.balloon').each(function() {
			var width = $(this).outerWidth();
			var height = $(this).outerHeight();
			var parent = $(this).closest('.element-super-map');
			var top = parent.position().top;
			var left = parent.position().left;
			
			var overflowY = top < height;
			var overflowX = ((superMap.outerWidth() - left) - (width / 2)) < width;

			if(overflowY) {
				$(this).css({bottom: 'auto', top: '100%'});
			}
	
			if(overflowX) {
				$(this).css({left: 'auto', right: '50%', transform: 'none'});
			}
		});
	});

	$('.element-super-map').on('click', function() {
		$(this).toggleClass('active');
	});

	$('.element-super-map').hover(function() {
		return;
	}, function() {
		$(this).removeClass('active');
	});

});