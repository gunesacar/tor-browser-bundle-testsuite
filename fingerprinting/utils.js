var FPUTILS = (function () {
	var utils = {},
	    row_id = 1;
	// http://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
	utils.html_entities = function (str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    
	utils.add_result_row = function(table_id, test_title, test_result){
		
	    var table_ref = document.getElementById(table_id);
		
		var new_row   = table_ref.insertRow(-1);
		
		var row_id_cell  = new_row.insertCell(0);
        var row_id_txt  = document.createTextNode(row_id);
        row_id_cell.appendChild(row_id_txt);      
        
        var title_cell  = new_row.insertCell(1);
        var title_txt  = document.createTextNode(test_title);
        title_cell.appendChild(title_txt);      
        
        var result_cell  = new_row.insertCell(2);
		var result_txt  = document.createTextNode(test_result);
		result_cell.appendChild(result_txt);
		row_id = row_id + 1;
		
	};
	
	utils.print_fp = function (test_runner, table_id){
		console.log("test_runner", test_runner);
		
		document.getElementById("json_result").textContent = JSON.stringify(test_runner.tests, null,"    ");
		//document.body.appendChild(document.createTextNode(JSON.stringify(test_runner, null, 4)));
		for (var prop in test_runner.tests){
            if (test_runner.tests.hasOwnProperty(prop)) {
                utils.add_result_row(table_id, prop, test_runner.tests[prop]);    
            }
		}
	};

	return utils;
}());
