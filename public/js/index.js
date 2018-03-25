var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);

    var li = jQuery('<li></li>');
    li.text(`${message.fro}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        fro: 'User',
        text: jQuery('[name=message]').val()
    }, function () {
        console.log('Got it!');
    });
});

