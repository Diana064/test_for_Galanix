let count = document.querySelectorAll('.img-block');

document.getElementById('count').innerHTML = count.length;
function zero_first_format(value) {
	if (value < 10) {
		value = '0' + value;
	}
	return value;
}

/* функция получения текущей даты и времени */
function date_time() {
	var current_datetime = new Date();
	var day = zero_first_format(current_datetime.getDate());
	var month = zero_first_format(current_datetime.getMonth() + 1);
	var year = current_datetime.getFullYear();
	var hours = zero_first_format(current_datetime.getHours());
	var minutes = zero_first_format(current_datetime.getMinutes());
	var seconds = zero_first_format(current_datetime.getSeconds());

	return (
		day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds
	);
}
document.getElementById('time').innerHTML = date_time();
const main = document.getElementById('lighthouse-bg');
const images = document.querySelector('.images');
const tiles = document.querySelectorAll('.images img');
tiles.forEach(function (a, i) {
	tiles[i].onclick = function () {
		if (!main.classList.contains('lighthouse')) {
			main.style.visibility = 'visible';
			main.appendChild(this);
			main.classList.add('lighthouse');
		} else {
			main.removeChild(this);
			main.classList.remove('lighthouse');
			// gallery.appendChild(this)
			// console.log(gallery_child[])
			// console.log(gallery.childNodes[i])
			images.insertBefore(this, images.children[i]);
		}
	};
});
