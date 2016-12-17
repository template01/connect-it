// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);

jQuery.fn.mouseIsOver = function () {
    if($(this[0]).is(":hover"))
    {
        return true;
    }
    return false;
}; 

dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
		buttonJquery = $('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			button.classList.add('openButton');
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			button.classList.remove('openButton');
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};

	buttonJquery.parents('.dropdown').on('mouseleave', function(){

		
		// if(!buttonJquery.mouseIsOver()){
			// console.log(!!$('.dropdown-menu').filter(function() { return $(this).is(":hover"); }).length)
		    setTimeout(function(){ 
		    	if(!!$('.dropdown-menu').filter(function() { return $(this).is(":hover"); }).length == false){
					buttonJquery.removeClass('openButton')
					$('.dropdown-menu').removeClass('show').addClass('hide');
					$('.icon-arrow').removeClass('open').addClass('close');		    		
		    	}


		    }, 350);

			// $(this).removeClass('show').addClass('hide');
			// buttonJquery..removeClass('open');
			// arrow.classList.addClass('close');
		// }

	})

})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

