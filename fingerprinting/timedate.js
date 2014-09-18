(function () {
    "use strict";
    var add_test = test_runner.addTest,
        now = new Date();
    add_test("timezone_by_get_tz_offset", now.getTimezoneOffset());
    add_test("msec_since_epoch", now.getTime());
    add_test("timezone_by_utc_hrs", function () {
        return (now.getHours() - now.getUTCHours() + 24) % 24;
    });
}());
