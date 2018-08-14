var connection = require ('./connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}
function objToSql(myObj) {
	var arr = [];

	for (var key in myObj) {
		arr.push(key + "=" + myObj [key]);
	}

	return arr.toString();
}

// Create the ORM object to perform SQL queries
var orm = {
	selectAll: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		var queryString = "SELECT * FROM " + tableInput + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// The callback function returns the result
			cb(result);
		});
	},

	insertOne: function(table, cols, vals, cb) {
		// Construct a query to insert one row into the table
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// Query database now
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// The callback function returns the result
			cb(result);
		});
	},
	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;


		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// The callback function returns the result
			cb(result);
		});
	}
};

// Export the Object Relational Model so other modules can use it
module.exports = orm;