var test_runner = (function (conf) {
    "use strict";
    var config = conf || {debug: true};
    var runner = { tests : {} };
    runner.getResult = function (test) {
        if (typeof test === 'function') {
            try {
                return test();
            } catch (exc) { // return exception msg as the test result. makes sense? !!!
                if (config.debug) {
                    console.log("Exception while running: " + exc.message);
                }
                return FPUTILS.html_entities(exc.message.substring(0, 100)); // only get the first 100 chars
            }
        } else {
            return test;
        }
    };
    runner.addTest = function (feature, test) {
        var key;
        if (typeof feature === 'object') {
            for (key in feature) {
                if (feature.hasOwnProperty(key)) {
                    runner.addTest(key, feature[key]);
                }
            }
        } else {
            if (runner[feature] !== undefined) {
                return runner; // don't overwrite existing tests, !!! log at debug mode
            }
            runner.tests[feature] = runner.getResult(test);
        }
        return runner;
    };
    return runner;
}());