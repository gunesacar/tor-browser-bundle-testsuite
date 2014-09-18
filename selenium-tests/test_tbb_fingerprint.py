#!/usr/bin/python
import tbbtest
import json
import os
MAX_ERR_DUMP = 100

class Test(tbbtest.TBBTest):
    def test_browser_fp(self):
        test_url = "file://" + os.path.abspath(os.path.join(os.path.dirname(tbbtest.__file__),
                                                            os.pardir, "fingerprinting", "index.html"))
        self.driver.get(test_url)
        test_result = self.driver.find_element_by_css_selector("#json_result").text
        self.assertTrue(len(test_result))
        try:
            test_result_json = json.loads(test_result)
        except:
            self.fail("Fingerprinting test result is not valid JSON %s" % test_result[:MAX_ERR_DUMP])
        print test_result_json