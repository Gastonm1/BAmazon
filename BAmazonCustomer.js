var mysql = require ("mysql");
var inquirer = require ("inquirer");

// Connection to sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Musketeers33!",
    database: "BAmazon_DB"
});

// Connect MySQL server & the sql database
connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function (err, data){
    console.log(err,data);
})

// // Below is a function that uses inquirer to display prompts to the user for what action they should take
// function initApp(){
//     var query = "SELECT * FROM products";
//     connection.query(query, function(err, res){
//         for (var i = 0; i < res.length; i++) {
//             console.log(res[i]);
//         }
//         initApp();
//     })
//     }).then(function(answer){
//         switch
//     // based on the users answer, use switch case to select function.
//     })


//     inquierer.prompt({
//         name: "products",
//         type: "rawlist",
//         message: "Want to buy something?",
//         choices: ["?", "?", "EXIT"]