function sayHello() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Changed by bgutsol %c 🖕🏼 \n\n', 'color: #fff; background: #beccf5; padding:5px 0;', 'background: #fff; font-size: 18px;'];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Changed by bgutsol');
    }
}
module.exports = sayHello;