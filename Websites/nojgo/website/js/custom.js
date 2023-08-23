/* price range slider start here */
if ($('div.hotel__price').length > 0) {
	var select = document.getElementById('input-select');
	for ( var i = 20; i <= 1000; i++ ){
		var option = document.createElement("option");
			option.text = i;
			option.value = i;
		select.appendChild(option);
	}
	var html5Slider = document.getElementById('html5');
	noUiSlider.create(html5Slider, {
		start: [ 20, 500 ],
		connect: true,
		range: {
			'min':20,
			'max':1000
		}
	});
	var inputNumber = document.getElementById('input-number');
	html5Slider.noUiSlider.on('update', function( values, handle ) {
		var value = values[handle];
		if ( handle ) {
			inputNumber.value = Math.round(value);
		} else {
			select.value = Math.round(value);
		}
	});
	select.addEventListener('change', function(){
		html5Slider.noUiSlider.set([this.value, null]);
	});
	inputNumber.addEventListener('change', function(){
		html5Slider.noUiSlider.set([null, this.value]);
	});
}
/*price range slider end here*/