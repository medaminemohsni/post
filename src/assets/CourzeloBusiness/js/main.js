/*
  Theme Name: Edubin - LMS Education HTML Template
  Author: Humayun Ahmed
  Author URL: https://themeforest.net/user/pixelcurve
  Support: humayunahmed82@gmail.com
  Description: Creative  HTML5 template.
  Version: 1.0
*/


$(function() {
    
    "use strict";
    
  
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 30) {
            $(".navigation").removeClass("sticky");
            $(".navigation-2 img").attr("src", "../assets/CourzeloBusiness/images/logo.png");
        } else{
            $(".navigation").addClass("sticky");
            $(".navigation-2 img").attr("src", "../assets/CourzeloBusiness/images/logo.png");
        }
    });
    
    
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });

    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button> <i class="bi-chevron-compact-down"> </i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
    
    
    
    
    
    
    
});