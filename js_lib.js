/*===============================================================================================================   
Company     : PT Web Architect Technology - webarq.com 
Author      : Andri Samsuri
Built       : June 2016
=============================================================================================================== */


/* element onscreen detect
 =============================================================================================================== */
$.fn.isOnScreen = function () {
    if (this.length) {
        var viewport = {};
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + $(window).height();
        var bounds = {};
        bounds.top = this.offset().top;
        bounds.bottom = bounds.top + this.outerHeight();
        return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
    } else
        return false;
};


 /* function for scroll content
 =============================================================================================================== */

$.fn.scrollAnim = function () {
    var actAnimfunction = function (elem, elem_position, delay) {
        if (elem_position === "top") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'top': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "bottom") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'bottom': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "left") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'left': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "right") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'right': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_bottom") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'bottom': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_right") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'right': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_left") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'left': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "absolute_top") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'top': '0px'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else if (elem_position === "fade") {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'scale': '1'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        } else {
            TweenLite.to(elem, 0.5, {
                css: {
                    'opacity': '1',
                    'scale': '1'
                },
                delay: delay,
                ease: Quart.easeOut
            });
        }
    };
    var elem = this;
    $(window).scroll(function () {
        elem.each(function () {
            var elem_ = $(this);
            if (elem_.isOnScreen()) {
                var delay = parseFloat(elem_.attr('anim-delay'));
                //console.log(delay);
                actAnimfunction(elem_, elem_.attr('type-anim'), delay);
            }

        });
    });
};


/* function for homeslider
=============================================================================================================== */
function sliderHome() {
    var slider = $('.slide_home').bxSlider({
        mode: 'fade',
        speed: 1500,
        pause: 7000,
        auto: true,
        onSliderLoad: function (currentSlide) {
            animCaption("in");
        },
        onSlideBefore: function (currentSlide) {
            animCaption("out");
        },
        onSlideAfter: function (currentSlide) {
            animCaption("in");
        }
    });
    $('.bx-pager-item a').click(function(e){
        var i = $(this).index();
            slider.goToSlide(i);
            slider.stopAuto();
            restart=setTimeout(function(){
            slider.startAuto();
        },500);
        return true;
    });
};

function animCaption(type) {
    if (type === "in") {
        TweenLite.to($('.slide_home .caption h1'), 1.2, {
            css: {
                'opacity': '1',
                'top': '0'
            },
            delay: 0,
            ease: Quart.easeOut
        });
        TweenLite.to($('.slide_home .caption h5'), 1.2, {
            css: {
                'opacity': '1',
                'top': '0'
            },
            delay: 0,
            ease: Quart.easeOut
        });
        TweenLite.to($('.slide_home .viewMore'), 1.2, {
            css: {
                'opacity': '1',
                'top': '0'
            },
            delay: 0.7,
            ease: Quart.easeOut
        });
    } else {
        TweenLite.to($('.slide_home .caption h1'), 1.2, {
            css: {
                'opacity': '0',
                'top': '-150px'
            },
            delay: 0,
            ease: Quart.easeInOut
        });
        TweenLite.to($('.slide_home .caption h5'), 1.2, {
            css: {
                'opacity': '0',
                'top': '150px'
            },
            delay: 0,
            ease: Quart.easeOut
        });
        TweenLite.to($('.slide_home .viewMore'), 1.2, {
            css: {
                'opacity': '0',
                'top': '0'
            },
            delay: 0,
            ease: Quart.easeOut
        });
    }
};

/* function for select
=============================================================================================================== */

$.fn.styledSelect = function (options) {
    var isFF2 = false;
    var prefs = {
        coverClass: 'cover_combo',
        innerClass: 'inner_combo',
        adjustPosition: {
            top: 0,
            left: 0
        },
        selectOpacity: 0
    }
    if (options)
        $.extend(prefs, options);
    return this.each(function () {
        if (isFF2)
            return false;
        var selElm = $(this);
        if (!selElm.next('span.' + prefs.innerClass).length) {
            selElm.wrap('<span><' + '/span>');
            selElm.after('<span><' + '/span>');
            var selReplace = selElm.next();
            var selCover = selElm.parent();
            selElm.css({
                'opacity': prefs.selectOpacity,
                'visibility': 'visible',
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'display': 'inline',
                'z-index': 1
            });
            selCover.addClass(prefs.coverClass).css({
                'display': 'inline-block',
                'position': 'relative',
                'top': prefs.adjustPosition.top,
                'left': prefs.adjustPosition.left,
                'z-index': 0,
                'vertical-align': 'middle',
                'text-align': 'left'
            });
            selReplace.addClass(prefs.innerClass).css({
                'display': 'block',
                'white-space': 'nowrap'
            });
            if (selElm.attr("disabled"))
                selCover.addClass('disabled');

            console.log('selElm.attr("disabled")')

            selElm.bind('read', function () {
                $(this).next().text(this.options[this.selectedIndex].text);
            }).bind('resize', function () {
                $(this).parent().width($(this).width() + 'px');
            }).bind('change', function() {
                $(this).trigger('read');
            });
            selElm.trigger('read').trigger('resize');
        } else {
            var selElm = $(this);
            var selReplace = selElm.next();
            var selCover = selElm.parent();
            selElm.css({
                'opacity': prefs.selectOpacity,
                'visibility': 'visible',
                'position': 'absolute',
                'top': 0,
                'left': 0,
                'display': 'inline',
                'z-index': 1
            });
            selCover.css({
                'display': 'inline-block',
                'position': 'relative',
                'top': prefs.adjustPosition.top,
                'left': prefs.adjustPosition.left,
                'z-index': 0,
                'vertical-align': 'middle',
                'text-align': 'left'
            });
            selReplace.css({
                'display': 'block',
                'white-space': 'nowrap'
            });

        }
    });
};


/* function for tabs content
 =============================================================================================================== */
$.fn.tabs = function () {
    var elem = this;    
    elem.find('.dec_list').hide();
    elem.find('ul.list_tab li:first').addClass('active').show();
    elem.find('.dec_list:first').show();
    elem.find(".list_tab li").on('click', function (e) {
        e.preventDefault();
        elem.find("li").removeClass('active');
        $(this).addClass("active");
        elem.find(".dec_list").stop().slideUp(400);
        var activeTab = $(this).find("a").attr("href");
        elem.find(activeTab).stop().slideDown(400);
    });    
};


/* function for news slide
=============================================================================================================== */
function slideNews() {
    var slide = $('.slideNews').bxSlider({
        mode: 'vertical',
        speed: 1500,
        pause: 5000,
        auto: true        
    });
};

/* function for news slide
=============================================================================================================== */
function slideTips() {
    var slide = $('.bslideTips').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 5000,
        auto: true        
    });
};

/* function for gd slide promo
=============================================================================================================== */
function promoSlide() {
    var slide = $('.slide_promo').bxSlider({
        responsive:true,
        mode: 'horizontal',
        slideWidth: 575,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        infiniteLoop: false,
        auto: false,
        pager: false,
    });
};


/* function for gd slide step
=============================================================================================================== */
function gdSlide() {
    var slide = $('.iSlide_1').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 5000,
        auto: false,
        pagerCustom: '.year1'
    });
    var slide = $('.iSlide_2').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 5000,
        auto: false,
        pagerCustom: '.year2'
    });
    var slide = $('.iSlide_3').bxSlider({
        mode: 'horizontal',
        speed: 1000,
        pause: 5000,
        auto: false,
        pagerCustom: '.year3'
    });
};


/* function for menu Mobile
=============================================================================================================== */
function menuMobile() {

    $("header .toggle_menu").on('click', function (e) {
        e.preventDefault();
        var nav = $(".menu_aside");

        TweenLite.set(nav, 0, {
            right: -nav.outerWidth(),
            ease: Cubic.easeOut
        });

        if (!$(this).hasClass('expand')) {

            TweenLite.to(nav, 0.5, {
                right: 0,
                display:'block',
                ease: Cubic.easeOut
            });
            TweenLite.to($(".toggle_menu span:nth-child(1),.toggle_menu span:nth-child(3)"), 0.3, {
                top: '10px',
                delay: 0.5
            });
            TweenLite.to($(".toggle_menu span:nth-child(2)"), 0.3, {
                opacity: 0,
                delay: 0.5
            });
            TweenLite.to($(".toggle_menu span:nth-child(1)"), 0.3, {
                transform: 'rotate(45deg)',
                delay: 0.8,
                ease: Cubic.easeOut
            });
            TweenLite.to($(".toggle_menu span:nth-child(3)"), 0.3, {
                transform: 'rotate(-45deg)',
                delay: 0.8,
                ease: Cubic.easeOut
            });

            $(this).addClass('expand');
        } else {

            TweenLite.to(nav, 0.5, {
                right: -nav.outerWidth(),
                //display:'none',
                ease: Cubic.easeOut
            });
            TweenLite.to($(".toggle_menu span:nth-child(1)"), 0.3, {
                transform: 'rotate(0)',
                delay: 0.5
            });
            TweenLite.to($(".toggle_menu span:nth-child(3)"), 0.3, {
                transform: 'rotate(0)',
                delay: 0.5
            });
            TweenLite.set($(".toggle_menu span:nth-child(2)"), {
                opacity: 1,
                delay: 0.8
            });
            TweenLite.to($(".toggle_menu span:nth-child(1)"), 0.4, {
                top: '0',
                delay: 0.8,
                ease: Cubic.easeOut
            });
            TweenLite.to($(".toggle_menu span:nth-child(3)"), 0.4, {
                top: '25px',
                delay: 0.8,
                ease: Cubic.easeOut,
                onComplete: function () {
                    nav.removeClass('expand');
                }
            });


            $(this).removeClass('expand');
        }
    });

}
function hoverMenusub() {
    if ($(window).width() >= 1023) {
        var elem = $('.menu_aside ul li');
        elem.hover(function () {
            var showSub = $(this).children('.subs');
            TweenLite.to(showSub, 0.5, {
                css: {
                    'display': 'block',
                    'opacity': '1',
                    'margin-right': '0'
                },
                delay: '0',
                ease: Cubic.easeOut
            })
        }, function () {
            var showSub = $(this).children('.subs');
            TweenLite.to(showSub, 0.3, {
                css: {
                    'display': 'none',
                    'opacity': '0',
                    'margin-right': '0'
                },
                delay: '0',
                ease: Cubic.easeOut
            })
        });
    } else if ($(window).width() >= 768) {
        var schild = $('.menu_aside ul li');        
        schild.on('click', function (e){
            //e.preventDefault();
            var showul = $(this);
            if (showul.hasClass('active')) {
                showul.removeClass('active');
                showul.find('li').removeClass('active');
                showul.find('.subs').fadeOut('normal');
            } else {
                showul.addClass('active');
                showul.children('.subs').fadeIn();
                showul.siblings('li').children('ul').fadeOut();
                showul.siblings('li').removeClass('active');
                showul.siblings('li').find('li').removeClass('active');
                showul.siblings('li').find('.subs').fadeOut('normal');
            }   
        });
       
    } else {
        var schild = $('.menu_aside ul li');        
        schild.on('click', function (e){
            //e.preventDefault();
            var showul = $(this);
            if (showul.hasClass('active')) {
                showul.removeClass('active');
                showul.find('li').removeClass('active');
                showul.find('.subs').slideUp('normal');
            } else {
                showul.addClass('active');
                showul.children('.subs').slideDown();
                showul.siblings('li').children('ul').slideUp();
                showul.siblings('li').removeClass('active');
                showul.siblings('li').find('li').removeClass('active');
                showul.siblings('li').find('.subs').slideUp('normal');
            }   
        });

    }
    
}
;



/* function for airport search
=============================================================================================================== */
function hoverairport() {
    var elem = $('.airport');
    elem.hover(function () {
        var hov = $(this).children('.airport_choose');
        TweenLite.to(hov, 0.5, {
            css: {
                'display': 'block',
                'opacity': '1',
                'margin-top': '0',
                'z-index': '79889'
            },
            delay: '0',
            ease: Cubic.easeOut
        })
    }, function () {
        var hov = $(this).children('.airport_choose');
        TweenLite.to(hov, 0.3, {
            css: {
                'display': 'none',
                'opacity': '0',
                'margin-top': '50px',
                'z-index': '0'
            },
            delay: '0',
            ease: Cubic.easeOut
        })
    });
};


/* function for accordion content
 =============================================================================================================== */
$.fn.Accordion = function () {
    var elem = this,
        hideAcc = elem.find('.accordionContent').hide(),
        firstAcc = elem.find('.headClick:first').addClass('open').next('.accordionContent').show();        
        collapse_act = function (elem) {
            elem.removeClass('open');
            elem.next('.accordionContent').slideUp('slow');              
        }; 
        elem.find('.headClick').on('click', function () {
            var acc_content = $(this).next(".accordionContent"),            
                _elem = $(this);
                
            if (!_elem.hasClass('open')) {
                if (elem.find(".arAcc .headClick.open").length) { // collapse content if found content expand
                    collapse_act(elem.find(".arAcc .headClick.open"));
                }            
                _elem.addClass('open');
                acc_content.slideDown('slow');

            } else {
                collapse_act($(this));
            } 
    });    
};


/* function for scrolltoTop
 =============================================================================================================== */
function scrolltoTop(){    
    $('.scrollToTop a').removeAttr('href');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });        
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
}; 


/* function for hoverDropSub
 =============================================================================================================== */
function hoverDropSub() {
    $(".sub_page h5").click(function () {
        var elem = $(this).parent().find('.drop');
        if (!elem.hasClass('active')) {
            elem.addClass('active');
            TweenLite.set(elem, {display: 'block', opacity: 0, top: 120});
            TweenLite.to(elem, 0.3, {
                top: 70,
                opacity: 1,
                ease: Cubic.easeOut
            });

        } else {
            elem.removeClass('active');
            TweenLite.to(elem, 0.3, {
                top: 100,
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: function () {
                    TweenLite.set(elem, {display: 'block', opacity: 0, top: 120});
                }
            });
        }
    });

    $("body").click(function (e) {

        if ($(".sub_page .drop").is(":visible") && !TweenMax.isTweening($(".sub_page .drop"))) {
            var elem = $(".sub_page .drop");
            TweenLite.to(elem, 0.3, {
                top: 100,
                opacity: 0,
                ease: Cubic.easeOut,
                onComplete: function () {
                    TweenLite.set(elem, {display: 'block', opacity: 0, top: 120});
                }
            });
        }
    });
}

/* function for scroll tab
 =============================================================================================================== */
function Scrolltab() {
    var elem = $('.tab_public a');
    elem.on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                || location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 110
                }, 800);
                return false;
            }
        }
    });
};


/* function for search header
 =============================================================================================================== */
function search(){
    $("header .search").click(function(){
        if(!$(this).find('input[type=text]').is(":visible"))
            $(this).find('input[type=text]').stop().fadeIn(300);
    });
}
function src_mob(){ 
    if ($(window).width() <= 1200) {
        var H_src = $('header .search_mobile'),
            klik_src = $('.search');

        klik_src.on('click', function(){

            TweenLite.to(H_src, 0.8, {
                css : {
                    'top': '0',
                    'display': 'block'
                },
                ease : Quart.easeOut
            });
        });
        $('.ico_close').on('click', function(){

            TweenLite.to(H_src, 0.8, {
                css : {
                    'top': -H_src.outerHeight(),
                },
                ease : Quart.easeOut
            });
        });
    };
}


function closePop(id) {
    $("#" + id).fadeOut(500);
}
function showPop(id) {
    $("#" + id).fadeIn(500);
}

function popupPromo() {
    var
            popup = $("#popup_promo");

    $(".list_promo .dec a , .list_hmCareer .dec a ").click(function (e) {
        e.preventDefault();
        var
                elem = $(this),
                content = elem.parents('.dec').find('.data_pop').html();
        //set data 
        popup.find(".content_pop .txt_promo").html(content);
        // popup.attr('index_data', elem.parent('li').index() + 1);
        showPop("popup_promo");

    });
};

function popupPromo2() {
    var
            popup = $("#popup_promo");

    $(".list_promo .item, .list_hmCareer .box").click(function (e) {
        e.preventDefault();
        var
                elem = $(this),
                content = elem.find('.data_pop').html();
        //set data 
        popup.find(".content_pop .txt_promo").html(content);
        // popup.attr('index_data', elem.parent('li').index() + 1);
        showPop("popup_promo");

    });
};
function heightChoose(){
    var hwindow = $(window).height(),
        hheader = $('header').height(),
        counth3 = $('.airport_choose').css({display: 'block'}),
        counth = 0,
        frmairporn = $('.airport_choose form').height(),
        hmenu = $('.airport_choose .airport_list').height();
    $('.airport_choose').css({display: 'block'});
    console.log(hwindow+" - "+ hheader+" - "+ hmenu);
    if(hwindow < hmenu + hheader + frmairporn + 70){
        counth = hwindow - hheader -frmairporn - 70;
        console.log(counth);
        $('.airport_choose .airport_list').css({'max-height': counth});
    }
}






