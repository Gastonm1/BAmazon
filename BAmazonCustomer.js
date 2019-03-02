var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection to sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Musketeers33!",
  database: "BAmazon_DB"
});

// Connect MySQL server & the sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
  initApp();
});

// connection.query("SELECT * FROM products", function (err, data){
//     console.log(err, data);

// })    <-- DO NOT NEED=====================================================

// Below is a function that uses inquirer to display prompts to the user for what action they should take
function initApp() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "See all available items for sale",
        "Search By product ID",
        "How many units of product would you like to purchase?",
        "EXIT"
      ]
    })
    .then(function(answer) {

      switch (answer.action) {
        case "See all available items for sale":
          productList();
          break;

        case "Search By product ID":
          productID();
          break;

        case "How many units of product would you like to purchase?":
          productUnits();
          break;
      }
    })
}

function productList(){
  var query = "SELECT product_name, price, stock_quantity FROM products";
  connection.query(query, function(err, res) {
 	console.table(res)
  }); 
  };