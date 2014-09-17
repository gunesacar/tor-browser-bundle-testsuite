(function () {
    "use strict";
    var tests = {};
    tests["screen_saw_wiw"] = function () {
        return screen.availWidth === window.innerWidth;
    };    
    tests["screen_sah_wih"] = function () {
        return screen.availHeight === window.innerHeight;
    };    
    tests["screen_sw_saw"] = function () {
        return screen.width=== screen.availWidth;
    };
    tests["screen_sh_sah"] = function () {
        return screen.height === screen.availHeight;
    };
    tests["screen_wiw_wow"] = function () {
        return window.innerWidth === window.outerWidth;
    };    
    tests["screen_wih_woh"] = function () {
        return window.innerHeight === window.outerHeight;
    };
    tests["screenX"] = screenX;
    tests["screenY"] = screenY;
    tests["mozInnerScreenX"] = mozInnerScreenX;
    tests["mozInnerScreenY"] = mozInnerScreenY;
    tests["screen.left"] = screen.left;
    tests["screen.top"] = screen.top;
    tests["screen.availLeft"] = screen.availLeft;
    tests["screen.availTop"] = screen.availTop;    
    tests["screen.width"] = screen.width;
    tests["screen.height"] = screen.height;
    test_runner.addTest(tests); // add all the tests at once
}());
