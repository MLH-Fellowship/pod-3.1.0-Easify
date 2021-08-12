Notification.requestPermission().then(function (result) {
    console.log(result);
});
var img = './assets/imgs/logo.png'
var title = 'Ping Pong'
var text = 'HEY! Your task "' + title + '" is now overdue.';
var notification = new Notification('To do list', { body: text, icon: img });
notification.onclick = function (event) {
    event.preventDefault(); // prevent the browser from focusing the Notification's tab
    window.open('http://www.mozilla.org', '_blank');
}