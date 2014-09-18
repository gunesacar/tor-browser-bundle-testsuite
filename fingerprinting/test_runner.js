var test_runner = (function (conf) {
    "use strict";
    var config = conf || {debug: true},
        runner = { tests : {} };
    
    runner.html_entities = function (str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    
    // Run the test, return the result.
    runner.getResult = function (test) {
        if (typeof test === 'function') {
            try {
                return test();
            } catch (exc) { // return exception msg as the test result. makes sense? !!!
                if (config.debug) {
                    console.log("Handling test exception, no worries: " + exc.message);
                }
                // do we need to escape browser exception msgs? Also get the first 100 chars only
                return runner.html_entities(exc.message.substring(0, 100));
            }
        } else {
            return test;
        }
    };

    // Run the test, store the result 
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
