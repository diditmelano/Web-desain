/*===============================================================================================================   
Company     : PT Web Architect Technology - webarq.com 
Author      : Andri Samsuri
Built       : June 2016
=============================================================================================================== */

$(document).ready(function() {
    
    menuMobile();           // run menu mobile
    hoverMenusub();         // run hover menu sub
    hoverairport();         // run airports search
    sliderHome();           // run slider home
    slideNews();            // run slide lates news    
    slideTips();            // run slide Tips
    scrolltoTop();          // run scroll back to top
    hoverDropSub();         // run hoverDropSub breadcrumb
    gdSlide();              // run gdSlide
    promoSlide();           // run slide promo
    Scrolltab();            // scroll tab
    search();               // run search header
    src_mob();              // run search header mobile
    popupPromo();
    popupPromo2();
    heightChoose();
    
    $('.tbook').tabs();
    $('.tjoernay').tabs();
    //$('.tGuide').tabs();    
    $('.tabInfo').tabs();
    
    $('.accGuide_1').Accordion();   
    $('.acc_level_1').Accordion();
    $('.acc_level_2').Accordion();
    $('.acc_level_3').Accordion();
    
    $(".filter select,.filter-promo select,.box-form select, .headTop select ").styledSelect();
    
		
});
