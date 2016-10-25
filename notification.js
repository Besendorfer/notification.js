/*
 * Make a "Notification" library, to make it easier to access.
 */

(function () {
    var Notifier = function () {};

	Notifier.prototype.icon = undefined;

    Notifier.prototype.sendNotification = function (title, body, icon) {
        if (!('Notification' in window)) {
            console.warn('This browser does not support desktop notifications.');
        }
        else if (Notification.permission === 'granted') {
            new Notification(title, { body: body, icon: icon !== undefined ? icon : this.icon });
        }
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                if (permission === 'granted') {
                    new Notification(title, { body: body, icon: icon !== undefined ? icon : this.icon });
                }
            });
        }
    };

	Notifier.prototype.setIcon = function (location) {
		// TODO: test to see if location exists, and alert if not.
		this.icon = location;
	};

    Notification.requestPermission();

	window.Notifier = new Notifier();
})();