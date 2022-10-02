// Show and Hide Navigation Menu

var showHideMenu = function() {
    var menuButton = document.getElementById("menu-button");
    var navMenu = document.getElementById("nav-menu");
    var nav = document.getElementById("nav");
    var header = document.getElementById("header");
    var menuIsDisplayed = false;

    menuButton.onclick = function() {
        if(menuIsDisplayed) {
            navMenu.style.display = "none";
            nav.style.borderTop = "none";
            header.style.paddingBottom = "0";
            menuIsDisplayed = false;
        } else {
            navMenu.style.display = "block";
            nav.style.borderTop = "thin solid #baad99";
            header.style.paddingBottom = "1em";
            menuIsDisplayed = true;
        }
    };

    navMenu.onclick = function() {
        navMenu.style.display = "none";
        nav.style.borderTop = "none";
        header.style.paddingBottom = "0";
        menuIsDisplayed = false;
    };
};

showHideMenu();
