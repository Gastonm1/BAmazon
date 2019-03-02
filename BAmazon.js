var mysql = require ("mysql");
var inquierer = require ("inquirer");

// Connection to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "BAmazon_DB"
});

// Connect MySQL server & the sql database
connection.connection(function(err){
    if (err) throw err;
    StaticRange();
});

// Below is a function that uses inquirer to display prompts to the user for what action they should take
function start(){
    inquierer.prompt({
        name: "?",
        type: "list",
        message: "?"
        choices: ["?", "?", "EXIT"]
    }).then(function(answer){
    // based on the users answer, use switch case to select function.
    })
