"use strict";

var {expect} = require("../mozilla-mozmill-tests/lib/assertions");
var prefs = require("../mozilla-mozmill-tests/firefox/lib/prefs");
var common = require("../lib/common");

const PREF_ENABLE_HE = "extensions.https_everywhere.globalEnabled";
const HTTP_URL = "http://www.mediawiki.org/wiki/MediaWiki";
const HTTPS_URL = "https://www.mediawiki.org/wiki/MediaWiki";

var setupModule = function(aModule) {
  aModule.controller = mozmill.getBrowserController();
}

var testStartTBB = function() {
    var prefSrv = prefs.preferences;
    expect.equal(prefSrv.getPref(PREF_ENABLE_HE, false), true,
            "https-everywhere is enabled");
    common.load_page(controller, HTTP_URL);
    expect.equal(controller.tabs.activeTab.URL, HTTPS_URL,
            "https-everywhere seems to work");
}
