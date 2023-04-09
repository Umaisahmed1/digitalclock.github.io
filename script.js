function updateTime() {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	var ampm = hour >= 12 ? 'PM' : 'AM';

	hour = hour % 12;
	hour = hour ? hour : 12;
	hour = hour < 10 ? '0' + hour : hour;
	minute = minute < 10 ? '0' + minute : minute;
	second = second < 10 ? '0' + second : second;

	document.querySelector('.hour').textContent = hour;
	document.querySelector('.minute').textContent = minute;
	document.querySelector('.second').textContent = second;
	document.querySelector('.ampm').textContent = ampm;
}

updateTime();
setInterval(updateTime, 1000);
