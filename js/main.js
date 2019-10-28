M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, { edge: 'right' });
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.slider');
	var instances = M.Slider.init(elems, options);
});

// EmailJS

var template_params = {
	reply_to: 'reply_to_value',
	from_name: 'from_name_value',
	to_name: 'to_name_value',
	message_html: 'message_html_value',
};

var service_id = 'default_service';
var template_id = 'contact_form';
emailjs.send(service_id, template_id, template_params);
