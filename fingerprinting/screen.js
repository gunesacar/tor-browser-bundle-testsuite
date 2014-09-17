(function () {
    "use strict";
    var tests = {},
                get
    get = function(x){
        return x;
    }
    
    tests["screen.availHeight"] = get(screen.availHeight);
    tests["screen.availLeft"] = get(screen.availLeft);
    tests["screen.availTop"] = get(screen.availTop);    
    tests["screen.availWidth"] = get(screen.availWidth);
    
    tests["screen.height"] = get(screen.height);
    tests["screen.left"] = get(screen.left);    
    tests["screen.top"] = get(screen.top);
    tests["screen.width"] = get(screen.width);
    
    tests["screen.colorDepth"] = get(screen.colorDepth);
    tests["screen.pixelDepth"] = get(screen.pixelDepth);
    
    tests["screen.mozOrientation"] = get(screen.mozOrientation);
    tests["screen.onmozorientationchange"] = !!(onmozorientationchange in screen);
    
    tests["window.screenX"] = get(window.screenX);
    tests["window.screenY"] = get(window.screenY);
    tests["window.mozInnerScreenX"] = get(window.mozInnerScreenX);
    tests["window.mozInnerScreenY"] = get(window.mozInnerScreenY);
    
    
    test_runner.addTest(tests); // add all the tests at once
}());
