const functions = require('firebase-functions');

exports.data = functions.database
	.ref('/some/path/{user}')
    .onWrite(event => {
        var snap = event.data.val();
        snap.title = event.user;
        snap.msg = "This is not the msg";
        event.data.ref.set(snap);
    });

	