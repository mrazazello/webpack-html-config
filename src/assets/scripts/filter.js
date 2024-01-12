$(document).ready(function () {

	$('form[name="filter"] input').on('change', function () {
		let filterData = $('form[name="filter"]').serializeArray();
		let paramsDuration = "";
		let paramsSeason = "";
		let paramsType = "";
		let paramsCategory = "";
		let paramsPlacing = "";
		let paramsAll = "";
		filterData.forEach(function(item, i, arr) {

			if (item.name === "duration") {
				paramsDuration = paramsDuration + "," + item.value;
			}

			if (item.name === "season") {
				paramsSeason = paramsSeason + "," + item.value;
			}

			if (item.name === "type") {
				paramsType = paramsType + "," + item.value;
			}
			
			if (item.name === "category") {
				paramsCategory = paramsCategory + "," + item.value;
			}
			
			if (item.name === "placing") {
				paramsPlacing = paramsPlacing + "," + item.value;
			}

		});

		if (paramsDuration.length > 0) {
			paramsDuration = "&duration=" + paramsDuration.slice(1);
		}

		if (paramsSeason.length > 0) {
			paramsSeason = "&season=" + paramsSeason.slice(1);
		}

		if (paramsType.length > 0) {
			paramsType = "&type=" + paramsType.slice(1);
		}

		if (paramsCategory.length > 0) {
			paramsCategory = "&category=" + paramsCategory.slice(1);
		}

		if (paramsPlacing.length > 0) {
			paramsPlacing = "&placing=" + paramsPlacing.slice(1);
		}

		paramsAll = paramsDuration + paramsSeason + paramsType + paramsCategory + paramsPlacing;

		let newUrl = window.location.origin + window.location.pathname;
		if (paramsAll !== "") {
			paramsAll = paramsAll.slice(1);
			newUrl = newUrl + "?" + paramsAll;
		}
		setTimeout(function(){document.location.href = newUrl}, 500);
	});

});