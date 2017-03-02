
// to     = Social media destination (facebook, twitter, ...)
// from   = DMOZ page (home, nodeviewer, ...)
// data   = Data pertinent to the type of message

function share(to, from, data) {

  var sourceUrl = window.location.href.toString();
  var title     = document.title;

  var url = sourceUrl.replace(/dev.dmoz|qa.dmoz/g, 'dmoz');

  if (from == 'desc') url = url.replace('/desc/', '/');
  if (from == 'faq')  url = url.replace('/faq/',  '/');

  url = escape(url);

  if (to === 'facebook') {

    var facebookUrl = "http://www.facebook.com/sharer/sharer.php?u=" + url;
    window.open(facebookUrl, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=600, height=400");
  }
  else if (to === 'twitter' ) {

//    var message = escape(data + " @DMOZ -");
    var message = escape("#OrganizeTheWeb @DMOZ -");
    var twitterUrl = "http://twitter.com/intent/tweet?url=" + url + "&text=" + message;
    window.open(twitterUrl, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=600, height=400");
  }
  else if (to === 'linkedin' ) {

    var linkedinUrl = "http://www.linkedin.com/shareArticle?mini=true&title=DMOZ&source=aol&url=" + url;
    window.open(linkedinUrl, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=600, height=400");
  }
  else if (to === 'mail' ) {

    window.location.href = "mailto:username@example.com?subject=" +title+ "&body=Check out " + url;
  }
}


$(document).ready(function() {

  // ---------- FACEBOOK FOLLOW ----------

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

});
