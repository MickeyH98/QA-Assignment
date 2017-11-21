var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

//check if an element is visible
function imageIsVisible(selector, name){
    webdriverio
        .remote(options)
        .init()
        .url('http://internet.frontier.com')
        //check if element is visible
        .isVisible(selector)
        //print out result
        .then(function(bool){
            console.log(name + " visible: " + bool);
        })
        .end()
        .catch(function(err) {
            console.log(err);
        });
}

console.log("Checking image visibility...");
imageIsVisible(".masthead__logo", "logo");
imageIsVisible(".hero", "hero");
imageIsVisible(".graphic", "graphics");
imageIsVisible(".section--bg", "background banners");
