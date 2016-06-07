// Show and Hide Navigation Menu

var showHideMenu = function() {

    var menuButton = document.getElementById("menu-button");
    var navMenu = document.getElementById("nav-menu");
    var menuIsDisplayed = false;

    menuButton.onclick = function() {

        if(menuIsDisplayed) {

            navMenu.style.display = "none";
            menuIsDisplayed = false;

        } else {

            navMenu.style.display = "block";
            menuIsDisplayed = true;

        }
    };

    navMenu.onclick = function() {

        navMenu.style.display = "none";
        menuIsDisplayed = false;

    };

};

showHideMenu();


//  Highlight .selected #nav-menu link


$(document).ready(function() {
    $('#nav-menu li a').click(function() {
        $('li a').removeClass("selected");
        $(this).addClass("selected");
    });
});


