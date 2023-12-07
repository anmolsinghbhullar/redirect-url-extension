/**
   File: url-redirector.js,
   
   Description: Redirects any pathofexile.fandom.com links to poewiki.net. In my opinion, the
   former has outdated information, and the latter wiki is more frequently updated as well as
   being hosted by the publisher/developers of path of exile (Grinding Gear Games). This is
   a service worker which means it has its own environment in the browser that it runs in,
   independent of any tab or window. Thus, it should work even if you open the aforementioned
   link in a new tab or window.
*/

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url.includes("pathofexile.fandom.com")) {
	// debugging
	console.log('onBeforeNavigate ', details.tabId, details.url);
	var baseRedirectUrl = "https://www.poewiki.net";

	// get the path to the specific page they're going to
	var path = details.url.split("pathofexile.fandom.com")[1];

	// now construct full url we're redirecting to
	var redirectUrl = baseRedirectUrl + path;

	// redirect
	chrome.tabs.update(details.tabId, {url: redirectUrl});
    }
}, {url: [{urlMatches : 'pathofexile.fandom.com'}]});
