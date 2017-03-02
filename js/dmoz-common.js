
var windowSize  = '';
var windowWidth = 0;
var actualSize  = 0;


// After the document has fully loaded (elements have been defined)
// define what happens when elements are clicked or hovered over

$(document).ready(function() {

  // ----------------------------------------------------------

  $('#mobile-menu').on('click', function () {
      
    if ( $("nav").css('display') == 'none' ) { hideSocial(); showMobile(); }
    else                                     { hideMobile(); }
  });

  // ----------------------------------------------------------

  $('#social-menu').on('click', function () {

    if ( $('#main-social').css('display') == 'none' ) { hideMobile(); showSocial(); }
    else                                              { hideSocial(); }
  });

  // ----------------------------------------------------------
  // When hovering over the Category Description icon,
  // reveal the category description block.

  $('.desc-link').hover(
    function () {
      $('#description-block').show();
    }
  );

  // ----------------------------------------------------------
  // When clicking Category Description close icon,
  // hide the category description block.

  $('#description-close').click(
    function () {
      $('#description-block').hide();
    }
  );

  // ----------------------------------------------------------
  // When hovering over a site listing, reveal its flag icon
  // and underline the title to identify it as a link

  $('.site-item').hover(
     function () {
       $(this).children( "div.site-flag" ).show();
       $(this).children( "div.title-and-desc" ).children("a").children("div.site-title").css({ 'text-decoration':'underline' });
     },
     function () {
       $(this).children( "div.site-flag" ).hide();
       $(this).children( "div.title-and-desc" ).children("a").children("div.site-title").css({ 'text-decoration':'none' });
     }
  );

  $('i.search-submit-button').on('click', function() {
    document.forms["search-form"].submit();
  });

  // ----------------------------------------------------------
  // Start with the advanced search options hidden.
  // Then, when clicking plus/minus next to the basic search,
  // show/hide the advanced search options

  $('.advanced-search-option').hide();

  $('#more-search-options').click(
    function () {

       if ( $('#advanced-search-icon').hasClass('fa-plus') ) {
         $('#advanced-search-icon').removeClass('fa-plus');
         $('#advanced-search-icon').addClass('fa-minus');
         $('.advanced-search-option').show();
       }
       else {
         $('#advanced-search-icon').removeClass('fa-minus');
         $('#advanced-search-icon').addClass('fa-plus');
         $('.advanced-search-option').hide();
       }
    }
  );

  // ----------------------------------------------------------
  // When clicking a header, expand/collapse its content
  // and switch the folder icon to open/closed

  $(".alt-lang-header").children( "i.arrow" ).addClass("fa-rotate-270");

  $('.node-header').click(
     function () {

       var myID      = this.id,
           contentID = myID.replace('header', 'content');

       // Need a better way to identify the other subcats
       // But for now, use what we know (main, 2, 3)

       var section2 = contentID.replace('content-main', 'section-2');
       var section3 = contentID.replace('content-main', 'section-3');

       // show the content
       if ( $(this).children( "i.section-open" ).css('display') == 'none' ) {

         $('#' + contentID).show();
         if (section2 != contentID) { $('#' + section2).show(); }
         if (section3 != contentID) { $('#' + section3).show(); }
         $(this).children( "i.section-closed" ).hide();
         $(this).children( "i.section-open"   ).show();

         // un-rotate (arrow down becomes arrow up)
         $(this).children( "i.arrow" ).removeClass("fa-rotate-270");
       }
       else {
         // hide the content
         $('#' + contentID).hide();
         if (section2 != contentID) { $('#' + section2).hide(); }
         if (section3 != contentID) { $('#' + section3).hide(); }
         $(this).children( "i.section-open"   ).hide();
         $(this).children( "i.section-closed" ).show();

         // rotate 270 degrees (down arrow becomes right arrow)
         $(this).children( "i.arrow" ).addClass("fa-rotate-270");
       }
     }
  );

  // If the user is a logged in editor, then show node counts
  if ( $('#main-content').hasClass('loggedIn') ) {
    $("div.node-count").css('display','inline-block');
  }

  // The HTML for alternate search engines is stored in a database
  // with separate content for each language.  To get each link
  // to open in a new window, set the href target here.

  $("div.alt-sites > a").attr( 'target', '_blank' );

  checkBrowserSize();
  setInterval('checkBrowserSize()', 500);
});


function checkBrowserSize() {

  windowWidth      = window.outerWidth;
  var contentWidth = $('body').width();
  var sizeDiff     = windowWidth - contentWidth;
  actualSize       = windowWidth - sizeDiff;

  if (actualSize > 725) { newWindowSize = 'non-mobile'; }
  else                  { newWindowSize = 'mobile'; }

  if (windowSize != newWindowSize) {
    windowSize = newWindowSize;

    if (windowSize == 'non-mobile') { doNonMobile(); }
    else                            { doMobile(); }
  }
}


function loadcssfile(filename) {

    var fileref = document.createElement("link")

    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);

    if (typeof fileref != "undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
}


function doNonMobile() {

  // Show the full navigation menu
  $("nav").css('display','inherit');
  $('#mobile-menu-icon').css({ 'display':'none' });
  $('#social-menu-icon').css({ 'display':'none' });
  $('#mobile-menu-icon').removeClass("fa-times");
  $('#social-menu-icon').removeClass("fa-times");
  $("#main-social").css('display','none');

  // Remove the mobile class from the category divs
  $('#category-section').children( "aside" ).children( "div.category" ).removeClass("mobile");
}

function doMobile() {

  // Hide the full navigation menu
  $("nav").css('display','none');
  $('#mobile-menu-icon').css({ 'display':'inherit' });
  $('#social-menu-icon').css({ 'display':'inherit' });
  $('#mobile-menu-icon').addClass("fa-bars");
  $('#social-menu-icon').addClass("fa-share-alt");
  $("#main-social").css('display','none');

  // Add the mobile class to the category divs
  $('#category-section').children( "aside" ).children( "div.category" ).addClass("mobile");
}

function hideMobile() {

  var menu_element = document.getElementById('mobile-menu');

  $('#main-nav').css({ 'display':'none' });
  $('#mobile-menu-icon').removeClass("fa-times");
  $('#mobile-menu-icon').addClass("fa-bars");
  menu_element.classList.remove('expanded');
}

function showMobile() {

  var menu_element = document.getElementById('mobile-menu');

  $('#main-nav').css({ 'display':'block' });
  $('#mobile-menu-icon').removeClass("fa-bars");
  $('#mobile-menu-icon').addClass("fa-times");
  menu_element.classList.add('expanded');
}

function hideSocial() {

  var social_element = document.getElementById('social-menu');

  $('#main-social').css({ 'display':'none' });
  $('#social-menu-icon').removeClass("fa-times");
  $('#social-menu-icon').addClass("fa-share-alt");
  social_element.classList.remove('expanded');
}

function showSocial() {

  var social_element = document.getElementById('social-menu');

  $('#main-social').css({ 'display':'block' });
  $('#social-menu-icon').removeClass("fa-share-alt");
  $('#social-menu-icon').addClass("fa-times");
  social_element.classList.add('expanded');
}

