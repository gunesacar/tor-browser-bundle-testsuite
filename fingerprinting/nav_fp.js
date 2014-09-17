(function () {
    "use strict";
    // TODO: make sure we test all navigator properties
    var tests = {};
    tests["navigator.mozId"] = function () {
        return navigator.mozId;
    };
    tests["navigator.userAgent"] = function () {
        return navigator.userAgent;
    };
    tests["navigator.mozPay"] = function () {
        return navigator.mozPay;
    };
    tests["navigator.mozAlarms"] = function () {
        return navigator.mozAlarms;
    };
    tests["navigator.mozContacts"] = function () {
        return navigator.mozContacts;
    };
    tests["navigator.javaEnabled"] = function () {
        return navigator.javaEnabled();
    };
    tests["navigator.mozApps"] = function () {
        return navigator.mozApps;
    };
    tests["navigator.mozTCPSocket"] = function () {
        return navigator.mozTCPSocket;
    };
    tests["navigator.javaEnabled"] = function () {
        return navigator.javaEnabled();
    };
    tests["navigator.mozIsLocallyAvailable"] =
        "mozIsLocallyAvailable" in navigator;
    tests["navigator.getGamepads"] =
        "getGamepads" in navigator;
    tests["navigator.vibrate"] =
        "vibrate" in navigator;
    tests["navigator.oscpu"] = function () {
        return navigator.oscpu;
    };
    tests["navigator.vendor"] = function () {
        return navigator.vendor;
    };
    tests["navigator.vendorSub"] = function () {
        return navigator.vendorSub;
    };
    tests["navigator.cookieEnabled"] = function () {
        return navigator.cookieEnabled;
    };
    tests["navigator.plugins.length"] = function () {
        return navigator.plugins.length;
    };
    tests["navigator.mimeTypes.length"] = function () {
        return navigator.mimeTypes.length;
    };
    
    test_runner.addTest(tests); // add all the tests at once
}());
