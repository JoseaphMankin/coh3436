console.log("I'm Connected");
M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.materialboxed');
	var instances = M.Materialbox.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, { edge: 'right' });
});
