(function () {
    "use strict";
    var add_test = test_runner.addTest;
    add_test("navigator.has_mozId", "mozId" in navigator);
    add_test("navigator.mozId", navigator.mozId);
    add_test("navigator.userAgent", navigator.userAgent);
    add_test("navigator.has_mozPay", "mozPay" in navigator);
    add_test("navigator.has_mozAlarms", "mozAlarms" in navigator);
    add_test("navigator.has_mozContacts", "mozContacts" in navigator);
    add_test("navigator.has_mozApps", "mozApps" in navigator);
    add_test("navigator.has_mozTCPSocket", function () {
        return "mozTCPSocket" in navigator;
    });
    add_test("navigator.has_mozCameras", "mozCameras" in navigator);
    add_test("navigator.mozCameras.has_getListOfCameras", function () {
        return !!navigator.mozCameras && ("getListOfCameras" in navigator.mozCameras);
    });
    add_test("navigator.mozCameras.getListOfCameras", function () {
        return !!navigator.mozCameras && navigator.mozCameras.getListOfCameras();
    });
    add_test("navigator.mozCameras.has_getCamera", function () {
        return !!navigator.mozCameras && ("getCamera" in navigator.mozCameras);
    });
    add_test("navigator.javaEnabled", navigator.javaEnabled());
    add_test("navigator.has_mozIsLocallyAvailable", "mozIsLocallyAvailable" in navigator);
    add_test("navigator.has_mozGetUserMedia", "mozGetUserMedia" in navigator);
    add_test("navigator.has_sendBeacon", "sendBeacon" in navigator);
    add_test("navigator.has_getGamepads", "getGamepads" in navigator);
    add_test("navigator.getGamepads", function () {
        return !!navigator.getGamepads && navigator.getGamepads();
    });
    add_test("navigator.has_registerProtocolHandler", "registerProtocolHandler" in navigator);
    add_test("navigator.has_registerContentHandler", "registerContentHandler" in navigator);
    add_test("navigator.taintEnabled", ("taintEnabled" in navigator && navigator.taintEnabled()));
    add_test("navigator.doNotTrack", navigator.doNotTrack);
    add_test("navigator.productSub", navigator.productSub);
    add_test("navigator.buildID", navigator.buildID);
    add_test("navigator.has_battery", "battery" in navigator);
    add_test("navigator.has_geolocation", "geolocation" in navigator);
    add_test("navigator.geolocation.has_getCurrentPosition",
            !!navigator.geolocation &&
            ("getCurrentPosition" in navigator.geolocation));
    add_test("navigator.geolocation.has_watchPosition",
            !!navigator.geolocation &&
            ("watchPosition" in navigator.geolocation));
    add_test("navigator.geolocation.has_clearWatch",
            !!navigator.geolocation &&
            ("clearWatch" in navigator.geolocation));
    add_test("navigator.appCodeName", navigator.appCodeName);
    add_test("navigator.appName", navigator.appName);
    add_test("navigator.appVersion", navigator.appVersion);
    add_test("navigator.platform", navigator.platform);
    add_test("navigator.product", navigator.product);
    add_test("navigator.language", navigator.language);
    add_test("navigator.languages", ("languages" in navigator) && navigator.languages);
    add_test("navigator.onLine", navigator.onLine);
    add_test("navigator.vibrate", "vibrate" in navigator);
    add_test("navigator.oscpu", navigator.oscpu);
    add_test("navigator.vendor", navigator.vendor);
    add_test("navigator.vendorSub", navigator.vendorSub);
    add_test("navigator.cookieEnabled", navigator.cookieEnabled);
    add_test("navigator.plugins.length", navigator.plugins.length);
    add_test("navigator.mimeTypes.length", navigator.mimeTypes.length);
    // TODO: grab plugins and mimetypes
}());
