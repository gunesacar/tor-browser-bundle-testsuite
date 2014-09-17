
(function () {
    "use strict";
    var tests = {};
    tests["timezone"] = function () {
        var date = new Date();
        return (date.getHours() - date.getUTCHours() + 24) % 24;
    };
    tests["toLocaleFormat_H"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleFormat("%H");
    };    
    
    test_runner.addTest(tests); // add all the tests at once
}());
