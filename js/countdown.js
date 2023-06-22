function updateTimer() {
    future = Date.parse("sept 20, 2023 09:00:00");
    now = new Date();
    diff = future - now;

    months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
    hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    mins = Math.floor((diff / (1000 * 60)) % 60);
    secs = Math.floor((diff / 1000) % 60);

    months=months.toString().padStart(2,'0');
    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    mins = mins.toString().padStart(2, '0');
    secs = secs.toString().padStart(2, '0');

    document.getElementById("timer")
        .innerHTML =
        '<div>' + months + '<span>months</span></div>' +
        '<div>' + days + '<span>days</span></div>' +
        '<div>' + hours + '<span>hours</span></div>' +
        '<div>' + mins + '<span>minutes</span></div>' +
        '<div>' + secs + '<span>seconds</span></div>';


        document.getElementById("timer-w")
        .innerHTML =
        '<div>' + months + '<span>months</span></div>' +
        '<div>' + days + '<span>days</span></div>' +
        '<div>' + hours + '<span>hours</span></div>' +
        '<div>' + mins + '<span>minutes</span></div>' +
        '<div>' + secs + '<span>seconds</span></div>';
}

setInterval(updateTimer, 1000);
