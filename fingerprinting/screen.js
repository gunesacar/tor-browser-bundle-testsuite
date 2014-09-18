(function () {
    "use strict";
    var add_test = test_runner.addTest;
    add_test("screen.availLeft", screen.availLeft);
    add_test("screen.availTop", screen.availTop);
    add_test("screen.availHeight", screen.availHeight);
    add_test("screen.availWidth", screen.availWidth);

    add_test("screen.left", screen.left);
    add_test("screen.top", screen.top);
    add_test("screen.height", screen.height);
    add_test("screen.width", screen.width);

    add_test("screen.colorDepth", screen.colorDepth);
    add_test("screen.pixelDepth", screen.pixelDepth);

    add_test("screen.mozOrientation", screen.mozOrientation);
    add_test("screen.has_mozLockOrientation", "mozLockOrientation" in screen);
    add_test("screen.has_mozUnlockOrientation", "mozUnlockOrientation" in screen);
    add_test("screen.has_onmozorientationchange", "onmozorientationchange" in screen);

    add_test("window.screenX", window.screenX);
    add_test("window.screenY", window.screenY);
    add_test("window.screenTop", window.screenTop);
    add_test("window.screenLeft", window.screenLeft);

    add_test("window.outerWidth", window.outerWidth);
    add_test("window.outerHeight", window.outerHeight);
    add_test("window.innerWidth", window.innerWidth);
    add_test("window.innerHeight", window.innerHeight);

    add_test("window.pageXOffset", window.pageXOffset);
    add_test("window.pageYOffset", window.pageYOffset);

    add_test("window.mozInnerScreenX", window.mozInnerScreenX);
    add_test("window.mozInnerScreenY", window.mozInnerScreenY);
    add_test("window.devicePixelRatio", window.devicePixelRatio);

    add_test("document.documentElement.clientWidth",
            ('documentElement' in document && document.documentElement.clientWidth));
    add_test("document.documentElement.clientHeight",
            ('documentElement' in document && document.documentElement.clientHeight));

}());
