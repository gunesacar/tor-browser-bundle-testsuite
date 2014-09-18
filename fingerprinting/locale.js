(function () {
    "use strict";
    // test OS locale leak via datetime localization
    // https://trac.torproject.org/projects/tor/ticket/5926#comment:7
    var add_test = test_runner.addTest,
        epoch = new Date(Date.UTC(1970, 0, 1));
    // take a fixed reference time (epoch) and check localized version 
    add_test("locale.epoch_full_weekday", epoch.toLocaleFormat("%A"));
    add_test("locale.epoch_abbr_weekday", epoch.toLocaleFormat("%a"));
    // epoch weekday may be Wed or Thu depending on the TZ, let's store as numeric
    add_test("locale.epoch_weekday_number", epoch.toLocaleFormat("%u"));
    add_test("locale.epoch_full_month", epoch.toLocaleFormat("%B"));
    add_test("locale.epoch_abbr_month", epoch.toLocaleFormat("%b"));
    add_test("locale.epoch_24hrs", epoch.toLocaleFormat("%H"));
    add_test("locale.timezone_name", epoch.toLocaleFormat("%Z"));
}());