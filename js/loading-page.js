$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);

});
var randomColor = Math.floor(Math.random()*16777215).toString(16);
