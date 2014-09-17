(function () {
    "use strict";
    var localized = {}
    localized["zh_CN.UTF-8"] = "1970年01月01日 星期四 00时00分00秒"
    var tests = {};
    // test OS locale leak via datetime localization
    // https://trac.torproject.org/projects/tor/ticket/5926#comment:7
    tests["date_locale"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleString();
    };
    tests["local_full weekday name"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleFormat("%A");
    };
    tests["local_abbr weekday name"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleFormat("%a");
    };
    tests["local_full month_name"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleFormat("%B");
    };
    tests["local_abbr month_name"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleFormat("%b");
    };
    tests["toLocaleFormat_Z"] = function () {
        return new Date(Date.UTC(1970, 0, 1)).toLocaleFormat("%Z");
    };
    test_runner.addTest(tests); // add all the tests at once
}());