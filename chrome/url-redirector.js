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
	// always redirects to landing page for now until we make sure the redirection works
	var redirectUrl = "https://www.poewiki.net/wiki/Path_of_Exile_Wiki";
	chrome.tabs.update(details.tabId, {url: redirectUrl});
    }
}, {url: [{urlMatches : 'pathofexile.fandom.com'}]);
